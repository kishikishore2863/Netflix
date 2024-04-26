import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowplaying = () => {
  const dispatch = useDispatch();

  const getNowplayingMoving = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?lpage=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowplayingMoving();
  }, []);
};
export default useNowplaying;
