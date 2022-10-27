import React from "react";
import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <div>
      <Link to="/blog">
        <button className="bg-white px-6 rounded-md py-2">
          Get premium access
        </button>
      </Link>
    </div>
  );
};

export default Btn;
