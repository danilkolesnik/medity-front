import React, { useState } from "react";
import { ImageBackground, View, Text, Pressable } from "react-native";

export default function Introduction() {
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
                  fontFamily: "DMSans-Regular",
                  fontWeight: 'normal',
                  color: "#FFF",
                  fontSize: "50px",
                  fontWeight: 400,
                  width: "80%",
                }}
              >
                A daily {"\n"}mind meditation practice
              </Text>
            </View>

            <Pressable
              color="#131313"
              style={{
                height: "55px",
                backgroundColor: "#131313",
                borderRadius: "20px",
              }}
              title="Продолжить"
              onPress={() => navigation.navigate("GetName")}
            >
              <Text
                style={{
                  textAlign: "center",
                  lineHeight: "51px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                Продолжить
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

