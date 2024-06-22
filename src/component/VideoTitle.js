import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import data from "../utils/mock.json";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(data[17]);
  }, []);
  return (
    <div className="w-screen aspect-video pt-20 px-8  md:pt-52 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <div key={movies} className="">
        <h1 className="text-lg  grid grid-cols-2  md:text-2xl font-bold ">
          {movies.title}
        </h1>
        <p className="hidden md:inline-block w-1/4 m-4">{movies.description}</p>
      </div>
      <div className="flex flex-row my-4 text-white">
        <button className="bg-white text-lg font-bold flex text-black hover:bg-slate-300 rounded-xl items-center p-2 px-4 md:p-4 md:px-10">
          <FaPlay />
          <span className="pl-1">Play</span>
        </button>
        <button className="hidden  bg-gray-500 text-lg font-bold md:flex bg-opacity-50 rounded-xl items-center  p-4 px-10 mx-4">
          <IoIosInformationCircleOutline />
          <span className="pl-1">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
