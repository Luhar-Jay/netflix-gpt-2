import React from "react";
import MovieCard from "./MovieCard";
import data from "../utils/mock.json";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="px-6 ">
      <h1 className="py-4 text-lg md:text-3xl font-medium text-white   ">
        {title}
      </h1>
      <div key={movies} className="overflow-x-scroll flex">
        <div className="flex">
          <MovieCard bigImage={data.big_image} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
