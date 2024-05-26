import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addTrailerVideo } from "./moviesSlice";
import { useEffect } from "react";

const useGetMovieVideos = (MovieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        MovieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useGetMovieVideos;
