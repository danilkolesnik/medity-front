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
import Favorite from '../../assets/icons/Favorite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER } from "../../constants/async";
import Loader from '../Loader/Loader';
import { supabase } from "../../utils/supabase";
import styles from "../../styles/player";


const Player = () => {
    const [loading, setLoading] = useState(true);
    const [curretFavorite, setCurrentFavorite] = useState(false)

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

    const getFavorite = async() =>{
        try {
            const userId = await AsyncStorage.getItem('userId');
            const queue = await TrackPlayer.getQueue();
            const track = queue.find(t => t.title === title);

            if (!userId) {
                throw new Error('User ID not found');
            }

            const { data: existingGoals, error: selectError } = await supabase
              .from('favorite')
              .select('*')
              .eq('meditation_id', track.id);

          
            if(existingGoals.length != 0){
                setCurrentFavorite(true)
                return
            }        
            setCurrentFavorite(false)

        } catch (error) {
            
        }
    }

    const resetPlayer = async() =>{
        await TrackPlayer.pause();
        await TrackPlayer.reset()
        navigation.navigate(currentRoute)
    }

    const resetSettings = async() =>{
        await TrackPlayer.pause();
        await TrackPlayer.reset()
        navigation.navigate("Settings")
    }

    const addFavorite = async() =>{
        try {
            const userId = await AsyncStorage.getItem('userId');

            const queue = await TrackPlayer.getQueue();
            const track = queue.find(t => t.title === title);
            
            if (!userId) {
              throw new Error('User ID not found');
            }
  
            const { data: existingGoals, error: selectError } = await supabase
              .from('favorite')
              .select('*')
              .eq('meditation_id', track.id);
        
            if (selectError) {
              throw selectError;
            }
        
            if (existingGoals.length > 0) {
  
              const { data, error } = await supabase
                .from('favorite')
                .delete()
                .eq('meditation_id', track.id)

            setCurrentFavorite(false)
        
              if (error) {
                throw error;
              }
        
            } else {
             
              const { data, error } = await supabase
                .from('favorite')
                .insert([{
                  user_id:userId,
                  meditation_id:track.id
                }]);

             setCurrentFavorite(true)
              
        
              if (error) {
                throw error;
              }
            }
          } catch (error) {
            console.error('Error saving goals:', error.message);
            Alert.alert('Error', 'Failed to save goals. Please try again.');
          }
    }

    useEffect(() => {
        getFavorite()
        playTrack();
    }, []);

    useTrackPlayerEvents(['playback-track-changed'], async event => {
        const track = await TrackPlayer.getTrack(event.nextTrack);       
        setCurrentTrackTitle(track.title);
    });

    return (
        <>
            <ImageBackground
                source={require("../../assets/images/glass.jpg")}
                style={styles.background}
                resizeMode="stretch"
            >
                <SafeAreaView style={styles.topContent}>
                    <Pressable onPress={() => resetPlayer()}>
                        <Back></Back>
                    </Pressable>
                    <View>
                        
                        <Pressable
                            onPress={() => addFavorite()}
                            style={{
                                marginTop:11
                            }}
                        >
                            <Favorite active={curretFavorite}></Favorite>
                        </Pressable>
                    </View>
                    
                </SafeAreaView>

                <View style={styles.image}>
                    <Image source={require("../../assets/images/album-image.png")}></Image>
                </View>
               <View style={styles.textContent}>
                   
               <Text style={styles.trackTitle}>
               
                {currentTrackTitle}
              </Text>
        
                    
                           
                   <Text style={styles.trackText}>
                   {category ? category.title : 'Sleep'}
                   </Text>
                   <PlayerProgressBar style={{ paddingBottom: 40 }} />
                   <ControllPanel title={title}/>
               </View>            
                
            </ImageBackground>
        </>
    );
};

export default Player;
