import React from 'react';
import { useAuthContext } from '../../components/context/AuthContext';

const AdminProfile = () => {
    const { authUser } = useAuthContext();


    if (!authUser || !authUser.data || !authUser.data.user) {
        return null;
    }

    return (
        <div className='w-[100%] md:w-[25%] bg-[#343434] p-2 rounded-lg text-[#adb5bd]'>
            <div className="flex items-center mb-8 flex-col md:flex-col">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-4 bg-gray-200 md:mt-[20px]">
                    <img src={authUser.data.user.avatar || "/photo_aniket.jpg"} alt="Avatar" className="w-full h-full object-contain" />
                </div>
                <div className='mt-[10px] w-[100%] flex justify-center align-center items-center'>
                    <h2 className="text-sm md:text-xl font-bold mr-[18px] text-white">{authUser.data.user.username.toUpperCase()}</h2>
                </div>
            </div>
            <div className='p-2 mb-[20px] md:mb-[0px]'>
                <div className="flex gap-1 mb-4">
                    <span className="font-semibold">Name:</span>
                    <span>{authUser.data.user.fullname.toUpperCase()}</span>
                </div>
                <div className="flex flex-col mb-4">
                    <span className="font-semibold">Email:</span>
                    <span>{authUser.data.user.email}</span>
                </div>
                <div className="flex  mb-4">
                    <span className="font-semibold">Start Date:</span>
                    <span>2023-03-20</span> {/* Example, replace with actual data */}
                </div>
                <div className="flex  mb-4">
                    <span className="font-semibold">Phone Number:</span>
                    <span>{authUser.data.user.phoneNumber}</span>
                </div>
                <div className="flex mb-4">
                    <span className="font-semibold">Address:</span>
                    <span>{authUser.data.user.address || 'Not Available'}</span>
                </div>
            </div>

            <div className='w-full rounded-lg bg-opacity-20 bg-[#38b000] flex items-center justify-center border-1
             border-[#006400] p-2'>
                <div className='text-green-600'>Edit</div>
            </div>


        </div>
    );
}

export default AdminProfile;
