import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        width: "100%",
        height: "100%",
        paddingBottom: '40px'
    },
    content: {
        paddingLeft: 24,
        paddingRight: 24,
        height:'100%',
        width:'100%',
        gap:27
    },
    background: {
        flex: 1,
        width: null,
        height: "100%",
     
    },

    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        fontFamily: "Urbanist-Bold",
        paddingBottom:12
      },
    text:{
        fontSize:12,
        fontWeight:'500',
        fontFamily: "Urbanist-Medium",
        color:"#fff"
    },

})

export default styles