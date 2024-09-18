import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, Pressable, Image } from "react-native";
import { BlurView } from 'expo-blur';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import TrackPlayer, { useTrackPlayerEvents, useProgress } from 'react-native-track-player';
import { LinearGradient } from 'expo-linear-gradient';
import { PlayerProgressBar } from "./PlayerProgressBar";
import ControllPanel from "./ControllPanel";
import MovingText from "./MovingText";
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";
import { SERVER } from "../../constants/async";
import Loader from '../Loader/Loader';
import styles from "../../styles/player";


const Player = () => {
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const { title, category,currentRoute } = route.params;

    const [currentTrackTitle, setCurrentTrackTitle] = useState(title);
    const navigation = useNavigation();
    const [error, setError] = useState(null);

    const playTrack = async () => {
        try {
            const queue = await TrackPlayer.getQueue();
            const trackIndex = queue.findIndex(t => t.title === title);

            if (trackIndex !== -1) {
                await TrackPlayer.skip(trackIndex);
                await TrackPlayer.play();
                setLoading(false);
            } else {
                setError('Track not found');
                setLoading(false);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        playTrack();
    }, []);
   

    useTrackPlayerEvents(['playback-track-changed'], async event => {
        const track = await TrackPlayer.getTrack(event.nextTrack);       
        setCurrentTrackTitle(track.title);
    });

    return (
        <>
            <ImageBackground
                source={require("../../assets/images/face-background.jpg")}
                style={styles.background}
                blurRadius={2}
            >
                <SafeAreaView style={styles.topContent}>
                    <Pressable onPress={() => navigation.navigate(currentRoute)}>
                        <Back></Back>
                    </Pressable>
                    <Pressable>
                        <Setting></Setting>
                    </Pressable>
                </SafeAreaView>

                <View style={styles.image}>
                    <Image source={require("../../assets/images/album-image.png")}></Image>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.trackTitle}>
                        {category.title}
                    </Text>
                    <Text style={styles.trackText}>
                        {currentTrackTitle}
                    </Text>
                    <PlayerProgressBar style={{ paddingBottom: 40 }} />
                    <ControllPanel />
                </View>
            </ImageBackground>
        </>
    );
};

export default Player;
