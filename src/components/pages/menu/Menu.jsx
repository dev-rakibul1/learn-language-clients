import React, { useContext, useState } from "react";
import { FaLaptopCode, FaPowerOff, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Menu = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);

  // user logout
  const handleUserLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav className="w-full bg-purple-500 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:inline-block">
              <Link to="/" className="text-xl">
                <h2
                  className="text-2xl font-bold text-white"
                  className="flex justify-center items-center"
                >
                  <FaLaptopCode />
                  <div className="mx-2 text-gray-300">
                    <span>c</span>
                    <span>o</span>
                    <span>d</span>
                    <span>e</span>
                  </div>
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/detailsLayout/singleCard/1">Course</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/blog">FAQ</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/blog2">Blog</Link>
                </li>
              </ul>

              {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link
                  to="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div> */}
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                {user && user?.uid ? (
                  <div className="flex items-center">
                    <Link className="p-2" title={user.displayName}>
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          alt="profile"
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <FaUserCircle />
                      )}
                    </Link>
                    <Link
                      className="p-2 text-2xl"
                      title="Log out"
                      onClick={handleUserLogOut}
                    >
                      <FaPowerOff />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 lg:inline-block">
            {user && user?.uid ? (
              <div className="flex items-center">
                <Link className="p-2" title={user.displayName}>
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="w-7 h-7" />
                  )}
                </Link>
                <Link
                  className="p-2 text-2xl"
                  title="Log out"
                  onClick={handleUserLogOut}
                >
                  <FaPowerOff />
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to="/register"
                  className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
