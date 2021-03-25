import Video from './Video';
let videos;
const Videos = ({ set, onChange }) =>{
    try{
        
        videos = set.items.map((k)=>(
            <Video video={k} onChange={onChange} />
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