import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Login = () => {
  const {
    userSign,
    facebookPopupLogin,
    signInWithGoogleMethod,
    signInWithFacebookMethod,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onLoginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleUserLogin(email, password);
  };

  const handleUserLogin = (email, password) => {
    userSign(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Success");
      })
      .catch((err) => {
        toast.error("Login fail!");
      });
  };

  // handle google popup sign in
  // const provider = new GoogleAuthProvider();
  const handleGooglePopupSign = () => {
    signInWithGoogleMethod()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => {
        console.log(err);
      });
  };

  // handle facebook popup login
  // const facebookProvider = new FacebookAuthProvider();
  const handleFacebookLogin = () => {
    signInWithFacebookMethod()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
      })
      .then((err) => {
        console.log(err);
      });
  };

  // // handle google popup sign in
  // const provider = new GoogleAuthProvider();
  // const handleGooglePopupSign = () => {
  //   googlePopupSign(provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       navigate(from, { replace: true });
  //     })
  //     .then((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="md:w-[50%] px-2 mx-auto mt-16">
      <form
        className="border p-7 px-11 rounded border-gray-400"
        onSubmit={onLoginHandler}
      >
        <h4 className="text-xl font-bold">Login</h4>

        {/* email */}
        <div className="mt-7">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="email"
            name="email"
          />
        </div>
        {/* Password */}
        <div className="mt-7">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="password"
            name="password"
          />
        </div>
        {/* error message */}
        <p className="text-red-600 mt-2">{error}</p>
        {/* login btn */}
        <button className="bg-lime-600 w-full py-2 rounded mt-7 text-white  ">
          Login
        </button>

        <p className="text-center mt-7">
          Don't have an account?{" "}
          <Link to="/register" className="text-lime-600">
            Create a new account
          </Link>
        </p>
      </form>

      <h3 className="register-or text-gray-900 text-xl font-semibold">Or</h3>

      <div className="text-center w-[75%] mx-auto">
        <button
          className=" text-center border w-full p-2 mt-4 border-gray-400 rounded-full flex items-center "
          onClick={handleGooglePopupSign}
        >
          <FaGoogle className="mr-16 w-10 h-10 border border-lime-600 p-2 rounded-full text-white bg-lime-600" />{" "}
          Continue with google
        </button>
        <button
          className=" text-center border w-full p-2 mt-4 border-gray-400 rounded-full flex items-center "
          onClick={handleFacebookLogin}
        >
          <FaFacebookF className="mr-16 w-10 h-10 border border-lime-600 p-2 rounded-full text-white bg-sky-600" />{" "}
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
