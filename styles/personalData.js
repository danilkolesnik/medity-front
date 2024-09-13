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
    content:{
        paddingTop:25,
        paddingLeft:24,
        paddingRight:24,
        height:'100%',
        width:'100%'
    },
    label:{
        color:'#969696',
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Urbanist-Regular',
        paddingBottom:5, 
    },
    containerDate: {
        flex: 1,
    },
    input:{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color:"#fff",
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Urbanist-Regular',
        paddingHorizontal:18,
        paddingVertical:18,
        borderRadius:12
    },
    inputContent:{
        paddingVertical:8
    },
    button:{
        position:"absolute",
        bottom:100,
        width:"100%",
        backgroundColor:"#484848",
        borderRadius:12,
        paddingBottom: 19,
        paddingTop:19,
        paddingVertical: 19,
        marginLeft:24
        
    },
    buttonText:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"700",
        color:"#fff"
    },
    buttonGender:{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        flexDirection:'row',
        alignItems:'center',
        width:'50%',
        justifyContent:'center',
        borderRadius:12,
        paddingVertical:17
    },
    genderText:{
        color:"#fff",
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Urbanist-Regular',
        paddingLeft:8
    }
})

export default styles