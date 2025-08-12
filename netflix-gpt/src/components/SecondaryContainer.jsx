import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
            <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
        </div>
    )
}

export default SecondaryContainer;