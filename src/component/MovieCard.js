import React, { useEffect, useState } from "react";
import data from "../utils/mock.json";

const MovieCard = ({ bigImage }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(data);
  }, []);
  return (
    <div className="flex w-36 md:w-40 pr-4 rounded-lg">
      {images.map((image, index) => (
        <img className="pr-4 " key={index} alt="poster" src={image.big_image} />
      ))}
    </div>
  );
};

export default MovieCard;
