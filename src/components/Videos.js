import Video from './Video';
let videos;
const Videos = ({ set }) =>{
    try{
        console.log("Set=====>", set.items);
        videos = set.items.map((k)=>(
            <Video video={k}/>
        ))
    }catch(error){

    }
    return (
      <div className="video-set">
        {videos}
      </div>
    )
}
export default Videos;