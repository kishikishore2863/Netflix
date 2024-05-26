import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[30%] px-24 w-screen aspect-auto ">
      <div classname=" pt-36 px-12 ">
        <h1 className="text-4xl">{title}</h1>
        <p className="w-1/3">{overview}</p>
        <div>
          <button className=" text-black bg-white p-4 w-36 text-lg rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="bg-gray-600 p-4 w-36 text-lg ml-4 rounded-lg opacity-70">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
