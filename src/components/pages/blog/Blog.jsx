import React from "react";
import { useLoaderData } from "react-router-dom";
import Faq from "./Faq";

const Blog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-2xl font-semibold sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 mb-8 dark:text-gray-400">
        Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
        orci at lacus amet bibendum.
      </p>
      {data.map((faq) => (
        <Faq key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default Blog;
