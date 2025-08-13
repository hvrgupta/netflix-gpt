import MovieCard from "./MovieCard";

const MovieList = (props) => {
    const title = props.title;
    const movies = props.movies;
    return (
        <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">{title}</h1>
            <div className="w-full overflow-x-scroll no-scrollbar">
                <div className="flex space-x-2 sm:space-x-4" style={{ width: 'max-content' }}>
                    {movies && movies.map((movie, i) => (
                        <MovieCard key={movie.id} imgPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;