import React, { useEffect, useState } from 'react'

const AdminTravel = () => {
    const [travels, setTravel] = useState([]);


    useEffect(() => {
        const fetchTravelHistory = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/v1/adminVerify//adminGetTravelRecord", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                })

                if (res.ok) {
                    const data = await res.json();
                    console.log(data.data)
                    setTravel(data.data)
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchTravelHistory()
    }, [])

    return (
        <div className='text-[#adb5bd]'>
            <h1 className='flex justify-center align-center items-center mb-[20px]'>TravelHistory</h1>

            <div className='w-[100%] bg-[#343434] flex flex-col gap-2 p-2 rounded-lg text-[#adb5bd]'>

                <div kclassName='w-[100%] bg-[#343434] p-2 rounded-lg text-[#adb5bd] flex flex-col gap-2'>
                    <div className="flex justify-around p-1 rounded-lg">

                        <div >
                            <span>EMPOLYEEID</span>

                        </div>
                        <div >
                            <span>SOURCE</span>

                        </div>
                        <div>
                            <span>DESTINATION</span>

                        </div>
                        <div>
                            <span>VEHICLEID</span>
                        </div>
                    </div>
                </div>


                {travels.map((travel) => (
                    <div key={travel.id} className=' flex flex-col '>
                        <div className="flex justify-around p-1 bg-[#575757] rounded-lg">
                            <div>
                                <span>{travel.userID}</span>
                            </div>
                            <div>
                                <span>{travel.sendSource}</span>
                            </div>
                            <div>
                                <span>{travel.sendDestination}</span>
                            </div>
                            <div>
                                <span>{travel.vehicleID}</span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default AdminTravel
