const Video = ({ video, onChange}) =>{
    console.log(video);//playVideo={setVideo(k.snippet.resourceId.videoId)}
    return (
        <div className="flex mt-4 mx-w-auto  rounded-xl shadow-md space-x-4"  onClick={()=>{
            onChange(video.snippet.resourceId.videoId, `${video.snippet.title}`, video.snippet.description);
            const player = document.getElementById('top');
            player.scrollIntoView({ behavior: `smooth`})
        }}>
            <img className="h-40 w-40" src={`${video.snippet.thumbnails.high.url}`} alt=""/>
            <div>
            <p className="relative mx-w-auto w-full text-xl text-indigo-700 font-medium">{`${video.snippet.title}`}</p> 
            <p className="text-gray-500">{`${video.snippet.publishedAt}`}</p>
            </div>
           
            
        </div>
    )
}
export default Video;