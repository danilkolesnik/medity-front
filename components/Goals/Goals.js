import { useState, useEffect } from "react";
import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    FlatList,
    TextInput,
    Pressable,
    Image
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Welness from "../../assets/icons/Welness";
import WelnessSleep from "../../assets/icons/WelnessSleep";
import Edit from "../../assets/icons/Edit";
import Header from "../Header/Header";
import Switch from "../../ui/switch";

import styles from "../../styles/goals";
const Goals = () =>{

    const currentRoute = 'Home'

    const[activeSleep, setActiveSleep] = useState(false)
    const[activeStress, setActiveStress] = useState(false)
    const[activeMind, setActiveMind] = useState(false)

    const toggleSwitch = () => setActiveSleep(previousState => !previousState);
    const toggleSwitchTwo = () => setActiveStress(previousState => !previousState);
    const toggleSwitchThree = () => setActiveMind(previousState => !previousState);

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={[styles.background]}
            >
            <ScrollView style={styles.content}>
                <Header currentRoute={currentRoute}></Header>
                <View style={[styles.topContent, {paddingTop:54}]}>
                    <View style={styles.topContent}>                     
                        <Welness/>
                        <Text style={styles.goalsTitle}>Mindfulness</Text>
                    </View>
                    <View style={styles.topContent}>                                           
                        <Text style={[styles.goalsTitle, {paddingRight:16}]}>15 min / day</Text>
                        <Edit/>
                    </View>
                </View>
                <View style={[styles.topContent,{paddingTop:8, paddingBottom:28,borderColor: '#F1F5F9',borderBottomWidth: 1}]}>
                    <View style={styles.topContent}>                     
                        <WelnessSleep/>
                        <Text style={styles.goalsTitle}>Sleep</Text>
                    </View>
                    <View style={styles.topContent}>                                           
                        <Text style={[styles.goalsTitle, {paddingRight:16}]}>15 min / day</Text>
                        <Edit/>
                    </View>
                </View>

                <Text style={styles.title}>Active program</Text>

                <View>
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:"center",
                            justifyContent:'space-between'
                        }}
                    >
                        <View
                            style={{ 
                                flexDirection:'row', 
                                alignItems:"center",
                            }}
                        >
                        <Image source={require("../../assets/images/Rectangle769.png")}/>
                        <View
                            style={{
                                paddingLeft:12
                            }}
                        >
                            <Text style={[styles.goalsTitle,{fontSize:18,paddingBottom:2}]}>Better Sleep</Text>
                            <Text style={[styles.goalsTitle, {width:160}]}>Daily content to support your sleep.</Text>
                        </View>
                        </View>
                       <Switch
                        toggleSwitch={toggleSwitch}
                        active={activeSleep}
                       />
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:"center",
                            justifyContent:'space-between',
                            paddingBottom:16,
                            paddingTop:16
                        }}
                    >
                        <View
                            style={{ 
                                flexDirection:'row', 
                                alignItems:"center",
                            }}
                        >
                        <Image source={require("../../assets/images/Rectangle2.png")}/>
                        <View
                            style={{
                                paddingLeft:12
                            }}
                        >
                            <Text style={[styles.goalsTitle,{fontSize:18,paddingBottom:2}]}>Reduce Stress </Text>
                            <Text style={[styles.goalsTitle, {width:160}]}>Daily content to cope with daily challenges.</Text>
                        </View>
                        </View>
                       <Switch
                        toggleSwitch={toggleSwitchTwo} 
                        active={activeStress}
                       />
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:"center",
                            justifyContent:'space-between'
                        }}
                    >
                        <View
                            style={{ 
                                flexDirection:'row', 
                                alignItems:"center",
                            }}
                        >
                        <Image source={require("../../assets/images/Rectangle3.png")}/>
                        <View
                            style={{
                                paddingLeft:12
                            }}
                        >
                            <Text style={[styles.goalsTitle,{fontSize:18,paddingBottom:2}]}>Declutter Mind</Text>
                            <Text style={[styles.goalsTitle, {width:160}]}>Guided and unguided meditation selection.</Text>
                        </View>
                        </View>
                       <Switch
                        toggleSwitch={toggleSwitchThree}
                        active={activeMind}
                       />
                    </View>
                </View>
               

            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Goals