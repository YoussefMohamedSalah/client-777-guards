"use client"
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define your API key
const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

// Define the location (latitude and longitude) for the marker
const markerPosition = {
  lat: 30.047461598473653, // Example latitude (New York)
  lng: 31.361787906266915, // Example longitude (New York)
};

const openInGoogleMaps = () => {
  // Check if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Open Google Maps using the google.maps URL scheme
    window.open(`https://maps.google.com/maps?q=${markerPosition.lat},${markerPosition.lng}`);
  }
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
          onClick={openInGoogleMaps} // Add onClick event to open Google Maps
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMap;
