import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        paddingRight:'20px',
        paddingLeft:"20px"
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%"
    },
    buttonConteiner:{
        display:"flex",
        gap:"12px"
    },
    button: (last = false) =>{
        return{
            backgroundColor: !last ? "#fff" : '#565656',
            display: "flex",
            flexDirection: "row",
            alignItems:"center",
            justifyContent:"center",
            padding:'20px',
            borderRadius:'12px'
        }
    },
    buttonText:(last = false) =>{
        return{
            color: !last ? "#121826" : '#fff',
            fontSize: "16px",
            fontWeight: "500",
            paddingLeft:'19px',
            fontFamily:"Urbanist-Medium"
        }
    },
    
    title:{
        color:'#fff',
        fontSize: "32px",
        fontWeight: "800",
        textAlign:"center",
        fontFamily:"Urbanist-Bold"
    },
    text:{
        color:'#fff',
        fontSize: "16px",
        fontWeight: "400",
        textAlign:"center",
        paddingBottom:"20px",
        fontFamily:"Urbanist-Regular"
    },

    textSingUp:{
        color:'#B4B4B4',
        fontSize: "16px",
        fontWeight: "400",
        textAlign:"center",
        paddingTop:"21px",
        fontFamily:"Urbanist-Regular"
    }

})

export default styles;