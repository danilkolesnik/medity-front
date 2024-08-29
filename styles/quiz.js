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
    title:{
        color:"#fff",
        paddingLeft:24,
        paddingTop:68,
        paddingBottom:44,
        fontSize:40,
        fontWeight:"400",
        fontFamily:'Urbanist-Regular'
    },
    containerSlider: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        marginLeft:20,
        marginRight:20,
        paddingTop:16,
        paddingLeft:16,
        paddingRight:16,
        paddingBottom:25,
        borderRadius:24
    },
    
      question: {
        fontSize: 18,
        fontWeight:"600",
        color:"#fff",
        lineHeight:21,
        fontFamily:"Urbanist-SemiBold",
        paddingBottom:24
      },
      optionButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius:17,
        marginBottom:12
      },
      activeOptionButton:{
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
      },
      activeOptionText:{
        color:"#464646"
      },
      optionText: {
        fontSize: 15,
        color:"#fff",
        padding:12,
        fontFamily:"Urbanist-SemiBold",
        
      },
      nextButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.29)',
        width:327,
        borderRadius:12,
        paddingTop:19,
        paddingBottom:19,
        marginBottom:30
      },
      nextButtonText:{
        color:"#fff",
        fontWeight:"600",
        textAlign:"center",
        fontFamily:"Urbanist-SemiBold",
      },
      buttons:{
        position:'absolute',
        bottom:0,
        left: 0,
        right: 0,
        alignItems: 'center'
      },
      stepIndicator: {
        flexDirection: 'row',
        marginBottom:17
        
      },
      stepDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
      },
      activeStepDot: {
        backgroundColor: '#fff',
      },
      inactiveStepDot: {
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
      },
})

export default styles