import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AppNavigator } from "./Navigation";
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-Black": require("./assets/fonts/Urbanist-Black.ttf"),
    "Urbanist-BlackItalic": require("./assets/fonts/Urbanist-BlackItalic.ttf"),
    "Urbanist-BoldItalic": require("./assets/fonts/Urbanist-BoldItalic.ttf"),
    "Urbanist-ExtraBold": require("./assets/fonts/Urbanist-ExtraBold.ttf"),
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
  })
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
       <AppNavigator />
    </PaperProvider>
  )
}
