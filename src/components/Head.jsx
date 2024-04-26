import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";

const Head = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="flex justify-between ">
      <div>
        <Header />
      </div>
      <div className="flex px-24 z-10">
        <img
          className="p-2 mt-3 "
          src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          alt=""
        />

        <button
          className="bg-red-600 text-white rounded-lg w-36 h-11 mt-3 mr-1"
          onClick={handleSignOut}
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
};

export default Head;
