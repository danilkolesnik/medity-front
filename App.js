  import React, { useEffect, useState } from 'react';
  import { useFonts } from 'expo-font';
  import { AppNavigator } from './Navigation';
  import { PaperProvider } from 'react-native-paper';
  import TrackPlayer, { Capability,AppKilledPlaybackBehavior,RepeatMode} from 'react-native-track-player';

  export default function App() {
    const [fontsLoaded] = useFonts({
      "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
      "Urbanist-Black": require("./assets/fonts/Urbanist-Black.ttf"),
      "Urbanist-BlackItalic": require("./assets/fonts/Urbanist-BlackItalic.ttf"),
      "Urbanist-BoldItalic": require("./assets/fonts/Urbanist-BoldItalic.ttf"),
      "Urbanist-ExtraBold": require("./assets/fonts/Urbanist-ExtraBold.ttf"),
      "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
      "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
      "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
      "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    });

    const [playerInitialized, setPlayerInitialized] = useState(false);
      
    useEffect(() => {
      const setupPlayer = async () => {
        try {
          await TrackPlayer.setupPlayer();
          await TrackPlayer.updateOptions({
            android: {
              appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback
            },
            capabilities: [
              Capability.Play,
              Capability.Pause,
              Capability.SkipToNext,
              Capability.SkipToPrevious,
              Capability.Stop,
              Capability.PlayFromId,
              Capability.PlayFromSearch
            ],
            compactCapabilities: [
              Capability.Play,
              Capability.Pause,
              Capability.SkipToNext,
              Capability.SkipToPrevious,
              Capability.Stop,
              Capability.PlayFromId,
              Capability.PlayFromSearch
            ],
          });

          await TrackPlayer.setRepeatMode(RepeatMode.Queue)

          console.log('Track player setup success...');
          setPlayerInitialized(true);
        } catch (error) {
          console.error('Error setting up track player:', error);
        }
      };

      if (fontsLoaded && !playerInitialized) {
        setupPlayer();
      }

      return () => {
        TrackPlayer.reset();
      };
    }, [fontsLoaded, playerInitialized]);

    if (!fontsLoaded) {
      return null;
    }

    return (
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    );
  }
