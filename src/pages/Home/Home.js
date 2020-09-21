import React from "react";
import "./Home.scss";
import Map from "../../components/Map/Map";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SidenavProvider } from "../../contexts/sidenavContext";

const Home = () => {
  return (
    <div className="Home" data-testid="Home">
      <SidenavProvider>
        <Map />
        <SearchBar />
      </SidenavProvider>
    </div>
  );
};

export default Home;
