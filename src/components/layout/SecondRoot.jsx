import React from "react";
import { Outlet } from "react-router-dom";
import Course from "./../images/course/Course";

const SecondRoot = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-green-600">
          <Course />
          {/* <Category /> */}
        </div>
        <div className="bg-orange-500">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SecondRoot;
