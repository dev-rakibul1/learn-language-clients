import React from "react";
import bannerImages from "../../images/bannar.png";
import Btn from "../button/Btn";

const Bannar = () => {
  return (
    <div className="bg-purple-600 py-6 px-4 mt-11">
      <div className="w-[90%] mx-auto md:flex items-center justify-between px-4">
        <div>
          <h1 className="text-white font-bold text-7xl">Best selling </h1>
          <p className="text-white py-2">
            This is our some best selling technology. and{" "}
          </p>
          <Btn />
        </div>
        <div>
          <img src={bannerImages} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
