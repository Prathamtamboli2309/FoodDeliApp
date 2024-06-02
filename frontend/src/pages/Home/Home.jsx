import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import { StoreContext } from "../../context/StoreContext";
const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
