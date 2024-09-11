import TrackPlayer,{State,usePlaybackState} from 'react-native-track-player';
import { View, Text, Pressable } from "react-native";
import { useNavigation  } from '@react-navigation/native';
import calculateDurationInMinutes from "../../utils/calculateDurationInMinutes";
import { SERVER } from "../../constants/async";
import Play from "../../assets/icons/Play";
import Pause from '../../assets/icons/Pause';
import styles from "../../styles/home";



const CardTop = ({title,options,active,index,duration,audio,setCurrentStep}) =>{

  const navigation = useNavigation();

  const totalMin = Math.ceil(calculateDurationInMinutes(audio.filesize))

  const playBackState = usePlaybackState();

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
        setCurrentStep(null)     
      } else {
        await TrackPlayer.play();             
      }
    }
  } catch (error) {
    console.log(error);
  }
};


    return(
        <>
             {/* <View style={[styles.cardConteiner, {backgroundColor: active === index ? "#FFFFFF" : 'rgba(255, 255, 255, 0.15)'}]}>
                <Text style={[styles.cardTitle, {color: active === index ? "#000" : '#fff'}]}>{title}</Text> 
                <View style={styles.cardContent}>
                    <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{totalMin} min</Text>
                    <Pressable
                        onPress={() => navigation.navigate(options.charAt(0).toUpperCase() + options.slice(1))}
                    >
                        <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>
                            {options}
                        </Text>  
                    </Pressable>

                </View>
             
               
        </View> */}
        

        <View style={[styles.cardConteiner, {backgroundColor: active === index ? "#FFFFFF" : 'rgba(255, 255, 255, 0.15)'}]}>
                <Text style={[styles.cardTitle, {color: active === index ? "#000" : '#fff'}]}>{title}</Text> 
                  <View style={styles.contentBotton}>
                  <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{totalMin} min</Text>
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
        </View>
        </>
       
    )
}

export default CardTop