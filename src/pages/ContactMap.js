import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import React from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "./dashboard/mapdashboard.module.css";


import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// import Routing from "./Routing";

const position = [23.6693, 86.1511];
const position1 = [23.7470, 86.1187];
const position2 = [23.6362, 86.1828];

const chas = [23.6362, 86.1828];
const dhanbad = [23.7957, 86.4304];
const chandrapura = [23.74877, 86.11955];
const jharia = [23.7426, 86.4111];
const sindri = [23.6546, 86.4737];

let DefaultIcon = L.icon({
    iconUrl: "/bus-gif.gif",
    iconSize: [30, 30],
});


const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [15, 25],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});
const markerIcon = new L.Icon({
    iconUrl: "https://www.pngall.com/wp-content/uploads/13/Taxi-Yellow-PNG-Images.png",
    iconSize: [35, 25],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});

const busIcon = L.icon({
    iconUrl: "/bus.svg",
    iconSize: [35, 25],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});

const markers = [
    { position: position1, location: "Location 1" },
    { position: [23.3441, 85.3096], location: "Location 2" },
    { position: position2, location: "Location 3" },
    { position: sindri, location: "Location 3" },
    { position: chandrapura, location: "Location 4" },
    { position: jharia, location: "Location 5" },


];


export default function ConatctMapdashboard(props) {
    const [source, setSource] = React.useState([props.scordinate[0], props.scordinate[1]])


    return (
        <>
            <div  >

                <MapContainer class="contact-flex" center={[sindri[0], sindri[1]]} zoom={9} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[sindri[0], sindri[1]]} icon={defaultIcon}>
                        <Popup>Your Location</Popup>
                    </Marker>
                    <Circle center={[sindri[0], sindri[1]]} radius={25000} />
                    {/* {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            icon={DefaultIcon}
                        >
                            <Popup>{marker.location}</Popup>
                        </Marker>
                    ))} */}


                </MapContainer>


            </div>
        </>
    );
}
