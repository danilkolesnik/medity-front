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
import Goals from "./components/Goals/Goals";
import GoalsText from "./components/Goals/GoalsText";
import TermsUse from "./components/TermsUse/TermsUse";
import Settings from "./components/Settings/Settings";
import Favorite from "./components/Player/Favorite";
import NewMeditations from "./components/NewMeditations/NewMeditations";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomStatusBar from "./components/CustomStatusBar/CustomStatusBar";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <CustomStatusBar>
      <View style={styles.screenWrapper}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}
          >   
           <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Home" component={Home} />
           
            
            <Stack.Screen name="Verification code" component={OtpVerification} />
            <Stack.Screen name="Quiz" component={Quiz} />

            <Stack.Screen name="Goals" component={Goals} />
            <Stack.Screen name="GoalsText" component={GoalsText} />

            <Stack.Screen name="Terms of use" component={TermsUse} />
            <Stack.Screen name="Settings" component={Settings} />

            <Stack.Screen name="Notes" component={Notes} />
            <Stack.Screen name="Note" component={Note} />

            <Stack.Screen name="Personal Data" component={PersonalData} />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="Chakras" component={Chakras} />
            <Stack.Screen name="Chakra" component={Chakra} />

            <Stack.Screen name="Meditations" component={Meditations} />
            <Stack.Screen name="New meditations" component={NewMeditations} />

            <Stack.Screen name="Relax" component={Relax} />
            <Stack.Screen name="Player" component={Player} />
            <Stack.Screen name="My favorite meditations" component={Favorite} />

            <Stack.Screen name="Sleep" component={Sleep} />

            <Stack.Screen name="Introduction" component={Introduction} />

            <Stack.Screen name="Email" component={EmailAuth} />
            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </CustomStatusBar>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    height: "100%",
    width: "100%",
  },
});

export { AppNavigator };
