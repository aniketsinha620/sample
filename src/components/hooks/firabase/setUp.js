

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYb6Tx8nIxUljFVuxjYr_Ty7D6R69pDUg",
    authDomain: "corporateyatra-94543.firebaseapp.com",
    projectId: "corporateyatra-94543",
    storageBucket: "corporateyatra-94543.appspot.com",
    messagingSenderId: "340717556588",
    appId: "1:340717556588:web:6c4c7b0294457ae24a9949",
    measurementId: "G-TJW213M2BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export { auth }