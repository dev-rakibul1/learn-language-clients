import React from "react";
import { Link } from "react-router-dom";
import bannerImages from "../../images/bannar.png";

const Bannar = () => {
  return (
    <div className="bg-lime-600 py-6 px-4">
      <div className="w-[90%] mx-auto md:flex items-center justify-between px-4">
        <div>
          <h1 className="text-white font-bold text-7xl">Best selling </h1>
          <p className="text-white py-2">
            This is our some best selling technology. and{" "}
          </p>
          <Link to="/course">
            <button className="bg-white px-6 rounded-md py-2">
              See details
            </button>
          </Link>
        </div>
        <div>
          <img src={bannerImages} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bannar;
