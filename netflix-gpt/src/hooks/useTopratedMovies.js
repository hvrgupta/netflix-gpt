import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
    const dispatch = useDispatch();

    const getTopratedMovies = async() => {
      const data = await fetch(TOP_RATED_MOVIES+"?page=1",API_OPTIONS);
      const response = await data.json();
      dispatch(addTopratedMovies(response.results));
    }
    
    useEffect(() => {
        getTopratedMovies();
    },[])
}

export default useTopratedMovies;

