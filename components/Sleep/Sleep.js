import { useState, useEffect } from "react";
import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    TextInput,
    Pressable
} from "react-native"

import SearchIcon from "../../assets/icons/Search";
import Menu from '../Menu/menu'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import Card from "./Card";
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";
import { SERVER } from "../../constants/async";
import Loader from "../Loader/Loader";
import axios from "axios";

import { QueueInitialTracksService } from "../../utils/QueueInitialTracksService";
import styles from "../../styles/sleep";

const Sleep = () =>{

    const[loading, setLoading] = useState(false)

    const [sleep, setSleep] = useState([]);
    const [originalSleep, setOriginalSleep] = useState([]);
    const [searchText, setSearchText] = useState("");
  
    const navigation = useNavigation();
  
    const getSleep = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`${SERVER}/api/meditation`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        setSleep(data.docs);
        setOriginalSleep(data.docs.filter(item => item.mainCategory === 'sleep'));

        return data.docs
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false);
      }
    };
  
    const searchItem = (text) => {
      setSearchText(text);
      const filtered = originalSleep.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setSleep(filtered);
    };
  
    useEffect(() => {
      getSleep()
        .then(res => {
          res.map(track =>{
            QueueInitialTracksService(track.title,track.media);      
          })
        })
    }, []);

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            {!loading ? 
                   <ScrollView style={styles.content}>
                   <SafeAreaView style={styles.topContent}>
                       <Pressable onPress={() => navigation.navigate("Home")}>
                           <Back></Back>
                       </Pressable>
                       <Pressable>
                           <Setting></Setting>
                       </Pressable>
                   </SafeAreaView>
                  
                           <View>
                       <Text style={styles.title}>Sleep</Text>
                       <Text style={[styles.text, {paddingTop: 4, paddingBottom: 12}]}>{sleep.length} practices</Text>
                       <Text style={[styles.text, {paddingBottom:45}]}>Meditations for calm sleep</Text>
                   </View>
                   
                   <View style={styles.inputContainer}>
                       <SearchIcon/>
                       <TextInput
                           style={styles.input}
                           value={searchText}
                           onChangeText={searchItem}
                           placeholder="Search"
                           placeholderTextColor="#949494"
                       />
                   </View>

                  <View style={styles.list}>
                    {sleep.map(item =>(
                      <Pressable key={item.id}>
                        <Card item={item} style={styles.backgroundCard} />
                      </Pressable>
                    ))}
                  </View>
   
               <View style={styles.bottomPadding} />
               </ScrollView>
            :
                <Loader></Loader>
            }
            <Menu></Menu>
            </ImageBackground>
            
        </SafeAreaView>
    )
}

export default Sleep