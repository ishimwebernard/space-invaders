const Video = ({ video, onChange }) =>{
    console.log(video.snippet.resourceId.videoId);//playVideo={setVideo(k.snippet.resourceId.videoId)}
    return (
        <div className="video" onClick={()=>{
            onChange(video.snippet.resourceId.videoId);
        }}>
            <img src={`${video.snippet.thumbnails.high.url}`} alt=""/>
            <p className="title">{`${video.snippet.title}`}</p>
            <div className="date-set">
                <p className="date">{`${video.snippet.publishedAt}`}</p>
            </div>
            
        </div>
    )
}
export default Video;