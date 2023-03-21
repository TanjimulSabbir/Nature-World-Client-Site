import React from 'react';
import GoogleMapReact from 'google-map-react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = () => {
    const Map = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
    ));

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }

    return (
        <div>
            <h1>Map</h1>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
        </div>
    );
};

export default Map;