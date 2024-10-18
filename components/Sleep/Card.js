import { 
    View,
    ImageBackground,
    Text,
    Pressable
} from "react-native"
import Clock from "../../assets/icons/Clock";
import Mic from "../../assets/icons/Mic";
import { SERVER } from "../../constants/async";

import { useNavigation,useRoute } from '@react-navigation/native';
import styles from "../../styles/sleep";

const Card = ({item, style}) => {
    const {title, image, media, category, type} = item;
    const navigation = useNavigation();
    const route = useRoute();
    const currentRoute = route.name;

    const imageSource = image && image.url
        ? image.url.startsWith('file://')
            ? { uri: image.url } 
            : { uri: `${SERVER}${image.url}` } 
        : '' 

    return (
        <Pressable 
            style={styles.card}
            onPress={() => navigation.navigate("Player", { title, category, currentRoute, media, image })}
        >
            <ImageBackground
                style={style}
                source={imageSource} // Подставляем корректный источник изображения
                defaultSource={require('../../assets/images/image.jpg')}
            >
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={{flexDirection: 'row', alignItems: "center"}}>
                        <View style={{flexDirection: 'row', alignItems: "center", paddingRight: 8}}>
                            <Mic />
                            <Text style={styles.cardText}>Unguided</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: "center"}}>
                            <Clock />
                            <Text style={[styles.cardText, {paddingLeft: 3}]}>{type} min</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

export default Card;
