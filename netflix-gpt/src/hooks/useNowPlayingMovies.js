import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovie = async() => {
      const data = await fetch(NOW_PLAYING_MOVIES+"?page=1",API_OPTIONS);
      const response = await data.json();
      dispatch(addNowPlayingMovies(response.results));
    }
    
    useEffect(() => {
      getNowPlayingMovie();
    },[])
}

export default useNowPlayingMovies;

