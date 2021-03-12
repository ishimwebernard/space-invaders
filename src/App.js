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
  useEffect(()=>{
    const getVideos = async()=>{
      const fetchedData = await fetchVideos();
      setVideos(fetchedData);
    }
    getVideos();
    }, []); 
    const fetchVideos = async()=>{
      const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS}?part=snippet&playlistId=PLAE2A24C2B39F82E0&key=${process.env.REACT_APP_GOOGLE_APIS_KEY}`);
       data = await res.json();
      return data.items;
    };

  return (
    <div className="App">
    <Header />
    <ReactYoutube />
    <h1>Playlist Items</h1>
    <Videos set={data}/>
    </div>
  );
}

export default App;
