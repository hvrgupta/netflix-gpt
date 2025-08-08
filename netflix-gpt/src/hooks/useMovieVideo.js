import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieVideo = (id) => {

    const [trailer, setTrailer] = useState(null);
    const dispatch = useDispatch();

    const getMovieVideoInfo = async(id) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTIONS);
            const data = await response.json();
            const filteredData = data.results.filter((video) => video.type === 'Trailer');
            const trailer = filteredData.length ? filteredData[0] :  data.results[0];
            setTrailer(trailer);
            dispatch(addTrailerVideo(trailer));
        }catch(err) {
            console.error("Error fetching movie video info: " + err);
        }
    }

    useEffect(() => {
        if(id) {
            getMovieVideoInfo(id);
        }
    },[id])

    return trailer;
}

export default useMovieVideo;