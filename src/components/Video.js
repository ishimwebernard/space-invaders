const Video = (props) =>{
    const revealVideos = () =>{
        const k = document.getElementById("videos");
        if(k.style.display == "none"){
            k.style.display = "block";
        }else{
            k.style.display = "none";
        }
    }
    const video = "Fvf";
    const onChange = () =>{

    }
    console.log(props)
    return (
        <div className="smv flex mt-4 mx-w-auto  rounded-xl shadow-md space-x-4"  onClick={()=>{
            // onChange(video.snippet.resourceId.videoId, `${video.snippet.title}`, video.snippet.description);
            // const player = document.getElementById('top');
            // player.scrollIntoView({ behavior: `smooth`});
            // revealVideos();
        }}>
            {/* <img className="h-40 w-40" src={`${video.snippet.thumbnails.high.url}`} alt=""/> */}
            {/* <div>
            <p className="relative mx-w-auto w-full text-xl text-indigo-700 font-medium">{`${video.snippet.title}`}</p> 
            <p className="text-gray-500">{`${video.snippet.publishedAt}`}</p>
            </div> */}
           
            
        </div>
    )
}
export default Video;