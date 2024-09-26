import { useState, useEffect } from "react";
import { 
    View,
    ImageBackground,
    TextInput,
    Text,
    Pressable
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
                .update({ full_name: fullName, birthday, email, gender})
                .eq('id', userId) 

            await supabase.auth.updateUser({email});
                   
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
           
            </ImageBackground>
        </>
    )
}

export default PersonalData