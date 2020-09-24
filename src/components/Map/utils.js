import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../../custom_hooks/useFetch";

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [79.4598, 11.1168],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [79.4598, 11.1161],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
  ],
};

const addField = (e) => {
  const coords = e.features[0].geometry.coordinates;
  fetch("http://localhost:5500/fields", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      location: {
        type: "Polygon",
        coordinates: coords,
      },
      farm: "Dhanasekar Farm",
      username: "Dhanasekar",
      color: "yellow",
      crop: "paddy",
    }),
  });
};

const addFarm = (e) => {
  const coords = e.features[0].geometry.coordinates;
  console.log(uuidv4().slice(0, 10));
  fetch("http://localhost:5500/farms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      farmid: uuidv4().slice(0, 10),
      location: {
        type: "Point",
        coordinates: coords,
      },
      username: "Harish Farm",
    }),
  });
};

export const drawMap = function (
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
  const Draw = new MapboxDraw();

  // add markers to map
  geojson.features.forEach(function (marker) {
    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  });

  map.addControl(new mapboxgl.NavigationControl(), "bottom-left");
  map.addControl(Draw, "bottom-right");
  map.on("draw.create", (e) => {
    const type = e.features[0].geometry.type;
    console.log(type);
    if (type === "Point") addFarm(e);
    if (type === "Polygon") addField(e);
  });
};

export const getPreciseLocation = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  });
};

export const fetchAccessToken = async (setAccessToken) => {
  try {
    const response = await fetch("http://localhost:5500/access_token/mapbox");
    const { access_token } = await response.json();
    setAccessToken(access_token);
  } catch (err) {
    console.log(err);
  }
};
