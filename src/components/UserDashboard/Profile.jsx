// import React, { useState } from 'react';
// import { useAuthContext } from '../context/AuthContext';
// import { FaRegEdit } from "react-icons/fa";
// // import SideNavbar from './SideNavbar';
// // import TravelHistory from './TravelHistory';
// // import { Routes } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { CircularProgress } from '@mui/material';

// const Profile = () => {
//     const { authUser, setAuthUser } = useAuthContext()
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedUser, setEditedUser] = useState({ ...authUser });
//     const [loading, setLoading] = useState(false)

//     const handleEdit = () => {
//         setIsEditing(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log({ name, value })
//         setEditedUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const registerChanges = async (department, address, jobTitle, phoneNumber) => {
//         try {

//             const res = await fetch('http://localhost:8080/api/v1/users/updateUser',
//                 {
//                     method: 'POST',
//                     headers: {
//                         Accept: "application/json",
//                         "content-Type": "application/json"
//                     },
//                     credentials: "include",
//                     body: JSON.stringify({ department, address, jobTitle, phoneNumber })

//                 }
//             )

//             const data = await res.json();
//             console.log(data.data)
//             const destructureData = data.data
//             localStorage.setItem("User", JSON.stringify(destructureData));
//             setAuthUser(destructureData)
//             toast.success("Suceesfully Registered");
//             setLoading(false)

//         }
//         catch (error) {
//             console.log(error)
//             setLoading(false)
//             toast.error("something went wrong");

//         }

//     }


//     const handleSave = () => {
//         setIsEditing(false);
//         setLoading(true)
//         const { department, address, jobTitle, phoneNumber } = editedUser
//         registerChanges(department, address, jobTitle, phoneNumber)
//         console.log("Saved User:", editedUser);
//     };



//     return (
//         <>
//             {loading && (
//                 <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-[200]`}>
//                     <div className="bg-gradient-to-b from-neutral-100 to-neutral-300 text-black p-4 rounded-lg flex flex-col  items-center justify-center">
//                         <div className="text-lg font-semibold">
//                             <img src='/LOGO1.png' style={{ width: '150px' }}></img>
//                         </div>
//                         <div>
//                             <CircularProgress />
//                         </div>

//                     </div>
//                 </div>
//             )}
//             <div className="bg-gray-100 min-h-screen z-[100] text-black">
//                 <div className="w-full h-40 bg-blue-500 mb-4 relative" style={{ backgroundImage: `url(${authUser ? authUser.coverImage : "/outerP.jpg"})` }}>

//                     <div className="absolute bottom-0 left-0 p-4 text-white">
//                         <h1 className="text-xl font-bold">{authUser ? authUser.fullname.toUpperCase() : "Welcome, User"}!</h1>
//                         <p className="text-sm">This is your dashboard</p>
//                     </div>
//                 </div>

//                 {/* avatar  */}
//                 <div className="flex items-center mb-8 flex-col md:flex-col">
//                     <div className="w-32 h-32 rounded-full overflow-hidden mr-4">
//                         <img src={authUser ? authUser.avatar : "/photo_aniket.jpg"} alt="Avatar" className="w-full h-full object-cover" />
//                     </div>
//                     <div>
//                         <h2 className="text-sm md:text-xl font-bold text-black">{authUser ? authUser.username : "User Name"}</h2>
//                     </div>
//                 </div>

//                 {isEditing ?
//                     <div className='flex w-[95%] md:wd-[100%] md:pr-6'>
//                         <div className="max-w-3xl mx-auto w-[100%] md:w-[70%] bg-white p-8 shadow-lg rounded-lg">
//                             <h1 className="text-xl md:text-3xl font-semibold mb-4">Employee Information</h1>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">jobTitle:</span>
//                                 <input
//                                     type="text"
//                                     name="jobTitle"
//                                     value={editedUser.jobTitle}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">address:</span>
//                                 <input
//                                     type="text"
//                                     name="address"
//                                     value={editedUser.address}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">department:</span>
//                                 <input
//                                     type="text"
//                                     name="department"
//                                     value={editedUser.department}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">PhoneNumber:</span>
//                                 <input
//                                     type="text"
//                                     name="phoneNumber"
//                                     value={editedUser.phoneNumber}
//                                     onChange={handleChange}
//                                 />
//                             </div>


//                             <button
//                                 className="px-4 py-2 bg-blue-500 text-white rounded"
//                                 onClick={handleSave}
//                             >
//                                 Save
//                             </button>
//                         </div>
//                         <div className="w-[30%] bg-white p-6 rounded-lg shadow-md mb-[20px] hidden md:block">
//                             <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
//                             <p className="text-gray-700">{authUser ? authUser.fullname.toUpperCase() : "XYZ"} is responsible for leading a team of software engineers in developing innovative solutions for XYZ Company's flagship product. She collaborates closely with product managers and designers to translate requirements into technical specifications and oversees the implementation of software features. Additionally, Emily actively participates in code reviews, mentorship programs, and knowledge-sharing initiatives within the R&D department.</p>
//                         </div>
//                     </div>
//                     :
//                     <div className='flex w-[95%] md:wd-[100%] md:pr-6'>
//                         <div className="max-w-3xl mx-auto w-[100%] md:w-[70%] bg-white p-8 shadow-lg rounded-lg">

//                             <div className='flex items-center justify-between align-center'>
//                                 <div>
//                                     <h1 className="text-xl md:text-3xl font-semibold mb-4">Employee Information</h1>
//                                 </div>
//                                 <div>
//                                     <button className="mt-2 mr-2 px-2 py-1  text-black rounded" onClick={handleEdit}>
//                                         <FaRegEdit />
//                                     </button>
//                                 </div>

//                             </div>

//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Name:</span>
//                                 <span>{authUser ? authUser.fullname : "Welcome, User"}</span>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Email:</span>
//                                 <span>{authUser ? authUser.email : "user@example.com"}</span>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Job Title:</span>
//                                 <span>{authUser ? authUser.jobTitle.toUpperCase() : 'Not Available'}</span>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Department:</span>
//                                 <span>{authUser ? authUser.department.toUpperCase() : 'Not Available'}</span>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Start Date:</span>
//                                 <span>2023-03-20</span>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Phone Number:</span>
//                                 <span>{authUser ? authUser.phoneNumber: "Not Available"}</span>
//                             </div>
//                             <div className="flex flex-col mb-4">
//                                 <span className="font-semibold">Address:</span>
//                                 <span>{authUser ? authUser.address : 'Not Available'}</span>
//                             </div>
//                         </div>

//                         <div className="w-[30%] bg-white p-6 rounded-lg shadow-md mb-[20px] hidden md:block">
//                             <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
//                             <p className="text-gray-700">{authUser ? authUser.fullname.toUpperCase() : "XYZ"} is responsible for leading a team of software engineers in developing innovative solutions for XYZ Company's flagship product. She collaborates closely with product managers and designers to translate requirements into technical specifications and oversees the implementation of software features. Additionally, Emily actively participates in code reviews, mentorship programs, and knowledge-sharing initiatives within the R&D department.</p>
//                         </div>
//                     </div>
//                 }
//             </div>
//         </>
//     );
// };

// export default Profile;


// // import React, { useState } from 'react';
// // import { useAuthContext } from '../context/AuthContext';
// // import SideNavbar from './SideNavbar';
// // import TravelHistory from './TravelHistory';
// // import { Routes } from 'react-router-dom';
// // import { CircularProgress } from '@mui/material';

// // const Profile = () => {
// //     const { authUser, setauthUser } = useAuthContext();
// //     const [isEditing, setIsEditing] = useState(false);
// //     const [editedUser, setEditedUser] = useState({ ...authUser });

// //     const handleEdit = () => {
// //         setIsEditing(true);
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         console.log({ name, value });
// //         setEditedUser((prevUser) => ({
// //             ...prevUser,
// //             [name]: value,
// //         }));
// //     };

// //     const registerChanges = async (department, address, jobTitle) => {
// //         try {
// //             const res = await fetch('http://localhost:8080/api/v1/users/update', {
// //                 method: 'POST',
// //                 headers: {
// //                     Accept: "application/json",
// //                     "Content-Type": "application/json"
// //                 },
// //                 credentials: "include",
// //                 body: JSON.stringify({ department, address, jobTitle })
// //             });

// //             if (!res.ok) {
// //                 throw new Error('Network response was not ok');
// //             }

// //             const data = await res.json();
// //             const destructureData = data.data.user;
// //             console.log(destructureData)
// //             // localStorage.setItem("User", JSON.stringify(destructureData));
// //             // setauthUser(destructureData);
// //         } catch (error) {
// //             console.log(error);
// //         }
// //     };

// //     const handleSave = () => {
// //         setIsEditing(false);
// //         const { department, address, jobTitle } = editedUser;
// //         registerChanges(department, address, jobTitle);
// //         console.log("Saved User:", editedUser);
// //     };

// //     // Travel history data
// //     const travelHistory = [
// //         { date: '2024-04-28', time: '10:00 AM', source: 'City A', destination: 'City B' },
// //         { date: '2024-04-29', time: '11:30 AM', source: 'City B', destination: 'City C' },
// //     ];

// //     return (
// //         <div className="bg-gray-100 min-h-screen z-[100] text-black">
// //             {/* Your UI components */}
// //         </div>
// //     );
// // };

// // export default Profile;



import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { FaRegEdit } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { CircularProgress } from '@mui/material';

const Profile = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({ ...authUser });
    const [loading, setLoading] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const registerChanges = async (department, address, jobTitle, phoneNumber) => {
        try {
            const res = await fetch('http://localhost:8080/api/v1/users/updateUser', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ department, address, jobTitle, phoneNumber })
            });

            const data = await res.json();
            const destructureData = data.data;
            localStorage.setItem("User", JSON.stringify(destructureData));
            setAuthUser(destructureData);
            toast.success("Successfully Registered");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Something went wrong");
        }
    };

    const handleSave = () => {
        setIsEditing(false);
        setLoading(true);
        const { department, address, jobTitle, phoneNumber } = editedUser;
        registerChanges(department, address, jobTitle, phoneNumber);
    };

    return (
        <>
            {loading && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-[200]`}>
                    <div className="bg-gradient-to-b from-neutral-100 to-neutral-300 text-black p-4 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-lg font-semibold">
                            <img src='/LOGO1.png' style={{ width: '150px' }} alt="Logo" />
                        </div>
                        <div>
                            <CircularProgress />
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-gray-100 min-h-screen z-[100] text-black">
                <div className="w-full h-40 bg-blue-500 mb-4 relative" style={{ backgroundImage: `url(${authUser ? authUser.coverImage : "/outerP.jpg"})` }}>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h1 className="text-xl font-bold">{authUser ? authUser.fullname.toUpperCase() : "Welcome, User"}!</h1>
                        <p className="text-sm">This is your dashboard</p>
                    </div>
                </div>

                <div className="flex items-center mb-8 flex-col md:flex-col">
                    <div className="w-32 h-32 rounded-full overflow-hidden mr-4">
                        <img src={authUser ? authUser.avatar : "/photo_aniket.jpg"} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-sm md:text-xl font-bold text-black">{authUser ? authUser.username : "User Name"}</h2>
                    </div>
                </div>

                {isEditing ? (
                    <div className='flex w-[95%] md:wd-[100%] md:pr-6'>
                        <div className="max-w-3xl mx-auto w-[100%] md:w-[70%] bg-white p-8 shadow-lg rounded-lg">
                            <h1 className="text-xl md:text-3xl font-semibold mb-4">Employee Information</h1>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Job Title:</span>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={editedUser.jobTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Address:</span>
                                <input
                                    type="text"
                                    name="address"
                                    value={editedUser.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Department:</span>
                                <input
                                    type="text"
                                    name="department"
                                    value={editedUser.department}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Phone Number:</span>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={editedUser.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                        <div className="w-[30%] bg-white p-6 rounded-lg shadow-md mb-[20px] hidden md:block">
                            <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
                            <p className="text-gray-700">{authUser ? authUser.fullname.toUpperCase() : "XYZ"} is responsible for leading a team of software engineers in developing innovative solutions for XYZ Company's flagship product. They collaborate closely with product managers and designers to translate requirements into technical specifications and oversee the implementation of software features. Additionally, they actively participate in code reviews, mentorship programs, and knowledge-sharing initiatives within the R&D department.</p>
                        </div>
                    </div>
                ) : (
                    <div className='flex w-[95%] md:wd-[100%] md:pr-6'>
                        <div className="max-w-3xl mx-auto w-[100%] md:w-[70%] bg-white p-8 shadow-lg rounded-lg">
                            <div className='flex items-center justify-between align-center'>
                                <div>
                                    <h1 className="text-xl md:text-3xl font-semibold mb-4">Employee Information</h1>
                                </div>
                                <div>
                                    <button className="mt-2 mr-2 px-2 py-1 text-black rounded" onClick={handleEdit}>
                                        <FaRegEdit />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Name:</span>
                                <span>{authUser ? authUser.fullname : "Welcome, User"}</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Email:</span>
                                <span>{authUser ? authUser.email : "user@example.com"}</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Job Title:</span>
                                <span>{authUser && authUser.jobTitle ? authUser.jobTitle.toUpperCase() : 'Not Available'}</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Department:</span>
                                <span>{authUser && authUser.department ? authUser.department.toUpperCase() : 'Not Available'}</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Start Date:</span>
                                <span>2023-03-20</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Phone Number:</span>
                                <span>{authUser ? authUser.phoneNumber : "Not Available"}</span>
                            </div>
                            <div className="flex flex-col mb-4">
                                <span className="font-semibold">Address:</span>
                                <span>{authUser ? authUser.address : 'Not Available'}</span>
                            </div>
                        </div>

                        <div className="w-[30%] bg-white p-6 rounded-lg shadow-md mb-[20px] hidden md:block">
                            <h2 className="text-2xl font-bold mb-4 text-black">Dashboard</h2>
                            <p className="text-gray-700">{authUser ? authUser.fullname.toUpperCase() : "XYZ"} is responsible for leading a team of software engineers in developing innovative solutions for XYZ Company's flagship product. They collaborate closely with product managers and designers to translate requirements into technical specifications and oversee the implementation of software features. Additionally, they actively participate in code reviews, mentorship programs, and knowledge-sharing initiatives within the R&D department.</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;
