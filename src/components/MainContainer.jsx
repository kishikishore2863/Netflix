import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("kishi");
  if (!Movies) return;
  const mainMovie = Movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground MovieId={id} />
    </div>
  );
};

export default MainContainer;
