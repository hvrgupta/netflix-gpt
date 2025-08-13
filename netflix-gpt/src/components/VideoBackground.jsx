import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = (props) => {
    const id = props.id;

    // Always call the hook - it has internal logic to prevent unnecessary API calls
    useMovieVideo(id);
    
    // Get trailer from store
    const trailer = useSelector((store) => store.movies.trailerVideo);

    if (!trailer) return (
        <div className="w-full aspect-video bg-black flex items-center justify-center">
            <p className="text-white text-sm sm:text-lg md:text-xl">Loading trailer...</p>
        </div>
    );

    return (
        <div className="w-full relative">
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&rel=0`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    )
}

export default VideoBackground;