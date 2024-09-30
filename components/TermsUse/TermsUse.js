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

import styles from "../../styles/termsUse";


const TermsUse = () =>{

    const currentRoute = 'Profile'

    return(
        <ScrollView>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={[styles.background]}
            >   
                <Header currentRoute={currentRoute} currentBack={true}></Header>
                <View style={styles.content}>
                    <View>
                    <Text style={styles.text}>
                    Welcome to Medity! These Terms of Use govern your access to and use of the Medity app, including any features, content, and services offered. Please read these terms carefully before using the app.
                        </Text>

                        <Text style={styles.title}>1. Acceptance of Terms</Text>
                        <Text style={styles.text}>
                        By downloading, installing, or using Medity, you agree to comply with these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue using the app.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>2. License to Use</Text>
                        <Text style={styles.text}>
                        Medity grants you a non-exclusive, non-transferable, limited license to use the app for personal, non-commercial purposes in accordance with these terms and any terms specified by the Apple App Store. This license does not grant you any rights to modify, distribute, or reverse-engineer the app.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>3. User Account and Subscription</Text>
                        <Text style={styles.text}>
                        Some features of Medity may require an active subscription. Subscriptions are managed through your Apple App Store account. Payment will be charged to your Apple account upon confirmation of purchase. You may manage and cancel your subscription via your Apple account settings.

Refund Policy: Subscription fees are non-refundable, except as required by Apple’s refund policies. For more details, please refer to the Apple App Store’s terms of service.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>4. Use of the App</Text>
                        <Text style={styles.text}>
                        You agree to use Medity only for lawful purposes and in compliance with all applicable laws. You must not attempt to access the app’s source code, disrupt its functionality, or use the app in a way that may damage or overburden our servers.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>5. Intellectual Property</Text>
                        <Text style={styles.text}>
                        All content within Medity, including but not limited to music, text, logos, and trademarks, is the property of Medity and its creators. You agree not to reproduce, distribute, or use any part of the content without prior written permission from Medity.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>6. Disclaimer</Text>
                        <Text style={styles.text}>
                        Medity is provided for relaxation and meditation purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. You should consult a healthcare provider before using the app if you have any health concerns. We do not guarantee any specific results from using Medity.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>7. Limitation of Liability</Text>
                        <Text style={styles.text}>
                        Medity is provided on an "as-is" and "as-available" basis, without warranties of any kind, express or implied. We do not guarantee that the app will be uninterrupted, error-free, or free from viruses. Medity and its developers will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the app.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>8. Termination</Text>
                        <Text style={styles.text}>
                        We reserve the right to terminate or suspend access to Medity for any reason, including but not limited to a violation of these terms. Upon termination, your right to use the app will cease immediately.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>9. Changes to the Terms</Text>
                        <Text style={styles.text}>
                        We may modify these Terms of Use at any time. Any changes will be effective immediately upon posting. Your continued use of the app after the posting of revised terms constitutes your acceptance of those changes.
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            </ScrollView>
    )
}

export default TermsUse