import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Bannar from "../bannar/Bannar";
import Card from "../card/Card";
import Hero from "../hero/Hero";

const Home = () => {
  const data = useLoaderData();
  const language = useLoaderData();
  // const { images, id, description, price, title, rating } = data;
  console.log(data);
  return (
    <div>
      <Hero />
      {/* card */}
      <div className="mt-24 ">
        <div className="w-[90%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {language.map((ln) => (
            <Card key={ln.id} language={ln} />
          ))}
        </div>
        <div className="w-[90%] mx-auto px-4 py-7 text-center">
          <Link to="/detailsLayout/singleCard/1">
            <button className="px-6 py-2  text-white rounded-md bg-purple-600">
              See details
            </button>
          </Link>
        </div>
      </div>

      {/* {data.map((data) => (
        <SinglePart key={data.id} data={data} />
      ))} */}

      <Bannar />
    </div>
  );
};

export default Home;
