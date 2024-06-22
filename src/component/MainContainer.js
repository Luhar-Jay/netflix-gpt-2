import React from "react";
// import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  // const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // if (!movies) return null;

  // const mainMovies = movies[0];
  // if (!mainMovies) return null;

  // const { title, description } = mainMovies;

  return (
    <div className="pt-[37%] bg-black md:pt-0">
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
