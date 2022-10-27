import React from "react";
import { useLoaderData } from "react-router-dom";
import Faq from "./Faq";

const Blog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-2xl font-semibold sm:text-4xl text-center text-purple-600">
        Frequently Asked Questions
      </h2>
      {data.map((faq) => (
        <Faq key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default Blog;
