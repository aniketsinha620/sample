import React from 'react'
import EmployeeData from './EmployeeData'
import AdminTravel from './AdminTravel'
import { Route, Routes } from 'react-router-dom'

const AdminData = () => {
    return (
        <div className='bg-[#111111] md:w-[50%] w-[100%] flex flex-col gap-3'>
            
            <nav>
                
            </nav>

            <Routes>
                <Route path="/" element={<EmployeeData />} />
                <Route path="/employeeTravelHistory" element={<AdminTravel />} />

            </Routes>


        </div>
    )
}

export default AdminData
