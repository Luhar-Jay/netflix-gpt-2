import React from "react";

const VideoBackground = ({ imdb_link }) => {
  // fetch trailer Video
  // const dispatch = useDispatch();
  // const getMoviesVideos = async () => {
  //   const data = await fetch(
  //     "https://imdb-top-100-movies.p.rapidapi.com/top32",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();

  //   const filterData = json.trailer;

  //   // const trailer = filterData.length ? filterData[0] : json.data[0];
  //   dispatch(addTrailerVideo);
  // };

  // useEffect(() => {
  //   getMoviesVideos();
  // });

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/shW9i6k8cB0?si=TpH37qk9RK_09QJL&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
