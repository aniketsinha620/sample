
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import SideNavbar from './SideNavbar';
import TravelHistory from './TravelHistory';
import Profile from './Profile';

const Dashboard = () => {
    const { authUser } = useAuthContext();

    return (
        <div className=" bg-white min-h-screen w-screen flex z-[100]">
            <div className=''>
                <SideNavbar />
            </div>
            <div className="flex flex-col mt-[60px] flex-grow ">
                <Routes>
                    <Route path="/" element={<Profile />} />
                    {/* <Route path="/" element={<h1 className='text-black'>Dashboard Main Page</h1>} /> */}
                    <Route path="/history" element={<TravelHistory />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* Add more routes for other dashboard components */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
