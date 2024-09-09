import { ImageBackground, View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/Header";
import styles from "../../styles/chakrasstyle";
import Menu from '../Menu/menu';

const Chakras = () =>{
    const mockUp = [1,2,3,4,5,6,7];

    return(
        <SafeAreaView
            style={{ 
                flex: 1,
                width: '100%', 
                height: '100%', 
                justifyContent:"center" 
            }}
        >
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
                resizeMode="repeat"     
            >
                <ScrollView style={styles.conteiner}>

                    <Header noReturn/>
                    <View style={styles.chakrasContainer}>
                        {mockUp.map((item) => (
                            
                                <View style={styles.chakraWrapper}>
                                    <ImageBackground
                                        source={require("../../assets/images/chakras.jpg")}
                                        style={styles.backgroundCardRelax}
                                    >
                                   
                                    <View style={styles.infoBar}>
                                        <Text style={styles.infoBarText}>Muladhara</Text>
                                        <View style={styles.infoMarksWrapper}>
                                            <Text style={styles.infoMark}>7 meditations</Text>
                                            <Text style={styles.infoMark}>•</Text>
                                            <Text style={styles.infoMark}>69 affirmations</Text>
                                        </View>
                                    </View> 
                                    </ImageBackground>
                                
                                </View>
                            
                        ))}
                    </View>  
                    
                </ScrollView>
                <Menu/>  
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Chakras;