import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetMovieVideos = () => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/823464/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));

    console.log(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useGetMovieVideos;
