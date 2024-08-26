import { ImageBackground, View, Text, Pressable,ScrollView } from "react-native";
import styles from "../../styles/home";
import Menu from '../Menu/menu'
const Home = () =>{
    return(
        <View style={styles.conteiner}>
            <ScrollView>
                <Text>Home</Text>    
            </ScrollView>   
            <Menu/>  
        </View>
    )
}

export default Home