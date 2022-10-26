import React from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const MoreDetails = () => {
  const data = useLoaderData();
  const { images, id, description, price, title, rating } = data;
  return (
    <div className="w-[75%] mx-auto px-2">
      <div className="card w-full glass">
        <figure>
          <img src={images} alt="technology images!" className="w-[50%]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <div className="md:flex items-center justify-between">
            <span className="font-bold ">Regular price ${price}</span>
            <div className="flex">
              <span className="flex items-center p-2">
                {" "}
                <FaStar className=" text-amber-600" /> {rating?.rate}
              </span>
              <span className="flex items-center p-2">
                {" "}
                <FaRegEye className=" text-green-600" /> {rating?.count}
              </span>
            </div>
          </div>

          {description}
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
