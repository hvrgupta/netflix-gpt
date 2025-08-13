import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS, SEARCH_MOVIE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/gptsearchslice";

const GPTSearchBar = () => {

    const searchTxt = useRef(null);
    const dispatch = useDispatch();

    const handleGptSearchClick = async() => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchTxt.current.value + " only give name of 5 movies. (comma separated)";

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
              { role: 'user', content: gptQuery }
            ],
          });

          if(!completion.choices){
            // err handling
          }
          
        const gptmovies = completion.choices?.[0]?.message?.content.split(",");

        const gptMovieList = await Promise.all(gptmovies.map(movie => fetchMovie(movie.trim())));
        
        dispatch(addMovies(gptMovieList));
    }

    const fetchMovie = async(movie) => {
        try {
            const response = await fetch(SEARCH_MOVIE+movie+"&page=1", API_OPTIONS);
            const data = await response.json();
            return data.results;
        } catch (err) {
            console.error("Error fetching movie:", err);
            return [];
        }
    }

    return (
        <div className="pt-[10%] sm:pt-[15%] flex justify-center items-center px-4">
            <form onSubmit={(e) => e.preventDefault()} className="text-white w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex items-center gap-2 sm:gap-4">
                <input ref={searchTxt} type="text" className="p-3 sm:p-4 m-2 sm:m-4 bg-white text-black rounded-md w-full text-sm sm:text-base" placeholder="What would you like to watch today?" />
                <button className="py-2 sm:py-2 px-3 sm:px-4 bg-red-600 rounded-md font-bold text-sm sm:text-base hover:bg-red-700 transition-colors whitespace-nowrap" onClick={handleGptSearchClick}>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;