const VideoTitle = (props) => {
    const title = props.title;
    const overview = props.overview;

    return (
        <div className="absolute top-0 left-0 w-full h-full px-24 text-white bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center z-10">
            <h1 className="text-6xl font-bold mb-4">{title}</h1>
            <p className="py-6 text-lg w-1/4 mb-6">{overview}</p>
            <div className="flex gap-4">
                <button className="text-white bg-red-600 hover:bg-red-700 p-3 px-8 rounded-md font-bold transition-colors duration-200">
                    Play ▷
                </button>
                <button className="text-white bg-gray-600 hover:bg-gray-700 p-3 px-8 rounded-md font-bold transition-colors duration-200">
                    ⓘ More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;