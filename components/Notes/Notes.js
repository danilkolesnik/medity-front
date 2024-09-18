import { useState, useEffect,useCallback } from "react";
import { ImageBackground, View, Text, Pressable, ScrollView, TextInput, StyleSheet } from "react-native";
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "../../styles/notes";
import { SERVER } from "../../constants/async";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Add from "../../assets/icons/Add";
import Edit from "../../assets/icons/Edit";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const currentRoute = "Profile";

  const navigation = useNavigation();


  const addNote = async () => {
    try {
        const userId = await AsyncStorage.getItem('userId');
        const { data } = await axios.post(`${SERVER}/api/note`, {
          userId:userId,
          title:"",
          content:""
        });

        navigation.navigate("Note", { title:"",content: "", userId:userId,id:data.doc.id })
     
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const getNotes = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem('userId');
      const { data } = await axios.get(`${SERVER}/api/note?where[userId][equals]=${userId}`);
      setNotes(data.docs);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
        getNotes();
    }, [])
);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center"
      }}
    >
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
        resizeMode="repeat"
      >
       {!loading ? 
        <>
          <ScrollView
          style={{
            position:"relative",
            height:'100%',
            width: '100%',
          }}
        >
        <Header currentRoute={currentRoute} />
        {notes.length === 0 ? (
          <View style={styles.notesContainer}>
            <Text style={styles.noteCaption}>Create your first note!</Text>
          </View>
        ) : (
          <View
            style={{
              gap:20,
              paddingLeft:24,
              paddingRight:24,
              paddingTop:64,
            }}
          >
            {notes.map((note, index) => (
              <View style={styles.noteContent} key={index }>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Pressable
                  style={styles.buttonEdit}
                  onPress={() =>  navigation.navigate("Note", { title:note.title,content: note.content, userId:note.userId,id:note.id })}
                >
                  <Edit/>
                </Pressable>
              </View>
            ))}
          </View>
        )}
        </ScrollView>
        

        <View style={styles.bottomNavContainer}>
          <Pressable onPress={() => addNote()}>
            <Add />
          </Pressable>
        </View>
        </>
        : <Loader></Loader>
      }
        
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Notes;
