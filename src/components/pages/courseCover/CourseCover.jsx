import React from "react";
const courseCoverImages = "https://i.ibb.co/dkRHKnZ/course.jpg";

const CourseCover = ({ children }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${courseCoverImages})`,
        }}
        className="course-cover py-11 bg-cover bg-center bg-no-repeat text-center text-5xl text-white min-h-[300px] flex items-center justify-center"
      >
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default CourseCover;
