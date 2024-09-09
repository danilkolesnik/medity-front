import { ImageBackground, Text, Pressable,ScrollView,View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back from "../../assets/icons/Back";
import styles from "../../styles/header";

const Header = ({noReturn}) =>{

    const route = useRoute()

    const navigation = useNavigation();

    return (
        <SafeAreaView
        style={styles.conteiner}
    >
        {!noReturn && 
        <Pressable
             onPress={() => navigation.navigate("Home")}
        >
            <View style={styles.icon}>
                <Back></Back>  
            </View>    
        </Pressable>
        }
        
        
        <Text style={styles.text}>{route.name}</Text>
    </SafeAreaView>
    )
} 

export default Header