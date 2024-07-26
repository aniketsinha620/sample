import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import AdminProfile from './AdminProfile'
import AdminData from './AdminData/AdminData'
import AdminCurrent from './AdminCurrent'
import EmployeeData from './AdminData/EmployeeData'


const Admin = () => {

    return (
        <div className='bg-[#111111] h-[100vh] text-black p-[20px] gap-2  flex md:flex-row flex-col  '>
            <AdminProfile />
            <AdminData />
            <AdminCurrent />

            <div className='fixed bottom-4 right-4 md:static md:absolute md:bottom-6 md:right-5 z-10'>
                <Link to='/admin/profile/registerAdminUser'>
                    <button className='w-12 h-12 bg-opacity-20 bg-[#38b000] text-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-[#38b000] hover:text-white border-3
             border-[#006400] focus:outline-none focus:ring-2 focus:bg-[#38b000]'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                        </svg>
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default Admin
