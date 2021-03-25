import ReactYoutube from './reactyoutube.js';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import Header from './components/Header';
import Videos from './components/Videos'

dotenv.config();
const YOUTUBE_PLAYLIST_ITEMS = "https://www.googleapis.com/youtube/v3/playlistItems";
let data;
function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('nQWFzMvCfLE');
  useEffect(()=>{
    const getVideos = async()=>{
      const fetchedData = await fetchVideos();
      setVideos(fetchedData);
    }
    getVideos();
    }, []); 
    const fetchVideos = async()=>{
      const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS}?part=snippet&maxResults=50&playlistId=PLWvahZRxLnLPV5ECCHvmLuus6Tjmv4Oir&key=${process.env.REACT_APP_GOOGLE_APIS_KEY}`);
       data = await res.json();
      return data.items;
    };
    const playThisVideo = (video) =>{
      setCurrentVideo(video)
    }

  return (
    <div className="App">
    <Header className="header" />
    <ReactYoutube videoId={currentVideo}/>
    <h1>Playlist Items</h1>
    <Videos set={data} onChange={playThisVideo} />
    </div>
  );
}

export default App;
