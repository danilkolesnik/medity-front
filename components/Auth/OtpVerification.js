import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet,ImageBackground } from "react-native";
import { useRoute,useNavigation } from '@react-navigation/native';
import { supabase } from '../../utils/supabase';
const OtpVerification = () => {
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params;

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: "signup",
      });

      if (error) {
        Alert.alert("Ошибка", error.message);
        return;
      }
      
      navigation.navigate("Home");
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
      />
      <Button
        title={loading ? "Verifying..." : "Verify"}
        onPress={handleVerifyOtp}
        disabled={loading}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    color:'#fff'
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.29)',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  background:{
    flex: 1, 
    width: null, 
    height: "100%"
  },
});

export default OtpVerification;
