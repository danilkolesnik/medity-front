import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex: 1, 
        width: null, 
        height: "100%",
        resizeMode: 'repeat',
        position:'relative',
    },
    notesContainer: {  
        position:'absolute',
        top: '50%',    
        left: '30%', 
        transform: [{ translateX: 0 }, { translateY: -50 }],
    
    },
    noteCaption:{
        flex:1,
        height:'100%',
        fontWeight:"400",
        fontSize: 18,
        fontFamily:'Urbanist-Regular',
        textAlign: "center",
        color: "#FFF",
        opacity: 30,
    },
    affirmationButtonRotated:{
        opacity: 0,
    },
    bottomNavContainer:{
        position:"absolute",
        bottom:0,
        
        right:0,    
        flex: 1,
        flexDirection: "row",
        margin: "auto",
        justifyContent: "flex-end",
      
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    input:{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        color:"#fff",
        fontSize:18,
        fontWeight:"600",
        fontFamily:"Urbanist-SemiBold",
        borderRadius:24,
        paddingHorizontal:16,
        paddingVertical:16,
        
    },
    label:{
        color:'#969696',
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Urbanist-Regular',
        paddingBottom:5,
        
    },
    topContent:{
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:24,
        paddingRight:24
    },
    noteContent:{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius:24,
        padding:16,
        width:'100%',
        position:'relative',
        paddingBottom:46
    },
    noteTitle:{
        color:"#fff",
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Urbanist-Regular',
    },
    buttonEdit:{
        width:'100%',
        position:'absolute',
        left:20,
        bottom:21,
    }
})

export default styles;
