import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browes = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
        MoviesContainer
          - Video Background
          - Video title
        SecondaryContainer
          - MovieList *n
            - card * n      
      */}
    </div>
  );
};

export default Browes;
