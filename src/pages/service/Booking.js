// import React, { useEffect, useState } from 'react';
// import "./Service.css";
// import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';
// import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
// import Seat_booking from './Seat_booking';
// import Map from './map/Map';
// import { handleBookRideRegistration } from '../../components/hooks/bookingRide.js';
// import { toast } from 'react-hot-toast';
// import { CircularProgress } from '@mui/material';


// export default function Booking(props) {
//     const [map, setMap] = useState(true);
//     const [vehicleId, setVehicleId] = useState({});
//     const [loading, setLoading] = useState(false)
//     const [ID, setID] = useState();


//     const handleClick = () => {
//         setMap(prev => !prev);
//     };

//     const handleBookRide = () => {
//         setLoading(true)
//         const vehicleId = vehicleId?._id
//         const sendSource = vehicleId?.sendSource
//         const sendDestination = vehicleId?.sendDestination
//         handleBookRideRegistration(vehicleId, sendSource, sendDestination)
//         setLoading(true)
//         toast.success("Suceesfully Booked");

//     }

//     useEffect(() => {
//         const fetchData = async () => {

//             try {
//                 const vehicleID = props.vehicleID;

//                 console.log(props.vehicleID);
//                 const res = await fetch("http://localhost:8080/api/v1/users/bookedVehicle", {
//                     method: "POST",
//                     headers: {
//                         "Accept": "application/json",
//                         "Content-Type": "application/json",

//                     },
//                     credentials: "include",
//                     body: JSON.stringify({
//                         vehicleID
//                     })
//                 });
//                 const data = await res.json();
//                 console.log(data?.data);
//                 setVehicleId(data?.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();

//         // Empty cleanup function
//         return () => { };
//     }, [props.vehicleID]);

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
//             <div className='vechieleselection  ml-0 text-[40px] mt-[40px]  w-[100%] '>
//                 {props.busname}
//             </div>
//             <div className='flex flex-col md:flex-row justify-around gap-4'>
//                 <div className="w-[100%] pb-4 rounded-xl bg-white md:w-[350px]">
//                     <div className="bookingbus-detail">
//                         {props.place === "outside" ?
//                             <div className="bookingbusimg">
//                                 <img src={vehicleId?.image} alt="" />
//                             </div> :
//                             <div className="bookingbusimg">
//                                 <img src={vehicleId?.image} alt="" />
//                             </div>}
//                         <h2>{vehicleId?.title}</h2>
//                         <div className="bookingbusdetail">
//                             <div className="path">
//                                 <img src="/ic_route.svg" alt="" />
//                                 <div className="route">
//                                     <p className='from-route'>{`FROM:-${vehicleId?.sendSource}`}</p>
//                                     <p>{`TO:-${vehicleId?.sendDestination}`}</p>
//                                 </div>
//                             </div>
//                             <div className="busno">
//                                 {vehicleId && props.place === "outside" ?
//                                     <p>BUS NO<h3>{vehicleId.carNumber?.toUpperCase()}</h3></p> :
//                                     <p>CAR NO<h3>{vehicleId.carNumber?.toUpperCase()}</h3></p>}
//                             </div>
//                             <div className="status">
//                                 <p>STATUS:- <h3>NOT RUNNING</h3> </p>
//                             </div>
//                             <div className="contactno">
//                                 <p>CONTACT NO:- <h3>8340283015</h3></p>
//                             </div>
//                         </div>
//                         {props.place === "outside" ? <button className='btn-booking' onClick={handleClick}><p>{map ? "VIEW MAP" : " SEAT MATRIX"}</p><p className='booking-icon'><KeyboardDoubleArrowDownSharpIcon /></p></button> :
//                             <button className='btn-booking' onClick={() => handleBookRide()}>BOOK NOW  <p className='booking-icon'><KeyboardDoubleArrowDownSharpIcon /></p></button>}
//                     </div>
//                 </div>
//                 {props.place === "outside" ?
//                     <>
//                         {map ?
//                             <div className='seat-matrix w-[500px]'>
//                                 <Seat_booking
//                                     vehicleId={vehicleId?._id}
//                                     sendSource={vehicleId?.sendSource}
//                                     sendDestination={vehicleId?.sendDestination}
//                                 />
//                             </div> :
//                             <div className='map-matrix md: width: 50%;'>
//                                 <Map scordinate={props.scordinate} dcordinate={props.dcordinate} />
//                             </div>}
//                     </> :
//                     <div className='map-matrix bg-white'>
//                         <Map scordinate={props.scordinate} dcordinate={props.dcordinate} place={props.place} />
//                     </div>}
//             </div>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import "./Service.css";
import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import Seat_booking from './Seat_booking';
import Map from './map/Map';
import { handleBookRideRegistration } from '../../components/hooks/bookingRide.js';
import { toast } from 'react-hot-toast';
import { CircularProgress } from '@mui/material';

export default function Booking(props) {
    const [map, setMap] = useState(true);
    const [loading, setLoading] = useState(false);
    const [vehicleId, setVehicleId] = useState({});
    const [ID, setID] = useState();

    const handleClick = () => {
        setMap(prev => !prev);
    };

    const handleBookRide = () => {
        setLoading(true);
        const vehicleID = vehicleId?._id;
        const sendSource = vehicleId?.sendSource;
        const sendDestination = vehicleId?.sendDestination;

        handleBookRideRegistration(sendDestination, sendSource, vehicleID)
            .then(() => {
                toast.success("Successfully Booked");
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Booking failed");
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleID = props.vehicleID;
                console.log(vehicleID);
                const res = await fetch("http://localhost:8080/api/v1/users/bookedVehicle", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        vehicleID
                    })
                });
                const data = await res.json();
                console.log(data?.data);
                setVehicleId(data?.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [props.vehicleID]);

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-[200]">
                    <div className="bg-gradient-to-b from-neutral-100 to-neutral-300 text-black p-4 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-lg font-semibold">
                            <img src='/LOGO1.png' style={{ width: '150px' }} alt="Loading" />
                        </div>
                        <div>
                            <CircularProgress />
                        </div>
                    </div>
                </div>
            )}
            <div className='vechieleselection ml-0 text-[40px] mt-[40px] w-[100%]'>
                {props.busname}
            </div>
            <div className='flex flex-col md:flex-row justify-around gap-4'>
                <div className="w-[100%] pb-4 rounded-xl bg-white md:w-[350px]">
                    <div className="bookingbus-detail">
                        <div className="bookingbusimg">
                            <img src={vehicleId?.image} alt="" />
                        </div>
                        <h2>{vehicleId?.title}</h2>
                        <div className="bookingbusdetail">
                            <div className="path">
                                <img src="/ic_route.svg" alt="" />
                                <div className="route">
                                    <p className='from-route'>{`FROM:-${vehicleId?.sendSource}`}</p>
                                    <p>{`TO:-${vehicleId?.sendDestination}`}</p>
                                </div>
                            </div>
                            <div className="busno">
                                <p>{props.place === "outside" ? "BUS NO" : "CAR NO"}<h3>{vehicleId.carNumber?.toUpperCase()}</h3></p>
                            </div>
                            <div className="status">
                                <p>STATUS:- <h3>NOT RUNNING</h3> </p>
                            </div>
                            <div className="contactno">
                                <p>CONTACT NO:- <h3>8340283015</h3></p>
                            </div>
                        </div>
                        {props.place === "outside" ? (
                            <button className='btn-booking' onClick={handleClick}>
                                <p>{map ? "VIEW MAP" : " SEAT MATRIX"}</p>
                                <p className='booking-icon'><KeyboardDoubleArrowDownSharpIcon /></p>
                            </button>
                        ) : (
                            <button className='btn-booking' onClick={handleBookRide}>
                                BOOK NOW <p className='booking-icon'><KeyboardDoubleArrowDownSharpIcon /></p>
                            </button>
                        )}
                    </div>
                </div>
                {props.place === "outside" ? (
                    <>
                        {map ? (
                            <div className='seat-matrix w-[500px]'>
                                <Seat_booking
                                    vehicleId={vehicleId?._id}
                                    sendSource={vehicleId?.sendSource}
                                    sendDestination={vehicleId?.sendDestination}
                                />
                            </div>
                        ) : (
                            <div className='map-matrix md: width: 50%;'>
                                <Map scordinate={props.scordinate} dcordinate={props.dcordinate} />
                            </div>
                        )}
                    </>
                ) : (
                    <div className='map-matrix bg-white'>
                        <Map scordinate={props.scordinate} dcordinate={props.dcordinate} place={props.place} />
                    </div>
                )}
            </div>
        </>
    );
}
