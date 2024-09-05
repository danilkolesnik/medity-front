import React, { useEffect, useState } from 'react';
import TrackPlayer,{Track,useActiveTrack } from 'react-native-track-player';
import { View, Text, Pressable } from "react-native";
import { useNavigation  } from '@react-navigation/native';
import calculateDurationInMinutes from "../../utils/calculateDurationInMinutes";
import { SERVER } from "../../constants/async";
import Play from "../../assets/icons/Play";
import styles from "../../styles/card";


const Card = ({title,options,active,index,duration,audio}) =>{

    const [isPlay, setIsPlay] = useState(true)

    const navigation = useNavigation();

    const totalMin = Math.ceil(calculateDurationInMinutes(audio.filesize))

    const playAudio = async () => {
        setIsPlay(prevState => !prevState)
        try {
          
          const track = {
            url: `${SERVER}${audio.url}`,
            title: title,
            artist: 'deadmau5',
            album: 'while(1<2)',
            genre: 'Progressive House, Electro House',
            date: '2014-05-20T07:00:00+00:00',
            artwork: 'http://example.com/cover.png',
            duration: 200,
          };

          await TrackPlayer.reset()
          await TrackPlayer.add([track]);

          if(isPlay){
            await TrackPlayer.play();
            console.log('Sound play');
            return
          }
          await TrackPlayer.pause();
          console.log('Sound paused');
         
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <View style={[styles.cardConteiner, {backgroundColor: active === index ? "#FFFFFF" : 'rgba(255, 255, 255, 0.15)'}]}>
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
               
                <Pressable 
                    style={styles.icon}
                    onPress={() => playAudio()}
                >
                    <Play active={active === index}></Play>
                </Pressable>       
               
        </View>
    )
}

export default Card