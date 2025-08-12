import GPTMovieSuggestion from "./GptMovieSuggestion";
import GPTSearchBar from "./GptSearchBar";
import { netflix_bg } from "../utils/constants";

const GPTSearch = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0">
                <img src={netflix_bg} alt="background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10">
                <GPTSearchBar />
                <GPTMovieSuggestion />
            </div>
        </div>
    )
}

export default GPTSearch;