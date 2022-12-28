import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full md:w-1/2 md:mx-auto px-5 md:px-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
