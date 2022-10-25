import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Menu from "../pages/menu/Menu";

const Root = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
