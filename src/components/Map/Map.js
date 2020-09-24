import React, { useEffect, useState, useRef } from "react";
import "./Map.scss";
// import {}

import { getPreciseLocation, drawMap, fetchAccessToken } from "./utils";

const Map = () => {
  const [accessToken, setAccessToken] = useState("");
  const [zoom, setZoom] = useState(16);
  const [{ latitude, longitude }, setCoords] = useState({
    latitude: null,
    longitude: null,
  });

  const [farms, setFarms] = useState({});
  const [fields, setFields] = useState({});

  const mapContainerRef = useRef();

  useEffect(() => {
    fetchAccessToken(setAccessToken);
  }, [setAccessToken]);

  useEffect(() => {
    (async () => {
      if (navigator.geolocation) {
        const { latitude, longitude } = await getPreciseLocation();
        setCoords({
          latitude,
          longitude,
        });
      } else {
        alert("Geolocation is not supported by this browser.");
        setCoords({ latitude: 11.1168, longitude: 79.4598 });
      }
    })();
  }, [setCoords]);

  useEffect(() => {
    if (accessToken && latitude && longitude) {
      drawMap(accessToken, latitude, longitude, zoom, mapContainerRef);
    }
  }, [accessToken, latitude, longitude, zoom]);

  return <div ref={mapContainerRef} className="mapContainer" />;
};

export default Map;
