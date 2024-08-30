import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        paddingRight:20,
        paddingLeft:20
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%"
    },
    buttonConteiner:{
        display:"flex",
        gap:12
    },
    button: (last = false) =>{
        return{
            backgroundColor: !last ? "#fff" : '#565656',
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            justifyContent:"center",
            padding:20,
            borderRadius:12,

        }
    },
    buttonText:(last = false) =>{
        return{
            color: !last ? "#121826" : '#fff',
            fontSize: 16,
            fontWeight: "500",
            paddingLeft:19,
            fontFamily:"Urbanist-Medium"
        }
    },
    
    title:{
        color:'#fff',
        fontSize: 32,
        fontWeight: "800",
        textAlign:"center",
        fontFamily:"Urbanist-Bold"
    },
    text:{
        color:'#fff',
        fontSize: 16,
        fontWeight: "400",
        textAlign:"center",
        paddingBottom:20,
        fontFamily:"Urbanist-Regular"
    },

    textSingUp:{
        color:'#B4B4B4',
        fontSize: 16,
        fontWeight: "400",
        textAlign:"center",
        paddingTop:21,
        fontFamily:"Urbanist-Regular"
    }

})

export default styles;