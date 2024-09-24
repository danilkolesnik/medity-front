import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    },
    content: {
        paddingLeft: 24,
        paddingRight: 24,
        height:'100%',
        width:'100%',
    },
    background: {
        flex: 1,
        width: null,
        height: "100%",
     
    },
    backgroundCard:{
      flex: 1,
      width: 140,
      height: "100%",
      justifyContent: 'flex-end',
      borderRadius: 12,
      overflow: 'hidden', // Добавлено для корректного отображения borderRadius
  },
  backgroundCardRelax:{
    flex: 1,
    width: 140,
    height: "100%",
    justifyContent: 'flex-end',
    borderRadius: 12,
    overflow: 'hidden', // Добавлено для корректного отображения borderRadius
},
    title: {
        fontSize: 40,
        fontWeight: "600",
        color: "#fff",
        fontFamily: "Urbanist-Bold",
      },
    text:{
        fontSize:14,
        fontWeight:'500',
        fontFamily: "Urbanist-Medium",
        color:"#fff"
    },
      inputContainer: {
        
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 32,
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 18,
      },
      input: {
        fontSize: 18,
        padding: 16,
        color: "#FFF",
        fontFamily: "Urbanist-Regular",
      },

      card:{
        height:170,
        borderRadius: 40,
       
      },
      cardContent:{
        alignContent:"flex-end",
        backgroundColor:"rgba(15, 23, 42, 0.2)",
        padding:8,
        paddingBottom:16,
      },
      cardTitle:{
        fontSize:15,
        color:'#fff',
        fontWeight:"700",
        letterSpacing:0.2,
        fontFamily:"Urbanist-Bold",
        paddingBottom:4,
      },
      cardText:{
        color:'#fff',
        fontWeight:"700",
        letterSpacing:0.2,
        fontFamily:"Urbanist-Bold",
        fontSize:10
      },
      list:{
     
        paddingTop:26,
        gap:11.5,
   
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
      },
      listRelax:{ 
        
        gap:11.5,
       
        flexDirection:'row'
      },
      bottomPadding: {
        height: 100, 
      },
      topContent:{
        width:'100%',
        justifyContent:"flex-end",
        flexDirection:'row'
      }

})

export default styles