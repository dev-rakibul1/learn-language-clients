import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://learn-language-server.vercel.app/language")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="max-w-full  px-2 p-4">
        {category.map((items) => (
          <Link to={`/singleCard/${items.id}`}>
            <button
              className="btn block w-full mt-6 bg-purple-600"
              key={items.title}
            >
              {items.title}
            </button>
            {/* <li key={items.id} className="list-none">
              {items.title}
            </li> */}
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Category;
