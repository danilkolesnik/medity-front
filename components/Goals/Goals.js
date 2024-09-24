import { useState, useEffect,useCallback,useRef } from "react";
import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    TextInput,
    Pressable,
    Image,
    Keyboard 
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Welness from "../../assets/icons/Welness";
import WelnessSleep from "../../assets/icons/WelnessSleep";
import Edit from "../../assets/icons/Edit";
import Header from "../Header/Header";
import Switch from "../../ui/switch";
import Loader from "../Loader/Loader";  

import { supabase } from "../../utils/supabase";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from "../../styles/goals";
const Goals = () =>{

    const currentRoute = 'Home'
    
    const navigation = useNavigation()

    const[loading, setLoading] = useState(false)

    const[activeSleep, setActiveSleep] = useState(false)
    const[activeStress, setActiveStress] = useState(false)
    const[activeMind, setActiveMind] = useState(false)

    const[sleepText, setSleepText] = useState('')
    const[mindText, setMindText] = useState('')
    const [activeInput, setActiveInput] = useState(null); 

    const textInputRef = useRef(null);
    const textInputTwoRef = useRef(null);

    const[activeSleepEdit, setActiveSleepEdit] = useState(false)
    const[activeMindEdit, setActiveMindEdit] = useState(false)

    const toggleSwitch = () => setActiveSleep(previousState => !previousState);
    const toggleSwitchTwo = () => setActiveStress(previousState => !previousState);
    const toggleSwitchThree = () => setActiveMind(previousState => !previousState);

    const getGoals = async() =>{
        setLoading(true);
        try {
            const userId = await AsyncStorage.getItem('userId')

            const { data, error } = await supabase
                .from('goals')
                .select('*')
                .eq('user_id', userId)
                .single()

            setActiveSleep(data.better_sleep || false)
            setActiveStress(data.reduce_stress || false)
            setActiveMind(data.declutter_mind || false)

            setSleepText(data.sleep)
            setMindText(data.mindfulness)
            
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
        }
    }

    const saveGoals = async () => {
        try {
          const userId = await AsyncStorage.getItem('userId');
          if (!userId) {
            throw new Error('User ID not found');
          }

          const { data: existingGoals, error: selectError } = await supabase
            .from('goals')
            .select('*')
            .eq('user_id', userId);
      
          if (selectError) {
            throw selectError;
          }
      
          if (existingGoals.length > 0) {

            const { data, error } = await supabase
              .from('goals')
              .update({
                better_sleep: activeSleep,
                reduce_stress: activeStress,
                declutter_mind: activeMind,
                sleep: sleepText,
                mindfulness: mindText
              })
              .eq('user_id', userId);

      
            if (error) {
              throw error;
            }
      
          } else {
           
            const { data, error } = await supabase
              .from('goals')
              .insert([{
                user_id:userId,
                better_sleep: activeSleep,
                reduce_stress: activeStress,
                declutter_mind: activeMind,
                sleep: sleepText,
                mindfulness: mindText
              }]);
            
      
            if (error) {
              throw error;
            }
          }
        } catch (error) {
          console.error('Error saving goals:', error.message);
          Alert.alert('Error', 'Failed to save goals. Please try again.');
        }
    };

    useEffect(() => {
        saveGoals()
    },[activeSleep,activeStress,activeMind,sleepText,mindText])

    useEffect(() => {
        if (activeInput === 'mind') {
          textInputTwoRef.current?.focus();
        } else if (activeInput === 'sleep') {
          textInputRef.current?.focus();
        }
      }, [activeInput]);
    
      const handleMindEditPress = () => {
        setActiveInput('mind'); 
      };
    
      const handleSleepEditPress = () => {
        setActiveInput('sleep'); 
      };
    useFocusEffect(
        useCallback(() => {
            getGoals();
        }, [])
    );
    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={[styles.background]}
            >
            {!loading ? 
                <ScrollView style={styles.content}>
                <Header currentRoute={currentRoute}></Header>
                 
                <View style={[styles.topContent, { paddingTop: 54 }]}>
                <View style={styles.topContent}>
                    <Welness />
                    <Text style={styles.goalsTitle}>Mindfulness</Text>
                </View>
                <View style={styles.topContent}>
                <Text style={[styles.goalsTitle, { paddingRight: 16 }]}></Text>
                <TextInput
                    onChangeText={setMindText}
                    value={mindText}
                    style={[styles.goalsTitle, { paddingRight: 16 }]}
          
                    ref={textInputTwoRef}
                    onFocus={() => setActiveInput('mind')}
         
                    inputMode='text'
                />
                <Pressable onPress={() => handleMindEditPress()}>
                    <Edit />
                </Pressable>
            </View>
            </View>
            <View style={[styles.topContent, { paddingTop: 8, paddingBottom: 28, borderColor: '#F1F5F9', borderBottomWidth: 1 }]}>
            <View style={styles.topContent}>
                <WelnessSleep />
                <Text style={styles.goalsTitle}>Sleep</Text>
            </View>
            <View style={styles.topContent}>
                <TextInput
                    onChangeText={setSleepText}
                    value={sleepText}
                    style={[styles.goalsTitle, { paddingRight: 16 }]}
                    onFocus={() => setActiveInput('sleep')}
                    ref={textInputRef}
                    inputMode='text'
                />
                <Pressable onPress={() => handleSleepEditPress()}>
                <Edit />
                </Pressable>
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
                             <Text style={[styles.goalsTitle,{fontSize:18,paddingBottom:2}]}>Reduce Stress</Text>
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
                :
                <Loader></Loader>
            }
           
            </ImageBackground>
        </>
    )
}

export default Goals