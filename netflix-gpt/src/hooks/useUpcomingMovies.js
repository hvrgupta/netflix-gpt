import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    const getUpcomingMovies = async() => {
      const data = await fetch(UPCOMING_MOVIES+"?page=1",API_OPTIONS);
      const response = await data.json();
      dispatch(addUpcomingMovies(response.results));
    }
    
    useEffect(() => {
        // Only fetch if data is not already available
        if (!upcomingMovies) {
            getUpcomingMovies();
        }
    },[upcomingMovies])
}

export default useUpcomingMovies;

