import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCover from "../courseCover/CourseCover";
import Faq from "./Faq";

const Blog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <CourseCover>Frequently Asked Questions</CourseCover>
      {data.map((faq) => (
        <Faq key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default Blog;
