import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../pages/menu/Menu";
import Footer from "./../pages/footer/Footer";

const Root = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      {/* <div>
        <Hero />
      </div>
      <h1 className="text-center font-bold text-4xl pb-5 mt-24">
        Select your best choice
      </h1>
      <div className="md:flex w-[90%] mx-auto gap-4 mt-11">
        <div className="grow bg-lime-100 md:w-[20%] px-2">
          <Category />
        </div>
        <div className="grow-1 md:w-[80%] px-2">
          <Outlet />
        </div>
      </div>
      <Bannar /> */}
      <Footer />
    </div>
  );
};

export default Root;
