import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCover from "../courseCover/CourseCover";
import SingleBlog from "./SingleBlog";

const Blog2 = () => {
  const blogData = useLoaderData();

  return (
    <>
      <CourseCover>Blog</CourseCover>
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-[90%] mx-auto">
        {blogData.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blog2;
