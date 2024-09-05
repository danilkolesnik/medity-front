import TrackPlayer, { State } from 'react-native-track-player';
import { useState, useEffect } from "react";
import { ImageBackground, View, Text, Pressable,ScrollView,FlatList } from "react-native";
// import SoundPlayer from 'react-native-sound-player'
// import { Audio } from 'expo-av';

import Play from "../../assets/icons/Play";
import styles from "../../styles/card";

const Card = ({title,options,active,index,duration,audio}) =>{

    const [activePlay, setActivePlay] = useState(false)

    // const PlayAudio = async() =>{
    //     try {

    //         var track1 = {
    //             url: `http://localhost:3000/media/${audio.filename}`, 
    //             title: 'Avaritia',
    //             artist: 'deadmau5',
    //             album: 'while(1<2)',
    //             genre: 'Progressive House, Electro House',
    //             date: '2014-05-20T07:00:00+00:00', 
    //             artwork: 'http://example.com/cover.png', 
    //             duration: 402 
    //         };

           
    //         await TrackPlayer.play(track1);
    //         console.log('sound play');
            
    //     } catch (error) {
    //         console.log(error);    
    //     }
        
    // }
    
    return(
        <View style={[styles.cardConteiner, {backgroundColor: active === index ? "#FFFFFF" : 'rgba(255, 255, 255, 0.15)'}]}>
                <Text style={[styles.cardTitle, {color: active === index ? "#000" : '#fff'}]}>{title}</Text> 
                <View style={styles.cardContent}>
                {options.map((item,i) => (
                    <Text key={i} style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{item}</Text>
                ))}
                    {/* <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{duration} min</Text>
                    <Text style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{options}</Text>      */}
                </View>
               
                <Pressable 
                    style={styles.icon}
                   
                >
                    <Play active={active === index}></Play>
                </Pressable>       
               
        </View>
    )
}

export default Card