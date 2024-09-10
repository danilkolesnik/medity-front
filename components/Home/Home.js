import { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar} from 'react-native-paper';
import CardSleep from "../Sleep/Card";
import Card from "./Card";
import Menu from '../Menu/menu'
import Burger from "./Burger";
import SearchIcon from "../../assets/icons/Search";
import Play from "../../assets/icons/Play";
import Loader from "../Loader/Loader";
import { SERVER } from "../../constants/async";
import axios from "axios";
import styles from "../../styles/home";
import stylesList from "../../styles/sleep";
const Home = ({navigation}) =>{

    const[loading, setLoading] = useState(false)

    const [meditations,setMeditations] = useState([])
    const [originalSleep, setOriginalSleep] = useState([]);

    const [currentStep, setCurrentStep] = useState(null);

    const [searchText, setSearchText] = useState("");

    const getQuestions = async() =>{
      setLoading(true);
      try {
          const {data} = await axios.get(`${SERVER}/api/meditation`,
          { 
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
              },
          })
          setMeditations(data.docs);
          setOriginalSleep(data.docs);

          return data.docs
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

    useEffect(() =>{
      getQuestions()    
    },[])

    return (
      <SafeAreaView style={styles.conteiner}>
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
                <View style={styles.cardConteiner}>
                  <Text style={styles.cardTitle}>Get Back to Sleep</Text>
                  <View style={styles.contentBotton}>
                    <Text style={styles.contentBottonText}>10 min</Text>
                    <Play></Play>
                  </View>
                </View>
                <View style={styles.cardConteiner}>
                  <Text style={styles.cardTitle}>Get Back to Sleep</Text>
                  <View style={styles.contentBotton}>
                    <Text style={styles.contentBottonText}>10 min</Text>
                    <Play></Play>
                  </View>
                </View>
              </View>
  
              <View style={styles.buttonMore}>
                <Text style={styles.textMore}>New meditations</Text>
                <Pressable>
                  <Text style={styles.textButtonMore}>See all</Text>
                </Pressable>
              </View>
  
                <View style={styles.list}>
                    {meditations.slice(0,3).map((item, index) =>(
                      <Card title={item.title} options={item.mainCategory} audio={item.media} active={currentStep} index={index} setCurrentStep={setCurrentStep} />
                    ))}
                </View>

  
              <View style={styles.buttonMore}>
                <Text style={styles.textMore}>Your progress</Text>
                <Pressable>
                  <Text style={styles.textButtonMore}>View full</Text>
                </Pressable>
              </View>
  
              <Text style={styles.progressStatusTittle}>Weekly progress</Text>
              <Text style={styles.progressStatusText}>
                On average, you practiced mindfulness{"\n"}{" "}
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
            <Burger/>
            </>       
            :
              <Loader></Loader>
            }
          
        </ImageBackground>
        <Menu />
      </SafeAreaView>
    );
}

export default Home