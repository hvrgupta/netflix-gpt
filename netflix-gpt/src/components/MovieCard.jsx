import { GET_MOVIES_POSTER } from "../utils/constants";

const MovieCard = ({imgPath}) => {
    return (
        <div className="w-48 flex-shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <img 
                alt="Movie card" 
                src={GET_MOVIES_POSTER+imgPath+".jpg"}
                className="w-full h-72 object-cover rounded-md shadow-lg"
            />
        </div>
    )
}

export default MovieCard;