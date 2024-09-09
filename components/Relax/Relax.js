import { useState, useEffect } from "react";
import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    FlatList,
    TextInput,
    Pressable
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { SERVER } from "../../constants/async";
import { QueueInitialTracksService } from "../../utils/QueueInitialTracksService";

import Card from "../Sleep/Card";
import Menu from '../Menu/menu'
import Loader from "../Loader/Loader";
import axios from "axios";

import SearchIcon from "../../assets/icons/Search";
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";

import styles from "../../styles/sleep"; 
import TrackPlayer from "react-native-track-player";


const Relax = () =>{
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
      const filteredData = data.docs.filter(item => item.mainCategory === 'relax');
      setSleep(filteredData);
      setOriginalSleep(filteredData);

      return data.docs
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
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

  const groupedData = sleep.reduce((acc, item) => {
    const category = item.category.title;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const groupedArray = Object.keys(groupedData).map(category => ({
    category,
    data: groupedData[category],
  }));

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            {!loading ? 
                 <ScrollView style={[styles.content]}>
                 <SafeAreaView style={styles.topContent}>
                     <Pressable onPress={() => navigation.navigate("Home")}>
                         <Back></Back>
                     </Pressable>
                     <Pressable>
                         <Setting></Setting>
                     </Pressable>
                 </SafeAreaView>
                 <View>
                     <Text style={styles.title}>Relax</Text>
                     <Text style={[styles.text, {paddingTop: 4, paddingBottom: 12}]}>{sleep.length} practices</Text>
                     <Text style={[styles.text, {paddingBottom:45}]}>Relax your body and find an inner peace</Text>
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
                 <FlatList
         data={groupedArray}
         renderItem={({ item }) => (
           <View>
             <Text style={[styles.title, { paddingTop: 24, paddingBottom: 10, fontSize: 18 }]}>
               {item.category}
             </Text>
             <FlatList
               data={item.data}
               renderItem={({ item }) => <Card item={item} style={styles.backgroundCardRelax} />}
               keyExtractor={(item) => item.id}
               contentContainerStyle={styles.listRelax}
               horizontal
               showsHorizontalScrollIndicator={false}
             />
           </View>
         )}
         keyExtractor={(item) => item.category}
         contentContainerStyle={styles.container}
       />
                 
                 <View style={styles.bottomPadding} />
             </ScrollView>
            :
                <Loader></Loader>
            }
           
            
            </ImageBackground>
            
            <Menu></Menu>
        </SafeAreaView>
    )
}

export default Relax