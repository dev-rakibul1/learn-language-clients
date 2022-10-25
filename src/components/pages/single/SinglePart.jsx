import React from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

// 019 09 79 21 75

const SinglePart = () => {
  const singleData = useLoaderData();
  const { images, id, description, price, title, rating } = singleData;
  console.log(singleData);
  return (
    <div className="w-[50%] mx-auto px-2">
      <div className="card w-full glass">
        <figure>
          <img src={images} alt="technology images!" />
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
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePart;
