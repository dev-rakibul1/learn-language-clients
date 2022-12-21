import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ReadBlog = () => {
  const data = useLoaderData();
  console.log(data);
  const { images, title, description, id } = data;
  return (
    <div>
      <div className="card bg-base-100 h-full w-[75%] mx-auto mt-7">
        <figure>
          <img src={images} alt="blog" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link
              to="/blog2"
              className="bg-purple-600 rounded-md text-white px-4 mt-4 py-2"
            >
              <button>Go to blog</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
