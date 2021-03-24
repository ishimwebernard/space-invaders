const Video = ({ video }) =>{
    console.log(video.snippet.resourceId.videoId);//playVideo={setVideo(k.snippet.resourceId.videoId)}
    return (
        <div className="video">
            <img src={`${video.snippet.thumbnails.high.url}`} alt=""/>
            <p className="title">{`${video.snippet.title}`}</p>
            <div className="date-set">
                <p className="date">{`${video.snippet.publishedAt}`}</p>
            </div>
            
        </div>
    )
}
export default Video;