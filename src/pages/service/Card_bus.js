import React, { useRef, useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import Booking from './Booking';





export default function Card_bus({ source, destination, scordinate, dcordinate, place, vehicleData }) {
    const [verify, setVerify] = React.useState(true)
    const [busName, setbusName] = React.useState(null)
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [vehicleID, setVehicleID] = useState('');

    const handleClick = (dataId, e) => {
        setVerify(prev => !prev)
        setVehicleID(dataId)
        setbusName(e)
    }




    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            now.setMinutes(now.getMinutes() + 30);
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setCurrentDate(date);
            setCurrentTime(time);
        }

        const interval = setInterval(updateTime)
        return () => clearInterval(interval);
    }, [])
    return (
        <>
            {verify ?
                <>
                    <div className='vechieleselection  ml-0 text-[40px] mt-[40px]  w-[100%]'>
                        Result Found
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-4'>

                        {vehicleData &&

                            vehicleData.map((data, index) => (
                                <div key={index} className='bg-white text-black rounded-lg shadow-lg overflow-hidden pb-6'>
                                    <div className="busName text-white">
                                        <h2 className=''>AAT KINGS</h2>
                                        <div className="time">
                                            {currentTime}
                                        </div>
                                    </div>
                                    <p className='text-black ml-[25px]'>{data.title}</p>
                                    <div className="card_bus_detail">
                                        <div className="Card_bus_travel">
                                            <div className="source">
                                                <div className="icon"><NearMeIcon /></div>
                                                <div className="detail">
                                                    <p><h1>{source}</h1>{currentDate} </p>
                                                </div>
                                            </div>
                                            <div className="destination">
                                                <div className="icon"><LocationOnIcon /></div>
                                                <div className="detail">
                                                    <p><h1>{destination}</h1>{currentDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button h-[30px] md:h-[40px] ">
                                            <button onClick={() => handleClick(data._id, "ATT KINGs")}>BOOK NOW</button>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }


                    </div>
                </>
                :
                <div>
                    <Booking busname={busName} source={source} destination={destination}
                        scordinate={scordinate} dcordinate={dcordinate} place={place} vehicleID={vehicleID} />

                </div>}

        </>
    )
}

