import { useState, useEffect } from "react";
import { 
    View,
    ImageBackground,
    TextInput,
    Text,
    Pressable,
    Modal,
    StyleSheet
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from '@react-navigation/native';
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import BirthdayCard from "./BirthdayCard";
import Male from "../../assets/icons/Male";
import Female from "../../assets/icons/Female";

import { supabase } from "../../utils/supabase";

import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from "../../styles/personalData";

const PersonalData = () =>{

    const[loading, setLoading] = useState(false)

    const currentRoute = "Profile"

    const[fullName, setFullName] = useState('')
    const[email, setEmail] = useState('')
    const[birthday, setBirthday] = useState('')
    const[gender, setGender] = useState('')

    const [active,setModalVisible] = useState(false)

    const getUser = async() =>{
        setLoading(true)
        try {
          const token = await AsyncStorage.getItem('token')
          const { data: { user } } = await supabase.auth.getUser(token)

          const userId = await AsyncStorage.getItem('userId')

          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single()
          
        console.log(data);
        

          setFullName(data.full_name || '')
          setEmail(data.email || '')
          setGender(data.gender || '')
          setBirthday(data.birthday || '')
            
          setLoading(false)
          return user
          
        } catch (error) {
          
        }
    }

    const saveData = async() =>{
        try {   
            const userId = await AsyncStorage.getItem('userId')

            const {data, error} = await supabase
                .from('profiles')
                .update({ full_name: fullName, birthday:birthday, email:email, gender:gender})
                .eq('id', userId) 

            await supabase.auth.updateUser({email: email});

            setModalVisible(true)
                   
        } catch (error) {
            
        } 
    }

    useEffect(() =>{
        getUser()
    },[])

    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            <Header currentRoute={currentRoute} currentBack={true}></Header>
            {!loading ? 
                 <View style={styles.content}>
                    <View style={styles.inputContent}>
                        <Text style={styles.label}>Full name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setFullName}
                            value={fullName}
                            placeholderTextColor="#fff"
                            placeholder="Enter full name..."
                        />
                    </View>
                    <View style={styles.inputContent}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholderTextColor="#fff"
                            placeholder="Enter email..."
                        />  
                    </View>
                    <View style={{paddingTop:12}}>
                        <Text style={styles.label}>Birthday</Text>
                        <BirthdayCard birthdayDate={birthday} setBirthday={setBirthday}></BirthdayCard>
                    </View>

                    <View style={{paddingTop:12,paddingRight:18}}>
                        <Text style={styles.label}>Gender</Text>
                        <View
                            style={{
                                flexDirection:'row',
                                gap:16
                            }}
                        >
                            <Pressable 
                                style={[
                                    styles.buttonGender,
                                    gender === 'Male' ? { backgroundColor: '#1A1A1A' } : null
                                  ]}
                                onPress={() => setGender('Male')}
                            >
                                <Male active={gender}></Male>
                                <Text style={[
                                    styles.genderText,
                                    gender === 'Male' ? { color: '#808080' } : null
                                ]}>Male</Text>
                            </Pressable>
                            <Pressable 
                                style={[
                                    styles.buttonGender,
                                    gender === 'Female' ? { backgroundColor: '#1A1A1A' } : null
                                ]}
                                onPress={() => setGender('Female')}
                            >
                                <Female active={gender}></Female>
                                <Text style={[
                                    styles.genderText,
                                    gender === 'Female' ? { color: '#808080' } : null

                                ]}>Female</Text>
                            </Pressable>
                        </View>
                        
                    </View>
                
                    <Pressable
                        style={styles.button}
                        onPress={() => saveData()}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </Pressable>
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
                    <Text style={stylesModal.modalText}>Data updated successfully!</Text>
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
        </>
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

export default PersonalData