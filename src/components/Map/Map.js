import React, { useEffect, useState, useRef } from "react";
import "./Map.scss";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

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

const getLocation = function (setLatitude, setLongitude) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      console.log(latitude, longitude);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const Map = () => {
  const [accessToken, setAccessToken] = useState("");
  const [latitude, setLatitude] = useState(11.1168);
  const [longitude, setLongitude] = useState(79.4598);
  const [zoom, setZoom] = useState(16);
  const mapContainerRef = useRef();

  useEffect(() => {
    (async function getData(drawMap) {
      const response = await fetch("http://localhost:5500/access_token/mapbox");
      const { access_token } = await response.json();
      setAccessToken(access_token);
      getLocation(setLatitude, setLongitude);
      drawMap(access_token, latitude, longitude, zoom, mapContainerRef);
    })(drawMap);
  }, []);

  return <div ref={mapContainerRef} className="mapContainer" />;
};

export default Map;
