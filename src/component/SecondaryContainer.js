import React, { useEffect, useState } from "react";
import data from "../utils/mock.json";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(data);
  }, []);
  return (
    <div key={movies} className="bg-black">
      <div className="mt-0 md:-mt-[290px] relative z-10">
        <MovieList title={"Now Playing"}>{(movies) => movies.title}</MovieList>
        <MovieList title={"Popular"}>{(movies) => movies.title}</MovieList>
        <MovieList title={"Trending"}>{(movies) => movies.title}</MovieList>
        <MovieList title={"Horror"}>{(movies) => movies.title}</MovieList>
        <MovieList title={"Upcoming Movies"}>
          {(movies) => movies.title}
        </MovieList>
      </div>
      {/* 
    
    Movie List - Popular
      - Movie card * n
    Movie List - Now Playing 
    Movie List - Trending
    Movie List - Horror

    
    */}
    </div>
  );
};

export default SecondaryContainer;
