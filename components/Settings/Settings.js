import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    TextInput,
    Pressable,
    Image,
} from "react-native"
import { useNavigation } from '@react-navigation/native';
import Header from "../Header/Header"
import Rigth from "../../assets/icons/Rigth";

import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from "../../styles/settings"
import stylesProfile from "../../styles/profile";

const Settings = () =>{

    const currentRoute = "Home"

    const navigation = useNavigation()

    const logOut = async() =>{
        try {
          await AsyncStorage.removeItem('token')
          await AsyncStorage.removeItem('userId')
          navigation.navigate("Introduction")
        } catch (error) {
          
        }
      }

    return(
        <View style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            <Header currentRoute={currentRoute} currentBack={true}></Header>

            <View>

            <View
                    style={{
                        paddingHorizontal:24
                    }}
                >
                    <View
                      
                    >
                        <Pressable 
                          style={stylesProfile.linkButton}
                          onPress={() => navigation.navigate("Notifications")}
                        >
                            <Text style={stylesProfile.linkText}>My Account</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        
                        <Pressable 
                          style={[stylesProfile.linkButton,{paddingBottom:28}]}
                          onPress={() => navigation.navigate("Notifications")}
                        >
                            <Text style={stylesProfile.linkText}>Notifications</Text>
                            <Rigth></Rigth>
                        </Pressable>
                    </View>

                    <View
                      style={{
                        borderColor: '#F1F5F9',
                        borderTopWidth: 1,
                        paddingBottom:80
                      }}
                    >
                        <Text style={[stylesProfile.linkText,{paddingTop:28, fontSize:18}]}>
                            Support
                        </Text>
                        <Pressable 
                          style={[stylesProfile.linkButton, {paddingTop:21,paddingBottom:0}]}
                        
                        >
                            <Text style={stylesProfile.linkText}>Terms of use</Text>
                            <Rigth></Rigth>
                        </Pressable>
                        <Pressable 
                          style={[stylesProfile.linkButton, {paddingTop:21}]}
                            onPress={() => logOut()}
                        >
                            <Text style={stylesProfile.linkText}>Log out</Text>
                            <Rigth></Rigth>
                        </Pressable>
                    </View>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Settings