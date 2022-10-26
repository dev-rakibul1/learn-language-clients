import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePart from "../single/SinglePart";

const Home = () => {
  const data = useLoaderData();
  // const { images, id, description, price, title, rating } = data;
  console.log(data);
  return (
    <div>
      {data.map((data) => (
        <SinglePart key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Home;
