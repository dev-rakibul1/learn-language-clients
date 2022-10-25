import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthProvider";

const Register = () => {
  const { user, googlePopupSign, userEmailPassLogin, facebookPopupLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const onRegisterHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(fName, lName, email, password, confirmPassword);
    handleUserEmailPassword(email, password);
  };

  // handle user email password sign
  const handleUserEmailPassword = (email, password) => {
    userEmailPassLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Form register successfully");
        setError("");
      })
      .then((err) => {
        console.log(err);
        toast.error("Register fail!");
        setError(err.message);
      });
  };

  // handle google popup sign in
  const provider = new GoogleAuthProvider();
  const handleGooglePopupSign = () => {
    googlePopupSign(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => {
        console.log(err);
      });
  };

  // handle facebook popup login
  const facebookProvider = new FacebookAuthProvider();
  const handleFacebookLogin = () => {
    facebookPopupLogin(facebookProvider);
  };

  return (
    <div className="md:w-[50%] px-2 mx-auto mt-16">
      <form
        className="border p-7 px-11 rounded border-gray-400"
        onSubmit={onRegisterHandler}
      >
        <h4 className="text-xl font-bold">Create an account</h4>
        {/* first name */}
        <div className="mt-7">
          <label htmlFor="fName">First name</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="fName"
            name="fName"
          />
        </div>
        {/* last name */}
        <div className="mt-7">
          <label htmlFor="lName">Last name</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="lName"
            name="lName"
          />
        </div>
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
        {/* Confirm password*/}
        <div className="mt-7">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="Confirm password"
            placeholder="********"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>

        {/* Register btn */}
        <button className="bg-lime-600 w-full py-2 rounded mt-7 text-white  ">
          Register
        </button>

        <p className="text-center mt-7">
          Already have an account?{" "}
          <Link to="/login" className="text-lime-600">
            Login
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

export default Register;
