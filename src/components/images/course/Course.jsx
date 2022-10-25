import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const data = useLoaderData();
  //   const { id, title } = data;
  console.log(data);
  return (
    <div>
      {data?.map((id) => (
        <Link to={`/categories/:${id.id}`}>
          <li>{id.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default Course;
