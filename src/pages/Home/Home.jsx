import "./Home.css";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
}

export default Home;
