// import React from 'react';
// import YouTube from 'react-youtube';
// import '../node_modules/react-youtube-playlist/dist/styles.scss';

// class ReactYoutube extends React.Component {
//   // render() {
//   //   const opts = {
//   //     height: '390',
//   //     width: '640',
//   //     playerVars: {
//   //       // https://developers.google.com/youtube/player_parameters
//   //       autoplay: 1,
//   //     },
//   //   };

//   //   return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//   // }

//   // _onReady(event) {
//   //   // access to player in all event handlers via event.target
//   //   event.target.pauseVideo();
//   // }
//   render (
//     <YouTubePlaylist
//       width={'85%'}
//       height={390}
//       api_key='AIzaSyBXDJ0QJUM6QoRtGQwNv-PBnyWWuxkXTtU'
//       playlist_id='YourYoutubePlaylistID'
//       show_thumbnails
//     />
//   )
// }
import YouTubePlaylist from 'react-youtube-playlist';
import '../node_modules/react-youtube-playlist/dist/styles.scss'
 
const App = () => {
  return (
    <YouTubePlaylist
      width={'85%'}
      height={390}
      api_key='YourGoogleApiKey'
      playlist_id='YourYoutubePlaylistID'
      show_thumbnails
    />
  )
}
 
export default App;