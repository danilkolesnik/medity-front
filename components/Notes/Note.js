import { useState, useEffect } from "react";
import { ImageBackground, View, Text, Pressable, ScrollView, TextInput, StyleSheet } from "react-native";
import { SERVER } from "../../constants/async";
import { useNavigation,useRoute } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../assets/icons/Back";
import Delete from "../../assets/icons/Delete"
import Accept from "../../assets/icons/Accept"; 
import axios from "axios";

import styles from "../../styles/notes";
const Note = () =>{

    const route = useRoute();

    const {userId, title, content, id} = route.params;
  
    const navigation = useNavigation();

    const[titleNote, setTitleNote] = useState(title)
    const[contentNote, setContentNote] = useState(content)


    const updateNote = async () => {
        try {
            await axios.patch(`${SERVER}/api/note/${id}`, 
                {
                    title:titleNote,
                    content:contentNote
                }
            );

            navigation.navigate("Notes")
         
        } catch (error) {
          console.error('Error adding note:', error);
        }
    };

    const deleteNote = async () =>{
        try {
            await axios.delete(`${SERVER}/api/note/${id}`);

            navigation.navigate("Notes")
        } catch (error) {
            
        }
    }

    
    return(
        <SafeAreaView
            style={{
                flex: 1,
                width: '100%',
                height: '100%',        
            }}
        >
           <ImageBackground
             source={require("../../assets/images/ostatochni.jpg")}
             style={styles.background}
             resizeMode="repeat"
           >
            <SafeAreaView style={[styles.topContent, {paddingTop:20}]}>
                       <Pressable onPress={() => navigation.navigate("Notes")}>
                           <Back></Back>
                       </Pressable>
                       <View
                        style={{
                            flexDirection:"row",
                            alignItems:"center"
                        }}
                       >
                       <Pressable onPress={() => deleteNote()}>
                            <Delete></Delete>
                       </Pressable>
                        <Pressable 
                            style={{
                                paddingLeft:40
                            }}
                            onPress={() => updateNote()}
                        >
                            <Accept></Accept>
                       </Pressable>
                       </View>
                       
            </SafeAreaView>
            <View
                style={{
                    paddingLeft:24,
                    paddingRight:24
                }}
            >
                <View
                    style={{
                        paddingTop:24
                    }}
                >
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        value={titleNote}
                        onChangeText={(text) => setTitleNote(text)}
                        placeholder="Title"
                        placeholderTextColor="#949494"
                        style={styles.input}
                    />  
                </View>
                <View
                    style={{
                        paddingVertical:16
                    }}
                >
                    <Text style={styles.label}>Comment</Text>
                    <TextInput
                        multiline={true}
                        editable={true}
                        value={contentNote}
                        onChangeText={(text) => setContentNote(text)}
                        placeholder="Comment"
                        placeholderTextColor="#949494"
                        style={styles.input}
                    />  
                </View>
            </View>
           </ImageBackground>
        </SafeAreaView>
    )
}

export default Note