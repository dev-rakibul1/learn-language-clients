import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const { images, title, description, id } = blog;
  return (
    <div>
      <div className="card bg-base-100 h-full">
        <figure>
          <img src={images} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description.slice(0, 180)} [...]</p>
          <div className="card-actions justify-end">
            <Link
              to={`/readBlog/${id}`}
              className="w-full bg-purple-600 py-2 px-4 rounded-md text-center text-white mt-7 hover:bg-purple-700"
            >
              <button>Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
