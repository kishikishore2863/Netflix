import { useSelector } from "react-redux";
import useGetMovieVideos from "../utils/useGetMovieVideos";

const VideoBackground = ({ MovieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetMovieVideos(MovieId);

  return (
    <div className="w-screen aspect-auto ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"
        }
        frameborder="0"
        allowfullscreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
