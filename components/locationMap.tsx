"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define your API key
const googleApiKey = 'GOOGLE_MAPS_API_KEY';

// Define the location (latitude and longitude) for the marker
const markerPosition = {
    lat: 40.7128, // Example latitude (New York)
    lng: -74.0060, // Example longitude (New York)
};

const LocationMap: React.FC = () => {
    return (
        <LoadScript googleMapsApiKey={googleApiKey}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '250px',
                }}
                center={markerPosition}
                zoom={13} // Adjust the zoom level as needed
            >
                <Marker position={markerPosition} />
            </GoogleMap>
        </LoadScript>
    );
};

export default LocationMap;
