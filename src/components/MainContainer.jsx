import React from "react";
import { useSelector } from "react-redux";

const mainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(Movies + "kishi");
  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default mainContainer;
