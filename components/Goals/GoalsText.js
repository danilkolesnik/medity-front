import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    TextInput,
    Pressable,
    Image
} from "react-native"
import { useNavigation,useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Back from "../../assets/icons/Back";
import Accept from "../../assets/icons/Accept"; 

import { supabase } from "../../utils/supabase";

import styles from "../../styles/goals";
import stylesTop from "../../styles/notes";

const GoalsText = () =>{

    const route = useRoute();
    const navigation = useNavigation();

    const {userId, title, content, id} = route.params;

    return(
        
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={[styles.background]}
            >   
                <View>
                    <View style={[stylesTop.topContent,{paddingTop:24}]}>
                        
                        <Pressable onPress={() => navigation.navigate("Goals")}>
                           <Back></Back>
                       </Pressable>
                   
                        <Text style={[styles.title,{paddingTop:0,paddingBottom:0,paddingLeft:20, fontWeight:'600',fontFamily:"Urbanist-Medium"}]}>Mindfulness</Text>
                        <Pressable 
                            style={{paddingLeft:40}}                  
                        >
                            <Accept></Accept>
                       </Pressable>
                      
                    </View>
                </View>
            </ImageBackground>
        
    )
}

export default GoalsText