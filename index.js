import { registerRootComponent } from 'expo';
import playbackService from './utils/playbackService';
import App from './App';
import TrackPlayer from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() => playbackService);

registerRootComponent(App);
