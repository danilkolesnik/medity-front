import { useEffect } from 'react';
import TrackPlayer,{State,usePlaybackState,useProgress,useTrackPlayerEvents} from 'react-native-track-player';
import { View, Text, Pressable } from "react-native";
import { useNavigation  } from '@react-navigation/native';
import calculateDurationInMinutes from "../../utils/calculateDurationInMinutes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from "../../utils/supabase";
import { SERVER } from "../../constants/async";
import Play from "../../assets/icons/Play";
import Pause from '../../assets/icons/Pause';
import styles from "../../styles/card";


const Card = ({title,options,active,index,audio,setCurrentStep,type}) =>{

  const navigation = useNavigation();

  const totalMin = Math.ceil(calculateDurationInMinutes(audio.filesize))

  const playBackState = usePlaybackState();

  const { duration, position } = useProgress();

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
        console.log('Данные отправлены успешно:', data);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };


  const playAudio = async () => {
  try {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack?.url !== `${SERVER}${audio.url}`) {
      
      await TrackPlayer.reset();
      const track1 = {
        url: `${SERVER}${audio.url}`,
        title: title,
        artist: 'deadmau5',
        album: 'while(1<2)',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00',
        artwork: 'http://example.com/cover.png',
        duration: 200,
      };
      await TrackPlayer.add([track1]);
      await TrackPlayer.play();       
        
    } else {
      if (playBackState.state === State.Playing) {  
        await TrackPlayer.pause();   

        const userId = await AsyncStorage.getItem('userId')
        const queue = await TrackPlayer.getQueue();
        const trackId = queue.findIndex(t => t.title === title);

        const secondsListened = Math.floor(position);

        sendListeningDataToServer(userId,trackId,secondsListened)
        setCurrentStep(null)     
      } else {
        await TrackPlayer.play();             
      }
    }
  } catch (error) {
    console.log(error);
  }
  };

  useEffect(() => {
    
    const unsubscribeBlur = navigation.addListener('blur', async () => {
      await TrackPlayer.reset();
      setCurrentStep(null)
    });
  
    return () => {
      unsubscribeBlur(); 
    };
  }, [navigation]);

    return(
        <View style={[styles.cardConteiner, {backgroundColor: active === index ? "#FFFFFF" : 'rgba(255, 255, 255, 0.15)'}]}>
                <Text style={[styles.cardTitle, {color: active === index ? "#000" : '#fff'}]}>{title}</Text> 
                <View style={styles.cardContent}>
                    <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{type} min</Text>
                    <Pressable
                        onPress={() => navigation.navigate(options.charAt(0).toUpperCase() + options.slice(1))}
                    >
                        <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>
                            {options}
                        </Text>  
                    </Pressable>

                </View>
         
                <Pressable 
                    style={styles.icon}
                    onPress={() => {
                      playAudio()
                      setCurrentStep(index)
                    }}
                >
                    {active === index ? <Pause/> : <Play/>}
                    
                </Pressable>       
               
        </View>
    )
}

export default Card