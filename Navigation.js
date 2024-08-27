import React from "react";
import Auth from "./components/Auth/Auth";
import Introduction from "./components/Introduction/Introduction";
import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <View style={styles.screenWrapper}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
         
        >
          <Stack.Screen name="Introduction" component={Introduction} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    height: "100%",
    width: "100%",
  },
});

export { AppNavigator };