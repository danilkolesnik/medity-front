import { useState, useEffect } from "react";
import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    Pressable,
} from "react-native"
import Header from "../Header/Header";
import Charts from "./Charts";
import Menu from "../Menu/menu";
import ModalProfile from "./Modal";
import { ProgressBar} from 'react-native-paper';

import Rigth from "../../assets/icons/Rigth";
import Loader from "../Loader/Loader";

import { supabase } from "../../utils/supabase";
import aggregateListeningProgress from "../../utils/aggregateListeningProgress";

import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from "../../styles/profile";
import stylesProggersBar from "../../styles/home";
import { floorToOneDecimals } from "../../utils/math";

const Profile = ({navigation}) =>{

    const [loading,setLoading] = useState(false)

    const currentRoute = "Home"

    const [activeTab, setActiveTab] = useState('week')
    const [userId, setUserId] = useState()

    const [stats9Days, setStats9Days] = useState(null);
    const [stats7Days, setStats7Days] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);
    

    const getUser = async() =>{
      try {
        const token = await AsyncStorage.getItem('token')
        const { data: { user } } = await supabase.auth.getUser(token)

        if(user){
          await AsyncStorage.setItem('userId', user.id)
          return user
        }
        return user

      } catch (error) {
        
      }
    }

    const logOut = async() =>{
      try {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('userId')
        await supabase.auth.signOut()
        navigation.navigate("Introduction")
      } catch (error) {
        
      }
    }

    const deleteUser = async() =>{
      try {
        const userId = await AsyncStorage.setItem('userId', user.id)

        await supabase
          .from('profiles')
          .delete()
          .eq('id', userId)

        await supabase.auth.admin.deleteUser(userId)
      } catch (error) {
        
      }
    }

    const fetchStats = async () => {
      const currentDate = new Date();
      const stats9Dayss = await aggregateListeningProgress('9days', currentDate);
      const stats7Dayss = await aggregateListeningProgress('7days', currentDate);

      setStats9Days(floorToOneDecimals(stats9Dayss.averageSecondsPerDay));
      setStats7Days(floorToOneDecimals(stats7Dayss.averageSecondsPerDay));

      return true
    };

    useEffect(() =>{
      setLoading(true);
      Promise.all([fetchStats(), getUser()])
        .then(([questions, userData]) =>{  
           if(questions && userData) setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
        });
    },[])


    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={[styles.background]}
            >
              {!loading ?
                <ScrollView>
                <Header currentRoute={currentRoute} currentBack={true}></Header>
                <Text style={styles.progressTitle}>Progress</Text>

                <View style={styles.tabContent}>
                    <Pressable onPress={() => setActiveTab("day")}>
                        <Text style={[styles.tabText, activeTab === "day" ? {backgroundColor: "#FFFFFFA8", color:'#535353'} : '']}>
                            Day
                        </Text>
                    </Pressable>
                  
                    <Pressable onPress={() => setActiveTab('week')}>
                        <Text style={[styles.tabText, activeTab === 'week' ? {backgroundColor: "#FFFFFFA8", color:'#535353'} : '']}>
                            Week
                        </Text>
                    </Pressable>
                   
                    <Pressable onPress={() => setActiveTab('month')}>
                        <Text style={[styles.tabText, activeTab === 'month' ? {backgroundColor: "#FFFFFFA8", color:'#535353'} : '']}>
                            Month
                        </Text>
                    </Pressable>
                    
                </View>

                <Charts activeData={activeTab} />

                <View
                    style={{
                        paddingHorizontal:24,
                        paddingTop:24
                    }}
                >
                <Text style={stylesProggersBar.progressStatusTittle}>Weekly progress</Text>
              <Text style={stylesProggersBar.progressStatusText}>
                On average, you practiced mindfulness{"\n"}{" "}
                <Text style={{ fontWeight: "700" }}>4%</Text> more this week
                compared to last.
              </Text>
                <View
                 
                >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: 12,
                  }}
                >
                  <Text style={[stylesProggersBar.progressTitle]}>{stats9Days}</Text>
                  <View
                    style={{
                      paddingLeft: 6,
                    }}
                  >
                    <Text style={stylesProggersBar.progressText}>min/day</Text>
                    <Text style={[stylesProggersBar.progressText, { fontSize: 10 }]}>
                      This week
                    </Text>
                  </View>
                </View>
                <ProgressBar
                  progress={stats9Days}
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
                  paddingBottom:46
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
                  <Text style={stylesProggersBar.progressTitle}>{stats7Days}</Text>
                  <View
                    style={{
                      paddingLeft: 6,
                    }}
                  >
                    <Text style={stylesProggersBar.progressText}>min/day</Text>
                    <Text style={[stylesProggersBar.progressText, { fontSize: 10 }]}>
                      This week
                    </Text>
                  </View>
                </View>
                <ProgressBar     
                   progress={stats7Days}
                  color="#BBBBBB"
                  style={{
                    backgroundColor: "#565656",
                    height: 8,
                    borderRadius: 4,
                  }}
                />
              </View>
                </View>

                <View style={styles.goalContent}>
                  <View>
                    <Text style={styles.goalText}>Goal streak</Text>
                    <Text style={[styles.progressTitle,
                    { 
                      paddingLeft:0,
                      paddingTop:0
                    }]}>3 days in a row</Text>
                  </View>
                  <View
                    style={{
                      flexDirection:'row',
                      gap:3
                    }}
                  >
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                    <View style={styles.line}></View>
                  </View>
                </View>

                <View
                    style={{
                        paddingHorizontal:24
                    }}
                >
                    <View
                       style={{
                        borderColor: '#F1F5F9',
                        borderTopWidth: 1,
                      }}
                    >
                        <Pressable 
                          style={styles.linkButton}
                          onPress={() => navigation.navigate("Notifications")}
                        >
                            <Text style={styles.linkText}>Notifications</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable 
                          style={styles.linkButton}
                          onPress={() => navigation.navigate("Notes")}
                        >
                            <Text style={styles.linkText}>Notes</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable 
                          style={styles.linkButton}
                          onPress={() => navigation.navigate("Personal Data")}
                        >
                            <Text style={styles.linkText}>Personal data</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable 
                          style={styles.linkButton}
                          onPress={() => navigation.navigate("Terms of use")}
                        >
                            <Text style={styles.linkText}>Terms of use</Text>
                            <Rigth></Rigth>
                        </Pressable>
                    </View>

                    <View
                      style={{
                        borderColor: '#F1F5F9',
                        borderTopWidth: 1,
                        paddingBottom:80
                      }}
                    >
                        <Pressable 
                          style={styles.linkButton}
                          onPress={() => logOut()}
                        >
                            <Text style={styles.linkText}>Log out</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable 
                          style={styles.linkButton}
                          onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.linkText}>Delete my account</Text>
                            <Rigth></Rigth>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
              : <Loader></Loader>  
            }
          
            <ModalProfile active={modalVisible} setModalVisible={setModalVisible} deleteUser={deleteUser}></ModalProfile>
            <Menu></Menu>
            </ImageBackground>
        </>
    )
}

export default Profile