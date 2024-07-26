// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//       },
//       colors: {
//         richblack: {
//           2:"#12B7B6",
//           5: "rgba(33, 31, 31, 0.733)",
//           25: "#DBDDEA",
//           100: "rgba(33, 31, 31, 0.733)",
//           200: "#999DAA",
//           700: "#2C333F",
//           800: "#161D29",
//           900: "#F3F3F3",
//         },
//         blue: {
//           100: "#47A5C5",
//           200: "#545454",
//         },
//         pink: {
//           200: "#EF476F",
//         },

//         yellow: {
//           50: "#FFD60A",
//         },
//       },
//     },
//   },
//   plugins: [],
// };


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(173,189,186,0.5832457983193278) 80%)',
      },
      colors: {
        ...colors,
        richblack: {
          2: "#12B7B6",
          5: "rgba(33, 31, 31, 0.733)",
          25: "#DBDDEA",
          100: "rgba(33, 31, 31, 0.733)",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#F3F3F3",
          ...colors.richblack // If you want to extend richblack colors from the Tailwind color palette
        },
        blue: {
          100: "#47A5C5",
          200: "#545454",
          ...colors.blue // If you want to extend blue colors from the Tailwind color palette
        },
        pink: {
          200: "#EF476F",
          ...colors.pink // If you want to extend pink colors from the Tailwind color palette
        },
        yellow: {
          50: "#FFD60A",
          ...colors.yellow // If you want to extend yellow colors from the Tailwind color palette
        },
      },
    },
  },
  plugins: [addVariablesForColors, nextui()],
  darkMode: "class",

};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
