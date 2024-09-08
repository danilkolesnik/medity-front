import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        height: "100%",
        width: "100%",
      
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%",
        paddingLeft:24, 
        paddingRight:24
    },

    content:{
        backgroundColor:"#000",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
    },
    trackTitle:{
        color:"#fff",
        fontSize:24,
        textAlign:"center",
        fontWeight:"600",
        fontFamily:"Urbanist-SemiBold",
        backgroundColor:"#000"
    },
    leftGradient: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: '100%',
      },
      rightGradient: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: '100%',
      },
      trackText:{
        fontSize:16,
        fontWeight:"400",
        color:"rgba(255,255,255,0.5)",
        textAlign:"center",
        paddingTop:12,
        paddingBottom:24,
        fontWeight:"400",
        fontFamily:'Urbanist-Regular'
      },
     textContent:{ 
        position: 'relative',
        
        flex: 1,
        justifyContent: 'flex-end',
        
    },
    topContent:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    image: {
        flex: 1,
        position: 'absolute',
        
        left: 0,
        right: 0,
        top:"20%",
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default styles