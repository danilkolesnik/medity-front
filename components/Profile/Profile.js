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
import Header from "../Header/Header";
import Charts from "./Charts";
import { ProgressBar} from 'react-native-paper';

import { SafeAreaView } from "react-native-safe-area-context";

import Rigth from "../../assets/icons/Rigth";

import styles from "../../styles/profile";

import stylesProggersBar from "../../styles/home";


const Profile = () =>{

    const [activeTab, setActiveTab] = useState(1)

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >

            <ScrollView>
                <Header></Header>
                <Text style={styles.progressTitle}>Progress</Text>

                <View style={styles.tabContent}>
                    <Pressable onPress={() => setActiveTab(1)}>
                        <Text style={[styles.tabText, activeTab === 1 ? {backgroundColor: "#FFFFFFA8", color:'#535353'} : '']}>
                            Day
                        </Text>
                    </Pressable>
                  
                    <Pressable onPress={() => setActiveTab(2)}>
                        <Text style={[styles.tabText, activeTab === 2 ? {backgroundColor: "#FFFFFFA8", color:'#535353'} : '']}>
                            Week
                        </Text>
                    </Pressable>
                   
                    <Pressable onPress={() => setActiveTab(3)}>
                        <Text style={[styles.tabText, activeTab === 3 ? {backgroundColor: "#FFFFFFA8", color:'#535353'} : '']}>
                            Month
                        </Text>
                    </Pressable>
                    
                </View>

                <Charts activeData={activeTab}></Charts>

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
                <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: 12,
                  }}
                >
                  <Text style={[stylesProggersBar.progressTitle]}>9</Text>
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
                  <Text style={stylesProggersBar.progressTitle}>7</Text>
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
                  progress={0.9}
                  color="#BBBBBB"
                  style={{
                    backgroundColor: "#565656",
                    height: 8,
                    borderRadius: 4,
                  }}
                />
              </View>
                </View>

                <View
                    style={{
                        paddingHorizontal:24
                    }}
                >
                    <View>
                        <Pressable style={styles.linkButton}>
                            <Text style={styles.linkText}>Notifications</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable style={styles.linkButton}>
                            <Text style={styles.linkText}>My favorite</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable style={styles.linkButton}>
                            <Text style={styles.linkText}>Personal data</Text>
                            <Rigth></Rigth>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Profile