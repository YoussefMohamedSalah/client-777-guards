"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define your API key
const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

// Define the location (latitude and longitude) for the marker
const markerPosition = {
  lat: 30.047461598473653, // Example latitude (New York)
  lng: 31.361787906266915, // Example longitude (New York)
};

const LocationMap: React.FC = () => {
  return (
    <div className="md:container">
      <LoadScript googleMapsApiKey={googleApiKey}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "250px",
          }}
          center={markerPosition}
          zoom={13} // Adjust the zoom level as needed
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMap;
