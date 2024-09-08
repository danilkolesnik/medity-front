import React, { useEffect, useState } from 'react';
import { View, Pressable } from "react-native";
import TrackPlayer, { useProgress, usePlaybackState,State } from 'react-native-track-player';
import Play from "../../assets/icons/Play";
import Pause from '../../assets/icons/Pause';
import NextIcon from "../../assets/icons/NextIcon";
import Previews from "../../assets/icons/Previews";
import Skip from "../../assets/icons/Skip";
import styles from "../../styles/player";

const ControllPanel = ({ playAudio }) => {
    const { duration, position } = useProgress();
    const playbackState = usePlaybackState();

    const handlePlayPause = async () => {
        if (playbackState.state === State.Playing) {  
            TrackPlayer.pause();   
            setIsPlaying(false)   
          } else {
            TrackPlayer.play();    
            setIsPlaying(true)           
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