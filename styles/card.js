import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardConteiner:{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        position:'relative',
        padding:16,
        borderRadius:24
    },
    cardContent:{
        display:"flex",
        flexDirection:'row',
        gap:8,
    },
    cardTitle:{
        fontSize:18,
        fontWeight:"600",
        color:"#fff",
        fontFamily:"Urbanist-SemiBold",
        paddingBottom:12
    },
    cardText:{
        fontSize:14,
        fontWeight:"400",
        fontFamily:'Urbanist-Regular',
        color:"#fff",
        borderWidth: 1,
        borderRadius:17,
        borderColor:'rgba(255, 255, 255, 0.15)',
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:12,
        paddingRight:12
    },
    icon:{
        position:'absolute',
        right:16,
        top:16
    }
})

export default styles