import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopratedMovies from "../hooks/useTopratedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="relative">
        <MainContainer />
      </div>
      <div className="relative bg-black">
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse