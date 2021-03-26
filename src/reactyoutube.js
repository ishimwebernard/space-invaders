import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId }) =>{
  const opts = {
          height: '390',
          width: '100%',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
  return (
    <YouTube id="videoPlayer" className="row-span-2" videoId={videoId} opts={opts} />
  )
}
export default YoutubeVideo;