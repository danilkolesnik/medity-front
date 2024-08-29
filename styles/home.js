import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
    },
    content:{
        paddingLeft:24,
        paddingRight:24,
        paddingBottom:120
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%"
    },
    title:{
        fontSize:40,
        fontWeight:"400",
        color:"#fff",
        fontFamily:'Urbanist-Regular',
        paddingTop:40,
    },

    contentCard:{
        display:"flex",
        flexDirection:'row',
        gap:8
    },
    cardConteiner:{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width:167,
        borderRadius:32,
        padding:16,
        marginTop:8
    },
    cardTitle:{
        fontSize:24,
        fontWeight:"600",
        color:"#fff",
        fontFamily:"Urbanist-SemiBold",
    },
    contentBotton:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        paddingTop:54
    },
    list:{
        display:'flex',
        gap:13
    },
    contentBottonText:{
        fontSize:14,
        fontWeight:"400",
        fontFamily:'Urbanist-Regular',
        color:"#fff",
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:12,
        paddingRight:12,
        borderRadius:16
    },

    buttonMore:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop:36,
        paddingBottom:22
    },

    textMore:{
        fontSize:24,
        fontWeight:"400",
        fontFamily:'Urbanist-Regular',
        color:"#fff",
    },
    textButtonMore:{
        color:'#fff',
        fontWeight:"400",
        fontFamily:'Urbanist-Regular',
        fontSize:16,
    },
    progressTitle:{
        color:'#fff',
        fontWeight:"600",
        fontSize:40,
        fontFamily:"Urbanist-SemiBold"
    },
    progressText:{
        color:'#fff',
        fontWeight:"500",
        fontFamily:'Urbanist-Medium',
        fontSize:16
    },
    progressStatusTittle:{
        fontSize:18,
        fontFamily:'Urbanist-Bold',
        fontWeight:"700",
        color:"#fff"
    },
    progressStatusText:{
        fontSize:14,
        fontFamily:'Urbanist-Regular',
        fontWeight:"400",
        color:"#fff",
        paddingBottom:22
    }
})
export default styles