import React from "react";
import "./Navbar.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logomain">
        <IoFastFoodOutline className="logo" />
        <p className="logo">PetPuja</p>
      </div>
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  );
};

export default Navbar;
