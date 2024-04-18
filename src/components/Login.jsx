import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const toggleSignInFrom = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="logo"
          />
        </div>
        <form className="w-3/12 p-12 mx-auto mt-36 right-0 left-0 text-white absolute bg-black bg-opacity-80 ">
          <h1 className="text-3xl mb-5 font-bold">
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full rounded-sm"
          />
          {!isSignInFrom && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Password"
            className="p-2 my-2 w-full rounded-sm"
          />
          <button className="bg-red-700 p-2 my-5 w-full rounded-lg">
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInFrom} className="cursor-pointer">
            {isSignInFrom
              ? "New to Netflix? Sign Up now"
              : "Already registered? Sign In now "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
