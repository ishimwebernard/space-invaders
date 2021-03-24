import Video from './Video';
let videos;
const Videos = ({ set, setVideo }) =>{
    try{
        
        videos = set.items.map((k)=>(
            <Video video={k} />
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