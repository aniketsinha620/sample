


import BackgroundBeams from "../components/ui/background-beams.js";
import React, { useState } from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { CircularProgress } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate()
  const { authUser, setAuthUser } = useAuthContext()
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/v1/users/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(formData)
      })
      setLoading(false)
      const data = await res.json();
      const destructureData = data.data.user
      console.log(destructureData)
      toast.success("Suceesfully Registered");
      localStorage.setItem("User", JSON.stringify(destructureData));
      setAuthUser(destructureData)
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
    console.log(formData);
    handleLogin()
  };

  return (
    <>
      {loading && (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-[200]`}>
          <div className="bg-gradient-to-b from-neutral-100 to-neutral-300 text-black p-4 rounded-lg flex flex-col  items-center justify-center">
            <div className="text-lg font-semibold">
              <img src='/LOGO1.png' style={{ width: '150px' }}></img>
            </div>
            <div>
              <CircularProgress />
            </div>

          </div>
        </div>
      )}
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased z-[100] max-h-screen">
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex justify-center items-center">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              𝕾𝖎𝖌𝖓 𝖚𝖕
            </h1>
            <img src="/LOGO.png" className="hidden md:block" style={{ width: '100px' }} alt="" />
            <img src="/LOGO.png" className="block md:hidden" style={{ width: '50px' }} alt="" />
          </div>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to ℭ𝔬𝔯𝔭𝔬𝔯𝔞𝔱𝔢यात्रा, where we streamline and digitalize your company's travel processes. We specialize in organizing and recording employee travel arrangements with precision and efficiency.
          </p>
          <form className="mt-8 space-y-6 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1" placeholder="Email address"
              value={formData.email}
              onChange={handleChange} />
            <input id="username" name="username" type="text" autoComplete="username" required
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1"
              placeholder="Username" value={formData.username} onChange={handleChange} />
            <input id="password" name="password" type="password" autoComplete="current-password" required
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-1" placeholder="Password" value={formData.password} onChange={handleChange} />

            <Link to='/register' className="w-full relative z-10 text-neutral-500 max-w-lg bg-clip-text text-transparent mt-0 text-[13px] bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans underline ">Already have a account</Link>

            <Link to='/admin/login' className="w-full relative z-10 text-neutral-500 max-w-lg bg-clip-text text-transparent mt-0 text-[13px] bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans underline ">Login as Admin</Link>

            <button type="submit" className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-[30%] p-3 relative z-10 mt-4  bg-gradient-to-b from-neutral-300 to-neutral-600 text-black " >
              Sign up
            </button>
          </form>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}


export default Signup;
