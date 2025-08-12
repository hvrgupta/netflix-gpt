import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return;
    const mainMovie = movies[0];
    console.log(mainMovie)
    
    const { original_title, overview, id} = mainMovie
    
    return (
        <div className="relative w-full">
            <VideoBackground id={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}

export default MainContainer;