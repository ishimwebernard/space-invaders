import Video from './Video';
let videos;
const Videos = ({ set, onChange}) =>{
    try{
        
        videos = set.items.map((k)=>(
            <Video video={k} onChange={onChange} />
        ))
    }catch(error){

    }
    return (
      <div id="videos" className="flex-none float-right items-center h-full overflow-y-scroll">
        {videos}
      </div>
    )
}
export default Videos;