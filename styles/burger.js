import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        position:'absolute',
        right:24,
        top:28,
        zIndex:1
    },
    conteinerActive:{
        display:'block',
        backgroundColor:"#565656",
        width:"100%",
        height:"100%",
        zIndex:2
    },
    content:{
        backgroundColor:"#565656",
        display:'none',   
    },
    contentActive:{
        width:'100%',
        height:"100%",
        backgroundColor:"#565656",
        paddingLeft:26,
        paddingRight:26
    },
    title:{
        fontSize:24,
        fontWeight:'600',
        color:'#fff',
        fontFamily:"Urbanist-Bold",
    },
    topContent:{      
        flexDirection:'row',
        width:"100%",
        justifyContent:"space-between",
        paddingBottom:41
    },
    button:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        paddingBottom:29
    },
    buttonText:{
        fontSize:16,
        color:"#fff",
        fontWeight:'600',
        fontFamily:"Urbanist-Bold",
       
    }
})

export default styles;