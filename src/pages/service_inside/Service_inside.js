import React, { useRef, useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../service/Service.css";
import Card from '../service/Card';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Card_bus from '../service/Card_bus';
// import car04 from '../../homeassets/car04.png'
import Footer from '../Footer';
import { CircularProgress } from '@mui/material';
const places = [
    {
        name: 'ALKUSAA GATE',
        latitude: 23.6789,
        longitude: 86.1517
    },
    {
        name: 'RMHS GATE',
        latitude: 23.6612,
        longitude: 86.1484
    },
    {
        name: 'RMHS GATE',
        latitude: 23.6606,
        longitude: 86.1483
    },
    {
        name: 'BANDHDIH YARD',
        latitude: 23.6765,
        longitude: 86.1234
    },
    {
        name: 'LOHANCHAL',
        latitude: 23.6889,
        longitude: 86.1612
    },
    {
        name: 'RAILWAY SIDING',
        latitude: 23.6701,
        longitude: 86.1345
    },
    {
        name: '4 LANE',
        latitude: 23.6812,
        longitude: 86.1423
    },
    // Add more places in Bokaro as needed
];

export default function Services_inside() {
    const provider = new OpenStreetMapProvider();
    const [searchResults, setSearchResults] = useState([]);
    const [vehicleData, setVehicleData] = useState([]);
    const [source, setSource] = useState([]);
    const [destination, setDestination] = useState([]);
    const [card, setCard] = useState(true);
    const SourceRef = useRef(null);
    const DestinationRef = useRef(null);
    const [loading, setLoading] = useState(false);


    const handleVehicleData = async (sendSource, sendDestination) => {
        try {
            console.log(sendSource, sendDestination);

            const res = await fetch("http://localhost:8080/api/v1/users/findTheVehicle", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ sendSource, sendDestination })
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            console.log(data?.data);
            setVehicleData(data?.data)
            if (!data?.data) {
                alert("No Vehicles Found")
            }
        } catch (error) {
            alert("No Vehicles Found")
            console.error(error);
            setVehicleData()
        }
    }


    const handleClick = async (e) => {
        e.preventDefault();

        if (SourceRef.current.value.trim() === '' || DestinationRef.current.value.trim() === '') {
            alert("Enter the Source and Destination");
            return;
        }
        setLoading(true);
        setCard(false);
        const sendSource = SourceRef.current.value
        const sendDestination = DestinationRef.current.value
        // handleBooking(sendSource, sendDestination);
        handleVehicleData(sendSource, sendDestination);
        const sourceName = SourceRef.current.value.trim();
        const destinationName = DestinationRef.current.value.trim();

        const sourcePlace = places.find(place => place.name === sourceName);
        const destinationPlace = places.find(place => place.name === destinationName);

        if (sourcePlace) {
            const sourceLatitude = sourcePlace.latitude;
            const sourceLongitude = sourcePlace.longitude;
            setSource([sourceLongitude, sourceLatitude]);
            console.log(source);
        } else {
            const results = await provider.search({ query: SourceRef.current.value });
            if (results.length > 0) {
                setSearchResults(results);
                const newX = results[0].x;
                const newY = results[0].y;
                setSource([newX, newY]);
                console.log(source);
            } else {
                console.log("No results found for source.");
            }
        }

        if (destinationPlace) {
            const destinationLatitude = destinationPlace.latitude;
            const destinationLongitude = destinationPlace.longitude;
            setDestination([destinationLongitude, destinationLatitude]);
            console.log(destination);
        } else {
            const cityResults = await provider.search({ query: DestinationRef.current.value });
            if (cityResults.length > 0) {
                setSearchResults(cityResults);
                const cityX = cityResults[0].x;
                const cityY = cityResults[0].y;
                setDestination([cityX, cityY]);
                console.log(destination);
            } else {
                console.log("No results found for destination.");
            }
        }
        const scrollToBottom = () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth" // Smooth scrolling animation
            });
        };
        setTimeout(() => {
            setLoading(false);
            scrollToBottom();
        }, 1000);
        return false;


    };


    const handleChange = () => {
        console.log("hello");
    };


    useEffect(() => {
        if (source === null) {
            setSource([86.1828, 23.6362]);
        }
    }, [source]);


    useEffect(() => {
        if (destination === null) {
            setDestination([86.151115, 23.669296]);

        }
    }, [destination]);

    return (

        <>

            {loading && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50`}>
                    <div className="bg-white text-black p-4 rounded-lg flex flex-col  items-center justify-center">
                        <div className="text-lg font-semibold">
                            <img src='/LOGO1.png' style={{ width: '150px' }}></img>
                        </div>
                        <div>
                            <CircularProgress />
                        </div>

                    </div>
                </div>
            )}
            <div className="bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: 'url(/insideP1.jpg)' }} >
                <div className="container mx-auto px-4">
                    <div className="md:flex justify-between items-center">
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div className="md:flex ">

                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Travel Planner</div>
                                    <p className="mt-2 text-gray-500">Plan your journey</p>
                                    <form className="mt-4">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="source">Source</label>

                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="source" type="text" placeholder="Enter source"

                                                ref={SourceRef}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">Destination</label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destination" type="text" placeholder="Enter destination"

                                                ref={DestinationRef}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="people">Number of People</label>
                                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="people">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>

                                            </select>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                                                onClick={handleClick}
                                            >
                                                Plan Journey
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2"></div>
                    </div>
                </div>


            </div>
            <section>
                {card === true ?
                    <div className='bus-card'>

                        <div className='vechieleselection  ml-0 text-[40px] mt-[40px]  w-[100%]'>
                            Our Vehicles
                        </div>
                        <Card place="inside" />
                    </div>
                    :
                    <div className='Card_bus-service'>
                        <div>
                            <Card_bus source={SourceRef.current.value} destination={DestinationRef.current.value}
                                scordinate={source} dcordinate={destination} place="inside" vehicleData={vehicleData} />

                        </div>
                    </div>}
            </section>

            <Footer />
        </>
    );
}
