import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async() => {
      const data = await fetch(POPULAR_MOVIES+"?page=1",API_OPTIONS);
      const response = await data.json();
      dispatch(addPopularMovies(response.results));
    }
    
    useEffect(() => {
        // Only fetch if data is not already available
        if (!popularMovies) {
            getPopularMovies();
        }
    },[popularMovies])
}

export default usePopularMovies;

