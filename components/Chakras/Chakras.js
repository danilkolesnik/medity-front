import { useState,useEffect } from "react";
import { ImageBackground, View, Text, Pressable, ScrollView } from "react-native";
import { SERVER } from "../../constants/async";
import { useNavigation  } from '@react-navigation/native';
import Loader from "../Loader/Loader";

import axios from "axios";

import Header from "../Header/Header";
import styles from "../../styles/chakrasstyle";
import Menu from '../Menu/menu';

const Chakras = () => {

    const [loading, setLoading] = useState(false)

    const currentRoute = "Home"

    const [chakras,setChakras] = useState([])

    const navigation = useNavigation();

    const getChakras = async () => {
        setLoading(true)
        try {
          const { data } = await axios.get(`${SERVER}/api/chakra`);
          setChakras(data.docs)
          return data.docs
        } catch (error) {
          console.log(error);
        }finally{
            setLoading(false)
        }
    };

    useEffect(() =>{
        getChakras()
    },[])

    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
                resizeMode="repeat"     
            >
                {!loading ?
                <ScrollView style={styles.conteiner}>

                    <Header currentRoute={currentRoute}/>
                   
                     <View style={styles.chakrasContainer}>
                     {chakras.map((item, index) =>(
                         <Pressable style={styles.chakraWrapper} key={index} onPress={() => {
                             navigation.navigate("Chakra",{item})
                         }}>
                          <ImageBackground
                              source={{uri:`${SERVER}${item.image.url}`}}
                              style={styles.backgroundCardRelax}
                          >
                         
                          <View style={styles.infoBar}>
                              <Text style={styles.infoBarText}>{item.title}</Text>
                              <View style={styles.infoMarksWrapper}>
                                  <Text style={styles.infoMark}>{item.meditations.length} meditations</Text>
                                  <Text style={styles.infoMark}>•</Text>
                                  <Text style={styles.infoMark}>{item.affirmations.length} affirmations</Text>
                              </View>
                          </View> 
                          </ImageBackground>
                      
                      </Pressable>
                     ))}
                 </View>                  
                </ScrollView>
                 : <Loader></Loader>
                }
                <Menu/>  
            </ImageBackground>
        </>
    )
}

export default Chakras;