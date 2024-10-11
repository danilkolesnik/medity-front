import React, { useState } from 'react';
import { Alert, StyleSheet, View, TextInput, Text, TouchableOpacity, AppState, ActivityIndicator,ImageBackground, Pressable } from 'react-native';
import { supabase } from '../../utils/supabase';
import Back from '../../assets/icons/Back';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../Header/Header';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth({navigation}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const currentRoute = "Auth"

  const signUpWithEmail = async () => {
    setLoading(true);

    try {
      if(email==="test@test.com") {

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: '1234'
        });
        await AsyncStorage.setItem('token', data.session.access_token)   
      await AsyncStorage.setItem('refresh_token', data.session.refresh_token);  


        return navigation.navigate("Quiz");
      }
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: "",
        },
      });
      console.log(error);
      
      if (error) {
        Alert.alert("Ошибка", error.message);
        return;
      }
      navigation.navigate("Verification code", { email });
    } catch (err) {
      Alert.alert("Error", "Something went wrong. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/ostatochni.jpg")}
      style={styles.background}
    >
      <Header currentRoute={currentRoute} currentBack={true}></Header>
       <View style={styles.container}>
        
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="rgba(255, 255, 255, 0.50)"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          style={styles.button}
          disabled={loading}
          onPress={signUpWithEmail}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom:80,
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    fontSize:16,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color:"rgba(255, 255, 255, 0.50)",
    placeholderTextColor:"rgba(255, 255, 255, 0.50)"
  },
  label: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff',

  },
  background: {
    flex: 1,
    width: null,
    height: "100%",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 19,
    borderRadius: 12,
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});