import React, { useEffect, useState, useRef } from "react";
import "./Map.scss";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { useFetch } from "../../custom_hooks/useFetch";

const drawMap = function (
  accessToken,
  latitude,
  longitude,
  zoom,
  mapContainerRef
) {
  mapboxgl.accessToken = accessToken;
  const map = new mapboxgl.Map({
    container: mapContainerRef.current,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: zoom,
  });
  const Draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
  });
  map.addControl(new mapboxgl.NavigationControl(), "bottom-left");
  map.addControl(Draw, "bottom-right");
  map.on("draw.create", (e) => console.log(e));
};

const getPreciseLocation = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  });
};

const Map = () => {
  const [accessToken, setAccessToken] = useState("");
  const [zoom, setZoom] = useState(16);
  const [{ latitude, longitude }, setCoords] = useState({
    latitude: null,
    longitude: null,
  });
  const mapContainerRef = useRef();

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:5500/access_token/mapbox"
        );
        const { access_token } = await response.json();
        setAccessToken(access_token);
      } catch (err) {
        console.log(err);
      }
    })();
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
