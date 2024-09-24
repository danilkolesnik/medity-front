import { useState, useEffect,useCallback } from "react";
import { ImageBackground, View, Text, Pressable, ScrollView, TextInput, StyleSheet,Modal } from "react-native";
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
    <>
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
        resizeMode="repeat"
      >
       {!loading ? 
        <>
         <Header currentRoute={currentRoute} currentBack={true}/>
          <ScrollView
          style={{
            position:"relative",
            height:'100%',
            width: '100%',
          }}
        >
        {notes.length != 0 &&  (
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
                <Text style={[styles.noteTitle,{fontSize:18,paddingBottom:5, fontWeight:'600',fontFamily:"Urbanist-Bold"}]}>{note.title}</Text>
                <Text style={styles.noteTitle}>{note.content}</Text>
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
        
        {notes.length === 0 && <View style={styles.notesContainer}>
            <Text style={styles.noteCaption}>Create your first note!</Text>
          </View>}
        <View style={styles.bottomNavContainer}>
          <Pressable onPress={() => addNote()}>
            <Add />
          </Pressable>
        </View>
        </>
        : <Loader></Loader>
      }
        
      </ImageBackground>
    </>
  );
};

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

export default Notes;
