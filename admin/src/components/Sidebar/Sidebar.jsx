import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/dashboard" className="sidebar-option">
          <MdDashboardCustomize className="logo" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/add" className="sidebar-option">
          <IoBagAdd className="logo" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <FaList className="logo" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <TbTruckDelivery className="logo" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
