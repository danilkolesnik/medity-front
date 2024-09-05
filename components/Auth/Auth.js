import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ImageBackground
} from "react-native";
import Apple from '../../assets/icons/Apple'
import Email from '../../assets/icons/Email'
import Google from "../../assets/icons/Google";
import styles from "../../styles/auth";
import GoogleButton from "./GoogleButton";
import { AppleButton } from "./AppleButton";
import { supabase } from '../../utils/supabase';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'

export default function Auth({navigation}) {

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '209560641110-99ufv5fd629ku37f0p8r4rmcqd6rkn30.apps.googleusercontent.com',
    iosClientId: '209560641110-v08h2fak57ll2mvm2lj6bi1njum2o7pe.apps.googleusercontent.com',
    offlineAccess: true, // If you want to access Google APIs on behalf of the user from your server
    forceCodeForRefreshToken: true,
  })

  return (
    <View
      style={{ flex: 1, width: '100%', height: '100%',justifyContent:"center" }}
    >
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
      >
        <View style={{
          flex:1
        }}>
          <View
            style={styles.conteiner}
          >
            <Text
              style={styles.title}
            >
              MEDITY
            </Text>
            <Text
               style={styles.text}
            >
              Find Your Inner Peace.
            </Text>

        <View
          style={styles.buttonConteiner}
        >
          
          <AppleButton/>

            <Pressable onPress={async () => {
                  try {
                    await GoogleSignin.hasPlayServices()
                    const userInfo = await GoogleSignin.signIn()
                    if (userInfo.idToken) {
                      const { data, error } = await supabase.auth.signInWithIdToken({
                        provider: 'google',
                        token: userInfo.idToken,
                      })
                      console.log(error, data)
                    } else {
                      throw new Error('no ID token present!')
                    }
                  } catch (error) {
                    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                      // user cancelled the login flow
                    } else if (error.code === statusCodes.IN_PROGRESS) {
                      // operation (e.g. sign in) is in progress already
                    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                      // play services not available or outdated
                    } else {
                      // some other error happened
                    }
                  }
                }}>
              <View
                style={styles.button()} 
              >
                <Google/>
                <Text
                  style={styles.buttonText()}
                >
                  Continue with Google
                </Text>
              </View>
            </Pressable>
  
            <Pressable
               onPress={() => navigation.navigate("EmailAuth")}
            >
              <View
                style={styles.button(true)}
              >
                <Email/>
                <Text
                  style={styles.buttonText(true)}
                >
                  Continue with email
                </Text>
              </View>
            </Pressable>
            <Text style={styles.textSingUp}>Not a member?{" "}
              <Text style={{
                color:"#fff",
                paddingLeft:"5px",
                textDecorationLine: 'underline',
              }}>
               Sign Up
              </Text>
            </Text>
        </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}