import { useState, useEffect,useCallback } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { ProgressBar} from 'react-native-paper';
import CardSleep from "../Sleep/Card";
import Card from "./Card";
import Menu from '../Menu/menu'
import Burger from "./Burger";
import SearchIcon from "../../assets/icons/Search";
import Loader from "../Loader/Loader";
import { useFocusEffect } from "@react-navigation/native";
import { SERVER } from "../../constants/async";
import axios from "axios";
import CardTop from "./CardTop";

import styles from "../../styles/home";
import stylesList from "../../styles/sleep";
import aggregateListeningProgress from "../../utils/aggregateListeningProgress";
import TrackPlayer, { useTrackPlayerEvents } from 'react-native-track-player';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { supabase } from "../../utils/supabase";

const Home = ({navigation}) =>{

    const[loading, setLoading] = useState(false)

    const [meditations,setMeditations] = useState([])
    const [originalSleep, setOriginalSleep] = useState([]);
    const [favoriteMeditations, setFavoriteMeditations] = useState([])

    const [currentStep, setCurrentStep] = useState(null);
    const [currentStepFavorite, setCurrentStepFavorite] = useState(null);

    const [searchText, setSearchText] = useState("");

    const getMeditations = async() =>{
      setLoading(true);
      try {
          const {data} = await axios.get(`${SERVER}/api/home-meditation`)
        
          setMeditations(data.docs);
          setOriginalSleep(data.docs);

          return data.docs
      } catch (error) {
          console.log(error);      
      }finally {
        setLoading(false);
      }
    }

    const getFavorite = async() =>{
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

        const { data } = await axios.get(`${SERVER}/api/meditation`);
        const { data: dataSleep }  = await axios.get(`${SERVER}/api/sleep`);
        const { data: dataRelax }  = await axios.get(`${SERVER}/api/home-meditation`);
        
        const meditations = [
          ...data.docs, 
          ...dataSleep.docs, 
          ...dataRelax.docs
        ]

        const filteredDocs = meditations.filter(doc => meditationIds.includes(doc.title));

        setFavoriteMeditations(filteredDocs);

        return true
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false);
      }
    }

    const searchItem = (text) => {
      setSearchText(text)
      const filtered = originalSleep.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setMeditations(filtered);
    };
    
    const getUser = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          throw new Error('Access token not found');
        }
  
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error) {
          throw error;
        }
  
        await AsyncStorage.setItem('userId', user.id)

        return user;
      } catch (error) {
        console.error('Error getting user:', error.message);
        navigation.navigate("Introduction")
      }
    };

    useFocusEffect(
      useCallback(() => {
      setLoading(true);
    
      Promise.all([getMeditations(), getUser(), getFavorite()])
        .then(([questions, userData, favoriteData]) => {
          setMeditations(questions);
          setOriginalSleep(questions);   
    
          if (questions && userData && favoriteData) setLoading(false);

        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
        });
      }, [])
    );

    return (
      <>
        <ImageBackground
          source={require("../../assets/images/ostatochni.jpg")}
          style={styles.background}
        >
           {!loading ? 
            <>
            <ScrollView contentContainerStyle={styles.content}>
              <Text style={styles.title}>Welcome!</Text>
  
              <View style={styles.inputContainer}>
                <SearchIcon />
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={searchItem}
                    placeholder="Search"
                    placeholderTextColor="#949494"
                />
              </View>
            {!searchText ? 
              (
                <>
                <View style={styles.contentCard}>
                  {meditations.slice(0,2).map((item, index)  => (
                      <CardTop key={index} title={item.title} options={item.mainCategory} audio={item.media} type={item.type} active={currentStep} index={item.id} setCurrentStep={setCurrentStep} />
                  ))}
              </View>
              {/* {favoriteMeditations.length ?  */}
              <>
              <View style={styles.buttonMore}>
                <Text style={styles.textMore}>My favorite meditation</Text>
                <Pressable  onPress={() => navigation.navigate("My favorite meditations")}>
                  <Text style={styles.textButtonMore}>See all</Text>
                </Pressable>
              </View>
  
                <View style={styles.list}>
                {meditations.slice(2).map((item, index) =>(
                      <Card key={index} title={item.title} options={item.mainCategory} audio={item.media} type={item.type} active={currentStep} index={item.id} setCurrentStep={setCurrentStep} />
                    ))}
                </View>
              </> 
              {/* : null} */}

              <View style={styles.buttonMore}>
                <Text style={styles.textMore}>New meditations</Text>
                <Pressable  onPress={() => navigation.navigate("New meditations")}>
                  <Text style={styles.textButtonMore}>See all</Text>
                </Pressable>
              </View>
  
                <View style={styles.list}>
                    {meditations.slice(2).map((item, index) =>(
                      <Card key={index} title={item.title} options={item.mainCategory} audio={item.media} type={item.type} active={currentStep} index={item.id} setCurrentStep={setCurrentStep} />
                    ))}
                </View>

  
              <View style={styles.buttonMore}>
                <Text style={styles.textMore}>Your progress</Text>
                <Pressable onPress={() => navigation.navigate("Profile")}>
                  <Text style={styles.textButtonMore}>View full</Text>
                </Pressable>
              </View>
  
              <Text style={styles.progressStatusTittle}>Weekly progress</Text>
              <Text style={styles.progressStatusText}>
                On average, you practiced mindfulness{"\n"}{""}
                <Text style={{ fontWeight: "700" }}>4%</Text> more this week
                compared to last.
              </Text>
  
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: 12,
                  }}
                >
                  <Text style={styles.progressTitle}>9</Text>
                  <View
                    style={{
                      paddingLeft: 6,
                    }}
                  >
                    <Text style={styles.progressText}>min/day</Text>
                    <Text style={[styles.progressText, { fontSize: 10 }]}>
                      This week
                    </Text>
                  </View>
                </View>
                <ProgressBar
                  progress={0.9}
                  color="#BBBBBB"
                  style={{
                    backgroundColor: "#565656",
                    height: 8,
                    borderRadius: 4,
                  }}
                />
              </View>
  
              <View
                style={{
                  paddingTop: 27,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: 12,
                  }}
                >
                  <Text style={styles.progressTitle}>7</Text>
                  <View
                    style={{
                      paddingLeft: 6,
                    }}
                  >
                    <Text style={styles.progressText}>min/day</Text>
                    <Text style={[styles.progressText, { fontSize: 10 }]}>
                      This week
                    </Text>
                  </View>
                </View>
                <ProgressBar
                  progress={0.9}
                  color="#BBBBBB"
                  style={{
                    backgroundColor: "#565656",
                    height: 8,
                    borderRadius: 4,
                  }}
                />
              </View>
                </>
              )
            :
              <>
                 <View style={styles.listSearch}>
                    {meditations.map((item, index) =>(
                      <Pressable>
                        <CardSleep item={item} style={stylesList.backgroundCard} />
                      </Pressable>
  
                    ))}
                </View>
              </>
            }
            
  
            </ScrollView>
            </>       
            :
              <Loader></Loader>
            }
          
        </ImageBackground>
        <Menu />
      </>
    );
}

export default Home