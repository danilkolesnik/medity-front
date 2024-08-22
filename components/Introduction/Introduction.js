import React, { useState } from "react";
import { ImageBackground, View, Text, Pressable } from "react-native";
import Arrow from '../../assets/icons/Arrow'
import styles from "../../styles/Introduction";

export default function Introduction({navigation}) {
  return (
    <View
      style={{ flex: 1, width: null, height: null, backgroundColor: "#010101" }}
    >
      <ImageBackground
        source={require("../../assets/images/face-background.jpg")}
        style={{ flex: 1, width: null, height: "60%" }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              padding: 15,
              paddingBottom: 30,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text />

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <Text
                style={{
                  fontFamily: "Urbanist-Regular",
                  fontWeight: 'normal',
                  color: "#FFF",
                  fontSize: "50px",
                  fontWeight: 400,
                  width: "80%",
                }}
              >
                A daily {"\n"}<Text style={{color:"#515151"}}>mind</Text> meditation <Text style={{color:"#515151"}}>practice</Text>
              </Text>
            </View>

            <Pressable
              color="#131313"
              style={styles.buttonConteiner}
              onPress={() => navigation.navigate("Auth")}
            >
              <View
                style={styles.button}
              >
                <Text
                  style={styles.text}
                >
                  Get started
                </Text>             
                <Arrow></Arrow>         
              </View>
              
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

