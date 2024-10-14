import React, { useEffect, useState } from 'react';
import { View, Pressable } from "react-native";
import TrackPlayer, { useProgress, usePlaybackState,State,useTrackPlayerEvents,Event } from 'react-native-track-player';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from "../../utils/supabase";

import Play from "../../assets/icons/Play";
import Pause from '../../assets/icons/Pause';
import NextIcon from "../../assets/icons/NextIcon";
import Previews from "../../assets/icons/Previews";
import Skip from "../../assets/icons/Skip";
import styles from "../../styles/player";

const ControllPanel = ({ title }) => {
    const { duration, position } = useProgress();
    const playbackState = usePlaybackState();

    const sendListeningDataToServer = async (userId, trackId, seconds) => {
        try {
          const { data, error } = await supabase
            .from('listening_stats') 
            .insert([
              {
                user_id: userId,
                audio_id: trackId,
                second:seconds,
                date: new Date().toISOString(),
              },
            ]);
      
          if (error) {
            console.error('Ошибка при отправке данных на сервер:', error);
          } else {
            // console.log('Данные отправлены успешно:', data);
          }
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };


    const handlePlayPause = async () => {
        if (playbackState.state === State.Playing) {  
            const userId = await AsyncStorage.getItem('userId')
            const queue = await TrackPlayer.getQueue();
            const trackId = queue.findIndex(t => t.title === title);

            const secondsListened = Math.floor(position);

            sendListeningDataToServer(userId,trackId,secondsListened)
            TrackPlayer.pause();   
           
          } else {
            TrackPlayer.play();             
          }
    };

    const handleSkipToNext = async () => {
        await TrackPlayer.skipToNext();
        await TrackPlayer.play();
    };

    const handleSkipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
        await TrackPlayer.play();
    };

    useTrackPlayerEvents(['playback-track-changed'], async(event) => {
            const userId = await AsyncStorage.getItem('userId')
            const queue = await TrackPlayer.getQueue();
            const trackId = queue.findIndex(t => t.title === title);

            const secondsListened = Math.floor(position);

            sendListeningDataToServer(userId,trackId,secondsListened)
    });

    return (
        <View style={[styles.content, { paddingBottom: 60 }]}>
            <Pressable onPress={handleSkipToPrevious}>
                <Skip></Skip>
            </Pressable>
            <View style={styles.content}>
                <Pressable onPress={() => TrackPlayer.seekTo(30 - position)}>
                    <Previews></Previews>
                </Pressable>
                <Pressable
                    style={{ paddingLeft: 16, paddingRight: 16 }}
                    onPress={handlePlayPause}
                >
                    {playbackState.state === State.Playing ? <Pause></Pause> : <Play></Play>}
                </Pressable>
                <Pressable onPress={() => TrackPlayer.seekTo(30 + position)}>
                    <NextIcon></NextIcon>
                </Pressable>
            </View>

            <Pressable
                style={{ transform: [{ rotate: '180deg' }] }}
                onPress={handleSkipToNext}
            >
                <Skip></Skip>
            </Pressable>
        </View>
    );
};

export default ControllPanel;