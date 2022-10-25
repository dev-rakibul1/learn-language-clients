import React from "react";
import { Outlet } from "react-router-dom";
import Course from "./../images/course/Course";

const SecondRoot = () => {
  return (
    <div>
      <Course />
      <Outlet />
    </div>
  );
};

export default SecondRoot;
