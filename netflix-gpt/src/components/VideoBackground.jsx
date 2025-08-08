import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = (props) => {
    const id = props.id;

    const trailer = useMovieVideo(id);

    if (!trailer) return <p>Loading trailer...</p>;

    return (
        <div className="w-full">
            <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailer.key}?&autoplay=1&mute=1`}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground;