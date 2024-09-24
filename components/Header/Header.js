import { ImageBackground, Text, Pressable,ScrollView,View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Back from "../../assets/icons/Back";
import styles from "../../styles/header";

const Header = ({currentRoute,currentTitle,currentBack}) =>{

    const route = useRoute()

    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={styles.conteiner}
        >
        {currentBack &&
        <Pressable
              onPress={() => {
                 navigation.navigate(currentRoute)
                 
              }}
         >
             <View style={styles.icon}>
                 <Back></Back>  
             </View>    
         </Pressable>
        }    
        <Text style={styles.text}>
            {currentTitle ? currentTitle : route.name}         
        </Text>
    </SafeAreaView>
    )
} 

export default Header