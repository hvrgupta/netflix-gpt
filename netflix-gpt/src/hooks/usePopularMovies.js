import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async() => {
      const data = await fetch(POPULAR_MOVIES+"?page=1",API_OPTIONS);
      const response = await data.json();
      console.log("popular " + response)
      dispatch(addPopularMovies(response.results));
    }
    
    useEffect(() => {
        getPopularMovies();
    },[])
}

export default usePopularMovies;

