import { useEffect } from "react"
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants"
import Header from "./Header"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse