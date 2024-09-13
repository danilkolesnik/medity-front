import React from "react";
import Auth from "./components/Auth/Auth";
import EmailAuth from "./components/Auth/EmailAuth";
import Introduction from "./components/Introduction/Introduction";
import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";
import OtpVerification from "./components/Auth/OtpVerification";
import Quiz from "./components/Quiz/Quiz";
import Sleep from "./components/Sleep/Sleep";
import Relax from "./components/Relax/Relax";
import Player from "./components/Player/Player";
import Chakras from "./components/Chakras/Chakras";
import Chakra from "./components/Chakra/Chakra";
import Meditations from "./components/Meditations/Meditations";
import Profile from "./components/Profile/Profile";
import PersonalData from "./components/PersonalData/PersonalData";
import Notes from "./components/Notes/Notes";
import Note from "./components/Notes/Note";
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
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="Notes" component={Notes} />   
          <Stack.Screen name="Note" component={Note} /> 
          
          <Stack.Screen name="Auth" component={Auth} />
         
            
          <Stack.Screen name="PersonalData" component={PersonalData} />
          
        
          <Stack.Screen name="Chakras" component={Chakras} />  
          <Stack.Screen name="Profile" component={Profile} /> 
          
          <Stack.Screen name="Chakra" component={Chakra} />  
          
    

          <Stack.Screen name="Meditations" component={Meditations} />  
         
          <Stack.Screen name="Relax" component={Relax} />   
          <Stack.Screen name="Player" component={Player} /> 
      
          <Stack.Screen name="Sleep" component={Sleep} />       
          <Stack.Screen name="Quiz" component={Quiz} />         
          <Stack.Screen name="Introduction" component={Introduction} />           
          
          <Stack.Screen name="EmailAuth" component={EmailAuth} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
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
