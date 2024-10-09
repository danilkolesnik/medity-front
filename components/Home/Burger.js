import { useState } from "react";
import { View,Text,Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native';
import BurgerIcon from "../../assets/icons/Burger";
import Close from "../../assets/icons/Close";
import Rigth from "../../assets/icons/Rigth";
import styles from "../../styles/burger"

const Burger = () =>{

    const [active, setActive] = useState(false)

    const navigation = useNavigation();

    return(
        <SafeAreaView style={active ? styles.conteinerActive : styles.conteiner}>
            {!active && 
                <Pressable
                    onPress={() => setActive(true)}
                >
                    <BurgerIcon/>
                </Pressable>      
            } 
            <View style={active ? styles.contentActive : styles.content}>
                <View style={styles.topContent}>
                    <Text style={styles.title}>Menu</Text>

                    <Pressable 
                        style={styles.icon}
                        onPress={() => setActive(false)}
                    >
                        <Close/>
                    </Pressable>

                </View>

                <Pressable 
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("My favorite meditations")
                        setActive(false)
                    }}
                >
                    <Text style={styles.buttonText}>My favorite meditations</Text>
                    <Rigth></Rigth>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={() => {                     
                        navigation.navigate("Goals")
                        setActive(false)
                    }}
                >
                    <Text style={styles.buttonText}>My goals</Text>
                    <Rigth></Rigth>
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={() =>{
                        navigation.navigate("New meditations")
                        setActive(false)
                    }}
                >
                    <Text style={styles.buttonText}>New meditations</Text>
                    <Rigth></Rigth>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}

export default Burger