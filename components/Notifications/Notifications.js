import { useState,useEffect } from "react";
import { ImageBackground, View, Text, Pressable,ScrollView,Platform,Button  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Switch from "../../ui/switch";
import Header from "../Header/Header";
import TimePicker from "./TimePicker";
import styles from "../../styles/notifications";

import NotificationService, { registerForPushNotificationsAsync, scheduleDailyNotification, sendPushNotification } from '../../utils/notification-services';

const Notifications = () =>{

    const currentRoute = "Profile"

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
        await sendPushNotification(token);
    };


    const saveNotifications = async() =>{
        const time = selectedTime.split(':')
        if(isEnabled || isEnabledTwo){
            await scheduleDailyNotification(parseInt(time[0], 10),parseInt(time[1], 10), true);
            return
        }
        await scheduleDailyNotification(parseInt(time[0], 10),parseInt(time[1], 10), false);
    }

    return(
        <View
            style={{ flex: 1, width: '100%', height: '100%',justifyContent:"center" }}
        >
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
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
                    <TimePicker onTimeChange={handleTimeChange} />

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
            </ImageBackground>
        </View>
    )
}
export default Notifications