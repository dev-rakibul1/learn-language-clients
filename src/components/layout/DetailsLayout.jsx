import React from "react";
import { Outlet } from "react-router-dom";
import CourseCover from "../pages/courseCover/CourseCover";
import Menu from "../pages/menu/Menu";
import Category from "./../pages/category/Category";
import Footer from "./../pages/footer/Footer";

const DetailsLayout = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <CourseCover> Select your best choice</CourseCover>
      <div className="md:flex w-[90%] mx-auto gap-4 mt-11">
        <div className="grow bg-lime-100 md:w-[20%] px-2">
          <Category />
        </div>
        <div className="grow-1 md:w-[80%] px-2 border">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsLayout;
