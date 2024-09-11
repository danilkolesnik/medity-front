import { ImageBackground, View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/Header";
import styles from "../../styles/notes";
import Next from "../../assets/icons/Next";
import Prev from "../../assets/icons/Prev";
import Like from "../../assets/icons/Like";
import { useState } from "react";
import { useNavigation  } from '@react-navigation/native';
import Add from "../../assets/icons/Add";

const Notes = () => {

  return (
    <SafeAreaView
            style={{ 
                flex: 1,
                width: '100%', 
                height: '100%', 
                justifyContent:"center" 
            }}
    >
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
        resizeMode="repeat"     
      >
        <Header />
        <View style={styles.notesContainer}>
            <Text style={styles.noteCaption}>Create your first note!</Text>
        </View>
        <View style={styles.bottomNavContainer}>
        </View>
        <View style={styles.bottomNavContainer}>
          <Pressable 
            // onPress={() => navigation.navigate("Notifications")}
            //todo: create handler + admin panel fetch;
          >
            <Add />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Notes;