import { useState, useEffect, useCallback } from "react";
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
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import Card from "../Sleep/Card"
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";
import { SERVER } from "../../constants/async";
import Loader from "../Loader/Loader";
import axios from "axios";
import { supabase } from "../../utils/supabase";
import { QueueInitialTracksService } from "../../utils/QueueInitialTracksService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../../styles/sleep";

const Favorite = () =>{

    const[loading, setLoading] = useState(false)

    const [sleep, setSleep] = useState([]);
    const [originalSleep, setOriginalSleep] = useState([]);
    const [searchText, setSearchText] = useState("");
  
    const navigation = useNavigation();
  
    const getSleep = async () => {
      setLoading(true)
      try {
        const userId = await AsyncStorage.getItem('userId');

        const { data: existingFavorite, error: selectError } = await supabase
          .from('favorite')
          .select('*')
          .eq('user_id', userId);
      
        if (selectError) {
          throw new Error('Error selecting favorite: ' + selectError.message);
        }

        const meditationIds = existingFavorite.map(item => item.meditation_id);
      
        const { data } = await axios.get(`${SERVER}/api/home-meditation`);
        const { data: dataSleep }  = await axios.get(`${SERVER}/api/sleep`);
        
        const meditations = [...data.docs, ...dataSleep.docs]

        const filteredDocs = meditations.filter(doc => meditationIds.includes(doc.id));
      
        setSleep(filteredDocs);
        setOriginalSleep(filteredDocs);
      
        return filteredDocs;
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
  
    useFocusEffect(
      useCallback(() => {
        getSleep()
          .then(res => {
            res.map(track =>{
              QueueInitialTracksService(track.title,track.media,track.id);      
            })
          })
      }, [])
    );

    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            {!loading ? 
                   <ScrollView style={styles.content}>
                   <SafeAreaView style={[styles.topContent,{justifyContent:'space-between'}]}>
                       <Pressable onPress={() => navigation.navigate("Home")}>
                           <Back></Back>
                       </Pressable>
                       <Pressable onPress={() => navigation.navigate("Settings")}>
                           <Setting></Setting>
                       </Pressable>
                   </SafeAreaView>
                  
                           <View>
                       <Text style={styles.title}>My favorite meditations</Text>
                       <Text style={[styles.text, {paddingTop: 4, paddingBottom: 12}]}>{sleep.length} practices</Text>
                       <Text style={[styles.text, {paddingBottom:45}]}>All favorite meditations</Text>
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
            
        </>
    )
}

export default Favorite