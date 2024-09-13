import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet,ImageBackground,ActivityIndicator,TouchableOpacity,Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { supabase } from '../../utils/supabase'

import AsyncStorage from '@react-native-async-storage/async-storage'

const OtpVerification = () => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;
  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: "email",
      });

      if (error) {
        Alert.alert("Ошибка", error.message);
        return;
      }
      await AsyncStorage.setItem('token', data.session.access_token)     
      navigation.navigate("Quiz");

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
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your Code"
        value={otpCode}
        onChangeText={setOtpCode}
        keyboardType="numeric"
        placeholderTextColor="rgba(255, 255, 255, 0.50)"
      />

        <TouchableOpacity
          style={styles.button}
          disabled={loading}
          onPress={handleVerifyOtp}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Verify</Text>
          )}
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: null,
    height: "100%",
  },
  input: {
    height: 48,
    borderWidth: 1,
    fontSize:16,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color:"rgba(255, 255, 255, 0.50)",
    placeholderTextColor:"rgba(255, 255, 255, 0.50)",
    width:'100%',
    marginBottom:20
  },

  button: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 19,
    borderRadius: 12,
    alignItems: 'center',
    width:'100%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default OtpVerification;
