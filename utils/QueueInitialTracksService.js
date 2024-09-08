import TrackPlayer from 'react-native-track-player';
import { SERVER } from "../constants/async";

export const QueueInitialTracksService = async (title,audio) => {
    
    await TrackPlayer.add([
        {
            id: Date.now(), 
            url: `${SERVER}${audio.url}`,
            title: title,
            artist: 'deadmau5',
            album: 'while(1<2)',
            genre: 'Progressive House, Electro House',
            date: '2014-05-20T07:00:00+00:00',
            artwork: 'http://example.com/cover.png',
            duration: 200,
        },
      ]);
     
  };