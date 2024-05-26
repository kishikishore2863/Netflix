import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!Movies) return;
  const mainMovie = Movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground MovieId={id} />
    </>
  );
};

export default MainContainer;
