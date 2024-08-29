import React, { useState } from "react";
import { View, Text, Pressable, ImageBackground, Platform } from "react-native";
import Apple from '../../assets/icons/Apple'
import Google from "../../assets/icons/Google";
import styles from "../../styles/auth";
import Mail from './../../assets/icons/Mail';

export default function Auth() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={styles.conteiner}>
            <Text style={styles.title}>MEDITY</Text>
            <Text style={styles.text}>Find Your Inner Peace.</Text>

            <View style={styles.buttonConteiner}>
              {Platform.OS === "ios" && (
                <Pressable>
                  <View style={styles.button()}>
                    <Apple />
                    <Text style={styles.buttonText()}>Continue with Apple</Text>
                  </View>
                </Pressable>
              )}

              <Pressable>
                <View style={styles.button()}>
                  <Google />
                  <Text style={styles.buttonText()}>Continue with Google</Text>
                </View>
              </Pressable>
              <Pressable>
                <View style={styles.button(true)}>
                  <Mail />
                  <Text style={styles.buttonText(true)}>
                    Continue with email
                  </Text>
                </View>
              </Pressable>

              <Text style={styles.textSingUp}>
                Not a member?
                <Text
                  style={{
                    color: "#fff",
                    paddingLeft: "5px",
                    textDecorationLine: "underline",
                  }}
                >
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
