// import React, { useState } from 'react';
// import './login.css'; // Import your CSS file

// const ModernLoginPage = () => {
//   const [fullname, setfullname] = useState("");
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('')
//   const [userName, setUserName] = useState('')

//   const handleSignUp = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     // Log all input values
//     console.log("Full Name:", fullname);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Additional code for handling file inputs (avatar and cover image) if needed
//   };

//   const handleLogin = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     // Log email and password for login
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className='login-css-main'>
//       <div className="main">
//         <input type="checkbox" id="chk" aria-hidden="true" />

//         <div className="signup">
//           <form onSubmit={handleSignUp}>
//             <label htmlFor="chk" aria-hidden="true" className='signUp-main-label'>Sign up</label>
//             <input type="text" name="txt" placeholder="Full Name" required=""
//               className='signUp-main-input' value={fullname} onChange={(e) => setfullname(e.target.value)} />
//             <input type="text" name="txt" placeholder="User Name" required=""
//               className='signUp-main-input' value={userName} onChange={(e) => setUserName(e.target.value)} />
//             <input type="email" name="email" placeholder="Email" required=""
//               className='signUp-main-input' value={email} onChange={(e) => setEmail(e.target.value)} />
//             <input type="password" name="pswd" placeholder="Password" required=""
//               className='signUp-main-input' value={password} onChange={(e) => setPassword(e.target.value)} />
//             <input type="file" name="avatar" accept="image/*" required="" style={{ width: '100%', marginBottom: '1rem' }} />
//             <input type="file" name="coverImage" accept="image/*" required="" style={{ width: '100%', marginBottom: '1rem' }} />
//             <button className='login-css-button' type="submit">Sign up</button>
//           </form>
//         </div>

//         <div className="login">
//           <form onSubmit={handleLogin}>
//             <label htmlFor="chk" aria-hidden="true" className='signUp-main-label'>Login</label>
//             <input type="email" name="email" placeholder="Email" required="" className='signUp-main-input' value={email} onChange={(e) => setEmail(e.target.value)} />
//             <input type="password" name="pswd" placeholder="Password" required="" className='signUp-main-input' value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button className='login-css-button' type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernLoginPage;


import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from "../components/context/AuthContext.js"
import { CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundBeams from '../components/ui/background-beams.js';
import { toast } from 'react-hot-toast';



const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        avatar: null,
        coverImage: null,
    });
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { authUser, setAuthUser } = useAuthContext()

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const register = async () => {

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });
        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/register', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }

            });
            const data = response.data.data
            localStorage.setItem("User", JSON.stringify(data));
            setAuthUser(response.data.data)
            console.log(response.data.data)
            setLoading(false)
            toast.success("Suceesfully Registered");
            navigate('/')
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error("something went wrong");

        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        register();


    };

    return (
        <>{loading && (
            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-[200]`}>
                <div className="bg-white text-black p-4 rounded-lg flex flex-col  items-center justify-center">
                    <div className="text-lg font-semibold">
                        <img src='/LOGO1.png' style={{ width: '150px' }}></img>
                    </div>
                    <div>
                        <CircularProgress />
                    </div>

                </div>
            </div>
        )}
            {/* <div className="min-h-screen bg-black flex justify-center items-center">

                <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg text-black">
                    <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                                Full Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
                                Avatar
                            </label>
                            <input
                                className="hidden"
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="avatar"
                                className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 text-center"
                            >
                                Choose Avatar
                            </label>
                            {formData.avatar && (
                                <img
                                    src={URL.createObjectURL(formData.avatar)}
                                    alt="Avatar Preview"
                                    className="mt-2 w-24 h-24 object-cover rounded-lg"
                                />
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverImage">
                                Cover Image
                            </label>
                            <input
                                className="hidden"
                                type="file"
                                id="coverImage"
                                name="coverImage"
                                accept="image/*"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="coverImage"
                                className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 text-center"
                            >
                                Choose Cover Image
                            </label>
                            {formData.coverImage && (
                                <img
                                    src={URL.createObjectURL(formData.coverImage)}
                                    alt="Cover Image Preview"
                                    className="mt-2 w-full h-32 object-cover rounded-lg"
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div> */}
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased z-[100] max-h-screen">
                <div className="max-w-2xl mx-auto p-4">
                    <div className="flex justify-center items-center">
                        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                            ℜ𝔢𝔤𝔦𝔰𝔱𝔢𝔯
                        </h1>
                        <img src="/LOGO.png" className="hidden md:block" style={{ width: '100px' }} alt="" />
                        <img src="/LOGO.png" className="block md:hidden" style={{ width: '50px' }} alt="" />
                    </div>

                    <form className="" onSubmit={handleSubmit}>
                        <input
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1"
                            placeholder="fullName"
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1"
                            placeholder="userName"
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1"
                            placeholder="email"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1"
                            placeholder="password"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <div className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1">
                            <input
                                className="hidden"
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="avatar"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1 "
                            > Choose Avatar
                            </label>
                            {formData.avatar && (
                                <img
                                    src={URL.createObjectURL(formData.avatar)}
                                    alt="Avatar Preview"
                                    className="mt-2 w-24 h-24 object-cover rounded-lg"
                                />
                            )}
                        </div >
                        <div className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1">
                            <input
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1 hidden"
                                type="file"
                                id="coverImage"
                                name="coverImage"
                                accept="image/*"
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="coverImage"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1 "
                            >
                                Choose Cover Image
                            </label>
                            {formData.coverImage && (
                                <img
                                    src={URL.createObjectURL(formData.coverImage)}
                                    alt="Cover Image Preview"
                                    className="mt-2 w-full h-32 object-cover rounded-lg"
                                />
                            )}
                        </div>

                        <Link to='/login' className="w-full mt-[15px] relative z-10 text-neutral-500 max-w-lg bg-clip-text text-transparent  text-[13px] bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans underline ">Already have a account</Link>
                        <div className=' flex justify-center items-center'>
                            <button
                                type="submit"
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-[30%] p-3 relative z-10 mt-4  bg-gradient-to-b from-neutral-300 to-neutral-600 text-black "
                            >
                                Register
                            </button>
                        </div>
                    </form>

                </div>
                <BackgroundBeams />
            </div>
        </>
    );
};

export default Register;
