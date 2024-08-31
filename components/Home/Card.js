import { ImageBackground, View, Text, Pressable,ScrollView,FlatList } from "react-native";
import Play from "../../assets/icons/Play";
import styles from "../../styles/card";

const Card = ({title,options,active,index}) =>{
    return(
        <View style={[styles.cardConteiner, {backgroundColor: active === index ? "#FFFFFF" : 'rgba(255, 255, 255, 0.15)'}]}>
                <Text style={[styles.cardTitle, {color: active === index ? "#000" : '#fff'}]}>{title}</Text> 
                <View style={styles.cardContent}>
                {options.map((item,i) => (
                    <Text key={i} style={[styles.cardText, {color: active === index ? "#000" : '#fff', borderColor: active === index ? "rgba(59, 70, 239, 0.15)" : 'rgba(255, 255, 255, 0.15)'}]}>{item}</Text>
                ))}
                </View>
               
                <View style={styles.icon}>
                    <Play active={active === index}></Play>
                </View>       
               
        </View>
    )
}

export default Card