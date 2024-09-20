import {  View, Text, Pressable } from "react-native";
import { useRoute,useNavigation  } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import Chakras from '../../assets/icons/Chakras'
import Sleep from '../../assets/icons/Sleep' 
import Home from '../../assets/icons/Home' 
import Meditations from '../../assets/icons/Meditations' 
import Profile from '../../assets/icons/Profile' 

import styles from "../../styles/menu"; 
const Menu = () =>{

    const route = useRoute();
    const navigation = useNavigation();

    const isActive = (screenName) => route.name === screenName;
    return(
        <BlurView style={styles.conteiner} intensity={50} tint="light">
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate("Chakras")}
            >

                <Chakras/>
                <Text style={isActive("Chakras") ? styles.text(true) : styles.text()}>Chakras</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate("Sleep")}
            >
                <Sleep/>
                <Text style={isActive("Sleep") ? styles.text(true) : styles.text()}>Sleep</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
            >
                <Home/>
                <Text style={isActive("Home") ? styles.text(true) : styles.text()}>Home</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate("Meditations")}
            >
                <Meditations/>
                <Text style={isActive("Meditations") ? styles.text(true) : styles.text()}>Meditations</Text>
            </Pressable>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate("Profile")}
            >
                <Profile/>
                <Text style={isActive("Profile") ? styles.text(true) : styles.text()}>Profile</Text>
            </Pressable>
        </BlurView>
    )
}

export default Menu