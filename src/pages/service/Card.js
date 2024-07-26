
import React, { useEffect, useState } from 'react';
import VehicleCard from "./vehicleCard.js";
import { CircularProgress } from '@mui/material';


export default function Card(props) {
  const [fetchDataContent, setFetchDataContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/v1/admin/getRegistedVehicle', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

        const data = await res.json();

        setFetchDataContent(data.data);
        console.log(data.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        props.handleToggleCard()
        setLoading(false)
      }
    };

    fetchData();
  }, []);

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
      {props.place == "outside" ?


        <div className="flex justify-center flex-wrap ">
          {fetchDataContent.map((vehicle, index) => (
            <VehicleCard
              image={vehicle.image}
              title={vehicle.title}
              startProduction={vehicle.start_production}
              sendSource={vehicle.sendSource}
              sendDestination={vehicle.sendDestination}
              carNumber={vehicle.carNumber}
            />
          ))}
        </div>

        :
        <div className="flex justify-center flex-wrap">
          {fetchDataContent.map((vehicle, index) => (
            <VehicleCard
              image={vehicle.image}
              title={vehicle.title}
              startProduction={vehicle.start_production}
              sendSource={vehicle.sendSource}
              sendDestination={vehicle.sendDestination}
              carNumber={vehicle.carNumber}
            />
          ))}
        </div>

      }

    </>
  );
}
