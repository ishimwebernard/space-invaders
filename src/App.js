import ReactYoutube from './reactyoutube.js';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import Header from './components/Header';
import Videos from './components/Videos'
import Description from './components/Description'
import Footer from './components/Footer'

dotenv.config();
const YOUTUBE_PLAYLIST_ITEMS = "https://www.googleapis.com/youtube/v3/playlistItems";
let data;
function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('nQWFzMvCfLE');
  const [videoName, setVideoName] = useState('What a beautiful Name Hillsong');
  const [videoDescription, setVideoDescription] = useState(`"What A Beautiful Name" from the album 'let there be light'' recorded live at ‪Hillsong Conference in Sydney, 2016. ** Scriptural Inspiration Behind the Lyrics** https://goo.gl/N5M5Qh ** Song Story From Brooke Ligertwood** https://goo.gl/OqOJxU **Subscribe to our YouTube channel** http://smarturl.it/HillsongWorshipSub Click here to listen to the latest from Hillsong Worship: https://hillsong.lnk.to/ytplaylist Stay connected: Instagram: https://instagram.com/hillsongworship Facebook: https://facebook.com/hillsongworship Twitter: https://twitter.com/hillsongworship Website: https://hillsong.com/worship What A Beautiful Name Words and Music by Ben Fielding & Brooke Ligertwood © 2016 Hillsong Music Publishing. CCLI: 7068424 VERSE 1: You were the Word at the beginning One with God the Lord Most High Your hidden glory in creation Now revealed in You our Christ CHORUS 1: What a beautiful Name it is What a beautiful Name it is The Name of Jesus Christ my King What a beautiful Name it is Nothing compares to this What a beautiful Name it is The Name of Jesus VERSE 2: You didn’t want heaven without us So Jesus You brought heaven down My sin was great Your love was greater What could separate us now CHORUS 2: What a wonderful Name it is What a wonderful Name it is The Name of Jesus Christ my King What a wonderful Name it is Nothing compares to this What a wonderful Name it is The Name of Jesus What a wonderful Name it is The Name of Jesus BRIDGE: Death could not hold You The veil tore before You You silence the boast of sin and grave The heavens are roaring The praise of Your glory For You are raised to life again You have no rival You have no equal Now and forever God You reign Yours is the kingdom Yours is the glory Yours is the Name above all names CHORUS 3: What a powerful Name it is What a powerful Name it is The Name of Jesus Christ my King What a powerful Name it is Nothing can stand against What a powerful Name it is The Name of Jesus TAGS: What a powerful Name it is The Name of Jesus What a powerful Name it is The Name of Jesus #whatabeautifulname #hillsongworship #lettherebelight`);
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
    const playThisVideo = (video, videoName, videoDescription) =>{
      setCurrentVideo(video);
      setVideo(videoName, videoDescription);
    }
    const setVideo = (videoName, VdESCRIPTION) =>{
      setVideoName(videoName);
      setVideoDescription(VdESCRIPTION)
    }

  return (
    <div  className="w-full max-w-full">
    <Header className="header" />
    <div id="app" className="space-x-4 w-full">
    <div className="py-2">
    <ReactYoutube className=""  videoId={currentVideo}/>
    <Description  videoName={videoName} videoDescription={videoDescription}/>
    </div>
    <Videos  set={data} onChange={playThisVideo} />
 
    </div>
    <Footer />
    </div>
  );
}

export default App;
