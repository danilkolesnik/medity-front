import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    FlatList,
    TextInput,
    Pressable,
    Modal
} from "react-native"
import Header from "../Header/Header";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../styles/termsUse";


const TermsUse = () =>{

    const currentRoute = 'Profile'

    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={[styles.background]}
            >   
                <Header currentRoute={currentRoute}></Header>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>1. Acceptance of Terms</Text>
                        <Text style={styles.text}>
                            By downloading, installing, accessing, or using Medity, you agree to comply with and be bound by these terms and conditions, along with our Privacy Policy. If you do not agree with any part of these terms, you may not use our app.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>2. License</Text>
                        <Text style={styles.text}>
                            We grant you a non-exclusive, non-transferable, limited license to use Medity solely for your personal, non-commercial purposes, subject to these terms and the applicable app store's terms of service.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>3. User Account</Text>
                        <Text style={styles.text}>
                            Some features of Medity may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>4. Use of the App</Text>
                        <Text style={styles.text}>
                            You agree to use Medity only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default TermsUse