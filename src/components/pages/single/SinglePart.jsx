import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { FaPrint, FaRegEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const SinglePart = ({ data }) => {
  const pdfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "technology-title",
    onafterprint: () => toast.success("Print success"),
  });
  const { images, id, description, price, title, rating } = data;
  return (
    <div className="w-[75%] mx-auto px-2" ref={pdfRef}>
      {/* print */}
      <div
        className="border-0 inline-block me-auto ml-auto mb-4 text-end cursor-pointer mt-7"
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

          {description.length > 200 ? (
            <p>
              {description.slice(0, 250) + "..."}
              {/* <Link>Read more</Link> */}
              <Link to={`/readMore/${id}`}>
                <button className=" rounded-md font-bold text-purple-600 py-2 mb-16 my-1 px-2">
                  Read more
                </button>
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePart;
