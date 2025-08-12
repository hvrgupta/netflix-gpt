import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopratedMovies from "../hooks/useTopratedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import GPTSearch from "./GPTSearch"
import { useSelector } from "react-redux"

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      {showGptSearch ? 
      <GPTSearch /> : <>
        <div className="relative">
          <MainContainer />
        </div>
        <div className="relative bg-black">
          <SecondaryContainer />
        </div>
      </> }
    </div>
  )
}

export default Browse