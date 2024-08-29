import { useState,useEffect } from "react";
import { ImageBackground, View, Text, Pressable,ScrollView,Platform,Button  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Switch from "../../ui/switch";
import Header from "../Header/Header";
import TimePicker from "./TimePicker";
import styles from "../../styles/notifications";

import NotificationService from "../../utils/notification-services";

const Notifications = () =>{

    const [isEnabled, setIsEnabled] = useState(true);
    const [isEnabledTwo, setIsEnabledTwo] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };

    useEffect(() =>{
        console.log(selectedTime);
    },[selectedTime])

    return(
        <View
            style={{ flex: 1, width: '100%', height: '100%',justifyContent:"center" }}
        >
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            <View style={styles.conteiner}>
                <Header/>

                <View style={styles.textConteiner}>
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

                <View style={styles.textConteiner}>
                    <View style={styles.titleConteiner}>
                        <Text style={styles.title}>Everyday notifications</Text>
                        <Text style={styles.text}>Get notification everyday.</Text>
                    </View>
                    <Switch
                        toggleSwitch={toggleSwitchTwo}
                        active={isEnabledTwo}
                    />
                </View>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </Pressable>
                
            </View>
            <NotificationService></NotificationService>
            </ImageBackground>
        </View>
    )
}
export default Notifications