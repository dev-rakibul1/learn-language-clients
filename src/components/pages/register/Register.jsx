import { FacebookAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Register = () => {
  const {
    user,
    signInWithGoogleMethod,
    userEmailPassLogin,
    userLogOut,
    signInWithFacebookMethod,
    updateUserProfile,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const onRegisterHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (typeof name !== "string" || name === "") {
      toast.error("please provide a valid name");
    }
    const photUrl = form.photUrl.value;

    // email check
    const email = form.email.value;
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email) || email === "") {
      toast.error("Please provide a valid email");
      setError("Your email is not valid");
    }
    const password = form.password.value;
    console.log(name, photUrl, email, password);
    handleUserEmailPassword(email, password, name, photUrl);
    // handleUseUpdateProfile(name, photUrl);
  };

  // handle user email password sign
  const handleUserEmailPassword = (email, password, name, photUrl) => {
    userEmailPassLogin(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Form register successfully");
        navigate(from, { replace: true });

        // update user profile
        const profile = {
          displayName: name,
          photoURL: photUrl,
        };
        console.log(profile);
        updateUserProfile(profile)
          .then(() => {})
          .then((err) => console.log(err));
        // End profile
      })
      .then((err) => {
        toast.error(err);
        setError("Login fail");
      });
  };
  console.log(error);

  // handle google popup sign in
  // const provider = new GoogleAuthProvider();
  const handleGooglePopupSign = () => {
    signInWithGoogleMethod()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .then((err) => {
        console.log(err);
      });
  };

  // handle facebook popup login
  const facebookProvider = new FacebookAuthProvider();
  const handleFacebookLogin = () => {
    signInWithFacebookMethod(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // update user profile
  // const handleUseUpdateProfile = (name, photoURL) => {
  //   const profile = {
  //     displayName: name,
  //     photoURL: photoURL,
  //   };
  //   updateUserProfile(profile)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .then((err) => console.log(err));
  // };

  return (
    <div className="md:w-[50%] px-2 mx-auto mt-16">
      <form
        className="border p-7 px-11 rounded border-gray-400"
        onSubmit={onRegisterHandler}
      >
        <h4 className="text-xl font-bold">Create an account</h4>
        {/* name */}
        <div className="mt-7">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="name"
            name="name"
          />
        </div>
        {/* Photo url */}
        <div className="mt-7">
          <label htmlFor="photUrl">Photo url</label>
          <input
            type="text"
            placeholder="Photo url"
            className="w-full h-11 border p-3 rounded border-gray-400"
            id="photUrl"
            name="photUrl"
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
        <p className="text-red-600">{error}</p>

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

      {/* Divider */}
      <div className="flex flex-col w-full border-opacity-50 py-7">
        <div className="divider">OR</div>
      </div>

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
