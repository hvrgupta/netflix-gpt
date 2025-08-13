const VideoTitle = (props) => {
    const title = props.title;
    const overview = props.overview;

    return (
        <div className="absolute top-0 left-0 w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 text-white bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center z-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">{title}</h1>
            <p className="py-2 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/4 mb-4 sm:mb-6">{overview}</p>
            <div className="flex gap-2 sm:gap-4">
                <button className="text-white bg-red-600 hover:bg-red-700 p-2 sm:p-3 px-4 sm:px-6 md:px-8 rounded-md font-bold transition-colors duration-200 text-sm sm:text-base">
                    Play ▷
                </button>
                <button className="text-white bg-gray-600 hover:bg-gray-700 p-2 sm:p-3 px-4 sm:px-6 md:px-8 rounded-md font-bold transition-colors duration-200 text-sm sm:text-base">
                    ⓘ More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;