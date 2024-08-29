import { ImageBackground, View, Text, Pressable,ScrollView,FlatList } from "react-native";
import Play from "../../assets/icons/Play";
import styles from "../../styles/card";

const Card = ({title,options}) =>{
    return(
        <View style={styles.cardConteiner}>
                <Text style={styles.cardTitle}>{title}</Text> 
                <View style={styles.cardContent}>
                {options.map((item,i) => (
                    <Text key={i} style={styles.cardText}>{item}</Text>
                ))}
                </View>
               
                <View style={styles.icon}>
                    <Play></Play>
                </View>       
               
        </View>
    )
}

export default Card