import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1666688643~exp=1666689243~hmac=7afd94824ff30d05187977656f8e26ee5081e098d09d75d8348abb4071f9be06")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Learn to Code</h1>
            <p className="mb-5">
              With the world's largest web developer site. To learn from our
              code and you will be largest developer in the world!
            </p>

            <Link to="/detailsLayout/singleCard/1">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
