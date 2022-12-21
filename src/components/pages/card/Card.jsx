import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ language }) => {
  const { images, id, description, price, title, rating } = language;
  return (
    <div>
      <div className="card w-[100%] bg-base-100 p-4 border h-full">
        <figure>
          <img src={images} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center justify-between">
            <span>Price: {price}</span>
            <span className="flex  items-center justify-between">
              Rating: {rating?.rate} <FaStar className="text-green-600 ml-1" />
            </span>

            {/* <Link to={`/singlePart/${id}`}>
              <button className="px-6 py-2 w-full text-white rounded-md bg-lime-600">
                See details
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
