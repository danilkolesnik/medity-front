import { StyleSheet } from "react-native";


const  styles = StyleSheet.create({
    conteiner:{
        height: "100%",
        width: "100%",
        
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%"
    },
    textConteiner:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:36,
        paddingLeft:24,
        paddingRight:24
    },
    titleConteiner:{
        display:"flex"
    },
    title:{
        fontSize:16,
        fontWeight:"700",
        fontFamily:"Urbanist-Bold",
        color:"#fff"
    },
    text:{
        fontSize:16,
        fontWeight:"400",
        fontFamily:'Urbanist-Regular',
        color:"#fff"
    },
    button:{
        position:"absolute",
        bottom:36,
        width:327,
        backgroundColor:"#484848",
        borderRadius:12,
        paddingBottom: 19,
        paddingTop:19,
        paddingVertical: 19,
        left: '50%',
        transform: [{ translateX: -163.5 }], 
    },
    buttonText:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"700",
        color:"#fff"
    }
})

export default styles