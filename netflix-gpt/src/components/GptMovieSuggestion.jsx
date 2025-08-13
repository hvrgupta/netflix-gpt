import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
    const { movies } = useSelector((store) => store.gptSearch);

    if (!movies) return null;

    return (
        <div className="p-2 sm:p-4 m-2 sm:m-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-white">GPT Movie Suggestions</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4">
                {movies.map((movieList, index) => (
                    <div key={index} className="w-full">
                        <MovieList title={`Suggestion ${index + 1}`} movies={movieList} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GPTMovieSuggestion;