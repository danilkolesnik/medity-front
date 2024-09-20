import { useState,useEffect } from "react";
import { ImageBackground, View, Text, Pressable,Modal,StyleSheet  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Switch from "../../ui/switch";
import Header from "../Header/Header";
import TimePicker from "./TimePicker";
import Loader from "../Loader/Loader";
import styles from "../../styles/notifications";
import AsyncStorage from '@react-native-async-storage/async-storage'

import NotificationService, { registerForPushNotificationsAsync, scheduleDailyNotification, sendPushNotification } from '../../utils/notification-services';

const Notifications = () =>{

    const [loading, setLoading] = useState(false)
    const currentRoute = "Profile"

    const [active,setModalVisible] = useState(false)

    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };
    
    const handleSendNotification = async () => {
        const token = await registerForPushNotificationsAsync();
        console.log(token);
        
        // await sendPushNotification(token);
    };

    const getNotifications = async() =>{
        setLoading(true)
        try {
            const selectedTime = await AsyncStorage.getItem('selectedTime')
            const hour = await AsyncStorage.getItem('hour')
            const minute = await AsyncStorage.getItem('minute')
            const everyday =  await AsyncStorage.getItem('everyday')
            const meditation = await AsyncStorage.getItem('meditation')

            setSelectedTime(selectedTime)

            setHour(hour || '00')
            setMinute(minute || '00')

            setIsEnabled(meditation === 'true');
            setIsEnabledTwo(everyday === 'true');

            setLoading(false)
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
        
    }

    const saveNotifications = async() =>{

        const time = selectedTime.split(':')

        await AsyncStorage.setItem('selectedTime', selectedTime)

        await AsyncStorage.setItem('hour', time[0])
        await AsyncStorage.setItem('minute', time[1])

        await AsyncStorage.setItem('meditation', isEnabled.toString());
        await AsyncStorage.setItem('everyday', isEnabledTwo.toString());

        if(isEnabled || isEnabledTwo){
            await scheduleDailyNotification(parseInt(time[0], 10),parseInt(time[1], 10), true);
            setModalVisible(true)
            return
        }
        await scheduleDailyNotification(parseInt(time[0], 10),parseInt(time[1], 10), false);
        setModalVisible(true)
    }

    useEffect(() =>{
        getNotifications()
    },[])

    return(
        <View
            style={{ flex: 1, width: '100%', height: '100%',justifyContent:"center" }}
        >
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            {!loading ? 
                 <View style={styles.conteiner}>
                 <Header currentRoute={currentRoute}/>
 
                 <View style={[styles.textConteiner,{paddingTop:36}]}>
                     <View style={styles.titleConteiner}>
                         <Text style={styles.title}>Meditation reminders</Text>
                         <Text style={styles.text}>Daily scheduled reminder</Text>
                     </View>
                     <Switch
                        toggleSwitch={toggleSwitch}
                        active={isEnabled}
                    />
                 </View>
                 
                 <SafeAreaView>
                     <TimePicker onTimeChange={handleTimeChange} hour={hour} minute={minute}/>
 
                 </SafeAreaView>
 
                 <View style={[styles.textConteiner, {borderColor: '#F1F5F9',borderTopWidth: 1}]}>
                     <View style={styles.titleConteiner}>
                         <Text style={styles.title}>Everyday notifications</Text>
                         <Text style={styles.text}>Get notification everyday.</Text>
                     </View>
                     <Switch
                         toggleSwitch={toggleSwitchTwo}
                         active={isEnabledTwo}
                     />
                 </View>
                 <Pressable 
                     style={styles.button}
                     onPress={() => saveNotifications()}
                 >
                     <Text style={styles.buttonText}>Save</Text>
                 </Pressable>
                 <NotificationService />
             </View>
             : <Loader></Loader>
            }

            <Modal
                animationType="fade"
                transparent={true}
                visible={active}
                onRequestClose={() => {
                
                setModalVisible(!active);
            }}>
            <View style={stylesModal.centeredView}>
                <View style={stylesModal.modalOverlay} />
                <View style={stylesModal.modalView}>
                    <Text style={stylesModal.modalText}>Alert settings are configured</Text>
                    <View
                        style={{
                            flexDirection:"row",
                            justifyContent:'space-between',
                            width:'100%'
                        }}
                    >
                        
                        <Pressable
                            style={[stylesModal.button]}
                            onPress={() => setModalVisible(false)}
                           >
                                <Text style={stylesModal.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                   
                </View>
            </View>
        </Modal>
           
            </ImageBackground>
        </View>
    )
}

const stylesModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalOverlay: {
        position: 'absolute',    
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
       
        backgroundColor: '#2D2D2D',
        
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width:300,   
        borderRadius:20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
    },
    button: {
        width:'100%',
        backgroundColor: '#282828',
        paddingVertical:12,
        borderRadius:12
    },
    buttonOpen: {

    },
    buttonClose: {

    },
    textStyle: {
        color: 'white',
        fontWeight:"600",
        fontSize: 16,
        fontFamily:"Urbanist-Bold",
        textAlign: 'center',

    },
    modalText: {
        fontFamily:"Urbanist-Bold",
        fontSize: 16,
        fontWeight:'600',
        textAlign: 'center',
        color: 'white',
        paddingVertical:24
    },
});


export default Notifications


