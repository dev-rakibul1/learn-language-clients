import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlog from "./SingleBlog";

const Blog2 = () => {
  const blogData = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-6">
      {blogData.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog2;
