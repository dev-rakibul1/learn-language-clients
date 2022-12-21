import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { FaPrint, FaRegEye, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const MoreDetails = () => {
  const pdfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "technology-title",
    onafterprint: () => toast.success("Print success"),
  });
  const data = useLoaderData();
  const { images, id, description, price, title, rating } = data;
  return (
    <div className="w-[75%] mx-auto px-2" ref={pdfRef}>
      {/* print */}
      <div
        className="border inline-block me-auto ml-auto mb-4 text-end cursor-pointer mt-7"
        onClick={handlePrint}
        title="Print technology"
      >
        <small className="p-2  text-lg">Print</small>
        <button className="text-end p-2">
          <FaPrint className="text-end">Print</FaPrint>
        </button>
      </div>

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

      <div className="text-center">
        <Link to="/detailsLayout/singleCard/1">
          {" "}
          <button
            type="button"
            className=" btn py-2 px-7 text-white bg-purple-600"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoreDetails;
