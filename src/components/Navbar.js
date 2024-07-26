
import React, { useState } from 'react';
import { CiDroplet } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useAuthContext } from './context/AuthContext';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [verify, setVerify] = useState(false);
    const [verifyOption, setVerifyOption] = useState(false);
    const { authUser, setAuthUser } = useAuthContext()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = () => {
        setVerify(!verify);
    }
    const handleoptionverification = () => {
        setVerifyOption(!verifyOption);
    };

    const Links = [
        { name: "Home", link: "/", index: "1" },
        { name: "Services", link: "./services/outside", index: "3" },
        { name: "Register", link: "/register", index: "4" },
        { name: "dashboard", link: "/userDashboard", index: "5" }
    ];


    return (
        <nav className='fixed top-0  pt-3 md:pt-0 w-full z-[100] '>
            <div className='md:flex justify-between items-center'>
                <div className='ml-3 flex md:justify-center md:align-center  md:align-center items-center gap-2 p-1'>
                    <img src='/LOGO.png' style={{ width: '50px' }}></img>
                    <h1 className='text-white text-[20px]'>ℭ𝔬𝔯𝔭𝔬𝔯𝔞𝔱𝔢यात्रा   </h1>
                </div>
                <div className='fixed top-3 right-4 text-xl md:hidden  text-white' onClick={handleClick}>
                    {verify ? <IoMdClose /> : <CiMenuFries />}
                </div>

                <ul className={` md:flex  text-[Poppins] md:w-[40%] md:justify-between items-center text-[14px] md:static absolute w-full left-0 p-3  z-[100] md:z-auto    md:bg-transparent ${verify ? "border-b-2 border-black rounded top-10 text-white" : " top-[-280px] "} `}>
                    {Links.map((ele, index) => (
                        <li key={index} className=' m-5 md:m-0 md:hover:underline '>
                            <a href={ele.link}>{ele.name}</a>
                        </li>
                    ))}
                    {authUser ?
                        // <div className="w-16 h-16 rounded-full overflow-hidden mr-4">

                        //     <img src={authUser.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        // </div>
                        <div>
                            <div
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick1}
                                className="w-16 h-16 rounded-full overflow-hidden mr-2"
                            >
                                <img
                                    src={authUser.avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover rounded-full" // Add rounded-full class
                                />
                            </div>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to='/userDashboard'><MenuItem onClick={handleClose}>DashBoad</MenuItem></Link>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                        :
                        <button className='border border-solid h-[40px] bg-black text-white py-2 flex items-center justify-center  px-4 rounded ml-4'>
                            <a href="/login">login</a>
                        </button>}


                </ul>
            </div>
        </nav>
    );
};


export default Navbar;
