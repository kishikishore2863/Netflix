import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div classname="pt-36 px-12">
      <h1 className="text-4xl">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-600 text-black p-4 w-36 text-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-black p-4 w-36 text-lg ml-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
