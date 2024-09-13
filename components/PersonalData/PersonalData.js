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

            await supabase
                .from('profiles')
                .update({ full_name: fullName, birthday:birthday, email:email, gender:gender})
                .eq('id', userId)

            await supabase.auth.updateUser({email: email});
            
            
        } catch (error) {
            
        } 
    }

    useEffect(() =>{
        getUser()

    },[])

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            <Header currentRoute={currentRoute}></Header>
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
                        <BirthdayCard birthdayDate={birthday}></BirthdayCard>
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
                                style={styles.buttonGender}
                                onPress={() => setGender('Male')}
                            >
                                <Male></Male>
                                <Text style={styles.genderText}>Male</Text>
                            </Pressable>
                            <Pressable 
                                style={styles.buttonGender}
                                onPress={() => setGender('Female')}
                            >
                                <Female></Female>
                                <Text style={styles.genderText}>Female</Text>
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
        </SafeAreaView>
    )
}

export default PersonalData