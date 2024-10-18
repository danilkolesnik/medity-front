import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, Pressable, Image,Modal,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import TrackPlayer, { useTrackPlayerEvents } from 'react-native-track-player';
import { PlayerProgressBar } from "./PlayerProgressBar";
import ControllPanel from "./ControllPanel";
import Back from "../../assets/icons/Back";
import Favorite from '../../assets/icons/Favorite';
import Download from '../../assets/icons/Download'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from "../Loader/Loader";
import { SERVER } from "../../constants/async";
import { supabase } from "../../utils/supabase";
import * as FileSystem from 'expo-file-system';
import styles from "../../styles/player";


const Player = () => {
    const [loading, setLoading] = useState(true);
    const [curretFavorite, setCurrentFavorite] = useState(false)

    const [progress, setProgress] = useState(0); 

    const route = useRoute();
    const { title, category,currentRoute,media,image } = route.params;

    const [currentTrackTitle, setCurrentTrackTitle] = useState(title);
    const navigation = useNavigation();

    const [active,setModalVisible] = useState(false)
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

    const downloadFile = async () => {
        try {
            const audioUrl = `${SERVER}${media.url}`; 
            const fileUri = FileSystem.documentDirectory + `${media.filename}`;
        
            const imageUrl = `${SERVER}${image.url}`;
            const fileImage = FileSystem.documentDirectory + `${image.filename}`;
    
            const callback = (downloadProgress) => {
                const progressValue = 
                    downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
                setProgress(progressValue * 100); 
                setModalVisible(true)
            };
    
            const downloadAudioResumable = FileSystem.createDownloadResumable(
                audioUrl,
                fileUri,
                {},
                callback
            );
    
            const downloadImageResumable = FileSystem.createDownloadResumable(
                imageUrl,
                fileImage
            );
    
            const [audioDownloadResult, imageDownloadResult] = await Promise.all([
                downloadAudioResumable.downloadAsync(),
                downloadImageResumable.downloadAsync()
            ]);

    
            if (audioDownloadResult && imageDownloadResult) {
                console.log('Файлы успешно загружены:', audioDownloadResult.uri, imageDownloadResult.uri);
    
                const downloadedMedia = {
                    id: media.id,
                    title: title,
                    category: category ? category.title : 'Unknown', 
                    media: {
                        url: audioDownloadResult.uri, 
                        filename: media.filename,
                        duration: media.duration,
                        mimeType: media.mimeType
                    },
                    image: {
                        url: imageDownloadResult.uri, 
                        filename: image.filename,
                        mimeType: image.mimeType
                    }
                };
    
                const storedData = await AsyncStorage.getItem('downloadedMedia');
                const parsedData = storedData ? JSON.parse(storedData) : [];
               
                const updatedData = [...parsedData, downloadedMedia];
           
                await AsyncStorage.setItem('downloadedMedia', JSON.stringify(updatedData));

                addFavorite()
    
                console.log('Данные успешно сохранены в AsyncStorage');
            }
        } catch (e) {
            console.error('Ошибка при скачивании файла:', e);
            setError('Ошибка при скачивании файла');
        }
    };


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
                        <Pressable
                            onPress={() => downloadFile()}
                                style={{
                                   marginTop:25,
                                   alignItems:'center',                             
                                }}
                        >
                        <Download></Download>
                        </Pressable>
                    </View>
                    
                </SafeAreaView>
                {!loading ? 
                    <>
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
                    </>
                : <Loader></Loader>}
              

                       

                <Modal
                animationType="fade"
                transparent={true}
                visible={active}
                onRequestClose={() => {
                
                setModalVisible(!active);
            }}>
            <View style={stylesModal.centeredView}>
                <View style={stylesModal.modalOverlay} />
                <View style={stylesModal.modalView}>
                    <Text style={stylesModal.modalText}>
                        {Math.round(progress) != 100 ? `${Math.round(progress)}%`: 'Meditation successfully saved'}
                    </Text>
                    <View
                        style={{
                            flexDirection:"row",
                            justifyContent:'space-between',
                            width:'100%'
                        }}
                    >
                        
                        <Pressable
                            style={[stylesModal.button]}
                            onPress={() => setModalVisible(false)}
                           >
                                <Text style={stylesModal.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                   
                </View>
            </View>
        </Modal>    
                
            </ImageBackground>
        </>
    );
};

const stylesModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalOverlay: {
        position: 'absolute',    
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
       
        backgroundColor: '#2D2D2D',
        
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width:300,   
        borderRadius:20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
    },
    button: {
        width:'100%',
        backgroundColor: '#282828',
        paddingVertical:12,
        borderRadius:12
    },
    buttonOpen: {

    },
    buttonClose: {

    },
    textStyle: {
        color: 'white',
        fontWeight:"600",
        fontSize: 16,
        fontFamily:"Urbanist-Bold",
        textAlign: 'center',

    },
    modalText: {
        fontFamily:"Urbanist-Bold",
        fontSize: 16,
        fontWeight:'600',
        textAlign: 'center',
        color: 'white',
        paddingVertical:24
    },
});


export default Player;
