import { 
    View,
    ImageBackground,
    Text
} from "react-native"
import Clock from "../../assets/icons/Clock";
import Mic from "../../assets/icons/Mic";
import { SERVER } from "../../constants/async";
import calculateDurationInMinutes from "../../utils/calculateDurationInMinutes";
import styles from "../../styles/sleep";

const Card = ({item,style}) =>{

    const {title,image,media} = item

    const totalMin = Math.ceil(calculateDurationInMinutes(media.filesize))

    return(
        <View style={styles.card}>
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
                            <Text style={styles.cardText}>{totalMin} min</Text>
                        </View>
                       
                    </View>
                </View>
                
            </ImageBackground>
        </View>
    )
}

export default Card