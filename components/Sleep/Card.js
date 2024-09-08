import { 
    View,
    ImageBackground,
    Text,
    Pressable
} from "react-native"
import Clock from "../../assets/icons/Clock";
import Mic from "../../assets/icons/Mic";
import { SERVER } from "../../constants/async";

import { useNavigation } from '@react-navigation/native';
import calculateDurationInMinutes from "../../utils/calculateDurationInMinutes";
import styles from "../../styles/sleep";

const Card = ({item,style}) =>{

    const {title,image,media,category} = item

    // const totalMin = Math.ceil(calculateDurationInMinutes(media.filesize))

    const navigation = useNavigation()

    return(
        <Pressable 
            style={styles.card}
            onPress={() => navigation.navigate("Player",{ title,category })}
        >
            <ImageBackground
                style={style}
                source={{uri:`${SERVER}${image.url}`}}
                resizeMode="cover"
            >
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <View style={{flexDirection:'row',alignItems:"center",paddingRight:8}}>
                            <Mic></Mic>
                            <Text style={styles.cardText}>Unguided</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:"center"}}>
                            <Clock></Clock>
                            <Text style={styles.cardText}> min</Text>
                        </View>
                       
                    </View>
                </View>
                
            </ImageBackground>
        </Pressable>
    )
}

export default Card