import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkvalidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkvalidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    if (isSignInFrom) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-3/12 p-12 mx-auto mt-36 right-0 left-0 text-white absolute bg-black bg-opacity-80 "
        >
          <h1 className="text-3xl mb-5 font-bold">
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full rounded-sm bg-slate-700"
          />
          {!isSignInFrom && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full rounded-sm bg-slate-700"
            />
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full rounded-sm bg-slate-700"
          />
          <p className="text-red-600 text-sm">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="bg-red-700 p-2 my-5 w-full rounded-lg"
          >
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignInFrom}
            className="cursor-pointer hover:underline"
          >
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
