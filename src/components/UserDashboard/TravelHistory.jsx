import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { travelHistory } from "../hooks/travelHistory.js";
import { useAuthContext } from "../context/AuthContext.js";
import { getVehicleDetail } from "../hooks/getVehicleDetail.js";

const columns = [
    {
        key: "vehicleID",
        label: "Vehicle ID",
    },
    {
        key: "sendSource",
        label: "Source",
    },
    {
        key: "sendDestination",
        label: "Destination",
    },
    {
        key: "updatedAt",
        label: "Date/Time",
    }
];

const TravelHistory = () => {
    const [travelData, setTravelData] = useState([]);
    const [vehicleData, setVehicleData] = useState();
    const { authUser } = useAuthContext();
    const [displayCard, setDisplayCard] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataTravel = await travelHistory();
                // Generate unique IDs for each travel history item
                const travelDataWithIds = dataTravel.map((item, index) => ({ ...item, id: index + 1 }));
                setTravelData(travelDataWithIds);
            } catch (error) {
                console.error("Error fetching travel history:", error);
            }
        };

        fetchData();
    }, []);

    const handleDisplay = async (vehicleID) => {
        setDisplayCard(prev => !prev);
        if (vehicleID != 1234567) {
            const receivedData = await getVehicleDetail(vehicleID);
            setVehicleData(receivedData);
        }
    };



    return (
        <>
            {displayCard && (
                <div className={`fixed top-0 left-[20px] md:left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-[200]`} onClick={() => handleDisplay(1234567)}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-[20px] p-6 bg-white">
                        <img className="w-full" src={vehicleData?.image} alt={vehicleData?.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-black">{vehicleData?.title}</div>
                            <p className="text-gray-700 text-base">Car Number: {vehicleData?.carNumber}</p>
                            <p className="text-gray-700 text-base">Production Start: {vehicleData?.start_production}</p>
                            <p className="text-gray-700 text-base">Send Source: {vehicleData?.sendSource}</p>
                            <p className="text-gray-700 text-base">Send Destination: {vehicleData?.sendDestination}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <p className="text-gray-600 text-sm">Created At: {new Date(vehicleData?.createdAt).toLocaleDateString()}</p>
                            <p className="text-gray-600 text-sm">Updated At: {new Date(vehicleData?.updatedAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-gray-100 flex justify-center items-center">
                <div className="flex items-center mb-8 flex-col md:flex-col mt-[20px]">
                    <div className="w-32 h-32 rounded-full overflow-hidden mr-4">
                        <img src={authUser ? authUser.avatar : "/photo_aniket.jpg"} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-sm md:text-xl font-bold text-black">{authUser ? authUser.username : "User Name"}</h2>
                    </div>
                </div>
            </div>
            <Table aria-label="Travel history table" className="text-black cursor-pointer">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={travelData}>
                    {(item) => (
                        <TableRow key={item.id} onClick={() => handleDisplay(item.vehicleID)}>
                            {columns.map((column) => (
                                <TableCell key={column.key}>{item[column.key]}</TableCell>
                            ))}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
};

export default TravelHistory;



// nClick={() => handleDisplay(item.vehicleID)}