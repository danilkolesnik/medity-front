import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        height: "100%",
        width: "100%",   
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%",
    },
    progressTitle:{
        color:"#fff",
        fontSize:18,
        fontWeight:"600",
        fontFamily:"Urbanist-Bold",
        paddingLeft:24,
        paddingTop:37
    },
    tabContent:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F1F5F930",
        paddingVertical:14,
        marginLeft:24,
        marginRight:24,
        borderRadius:12,
        marginTop:17
    },
    tabButton:{

    },
    tabText:{
        color:"#fff",
        fontSize:14,
        fontWeight:"600",
        fontFamily:"Urbanist-Bold",
        paddingVertical:10,
        paddingHorizontal:35,
        borderRadius:8
    },

    chartsContent:{
        backgroundColor:"#F1F5F930",
        marginLeft:24,
        marginRight:24,
        paddingVertical:24,
        borderRadius:12,
        marginTop:24   
    },
    linkText:{
        color:"#fff",
        fontWeight:"600",
        fontSize:16,
        fontFamily:"Urbanist-Bold",

    },
    linkButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:20
    }
})

export default styles