// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addNowMoviePlaying } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import mock from "../utils/mock.json";

const useNowPlayingMovies = () => {
  // Fetch data from RapidAPI and update store
  // const dispatch = useDispatch();
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    setIsData(mock.json);
  }, []);
  return isData;
  // const getNowPlayingMovie =  () => {
  //   // const data = await fetch(mock.json);
  //   // const json = await data.json();
  //   // dispatch(addNowMoviePlaying(data));

  // };

  // useEffect(() => {
  //   getNowPlayingMovie();
  // });
};

export default useNowPlayingMovies;
