import React from "react";
import Card from "./../card/Card";

const Sidebar = ({ language }) => {
  return (
    <div>
      {/* card */}
      <div className="mt-24 ">
        <h1 className="mb-7 text-center">Select you best choice</h1>
        <div className="w-[90%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {language.map((ln) => (
            <Card key={ln.id} language={ln} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
