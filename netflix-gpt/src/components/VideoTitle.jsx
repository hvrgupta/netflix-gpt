const VideoTitle = (props) => {
    const title = props.title;
    const overview = props.overview;

    return (
        <div className="w-screen aspect-video px-24 absolute text-white bg-gradient-to-r from-black pt-[20%]">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-l w-1/4">{overview}</p>
            <div className="m-2 font-bold">
                <button className="text-white bg-red-500 p-3 px-5 rounded-md mx-2 bg-oapcity-50">Play ▷</button>
                <button className="text-white bg-red-500 p-3 px-5 rounded-md mx-2 bg-oapcity-50" >ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;