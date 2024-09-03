import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        width: "100%",
        height: "100%",

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
        width: 175,
        height: "100%",
        justifyContent: 'flex-end',   
        borderRadius:40 
    },
    backgroundCardRelax:{
      flex: 1,
      width: 140,
      height: "100%",
      justifyContent: 'flex-end',   
      borderRadius:40 
    },
    title: {
        fontSize: 40,
        fontWeight: "600",
        color: "#fff",
        fontFamily: "Urbanist-Bold",
        paddingTop: 76,
      },
    text:{
        fontSize:14,
        fontWeight:'500',
        fontFamily: "Urbanist-Medium",
        color:"#fff"
    },
      inputContainer: {
        marginTop: 8,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 32,
        flex: 1,
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
        width: '100%',
        alignContent:"flex-end",
        borderRadius: 20,
        overflow: 'hidden',
      },
      cardContent:{
        alignContent:"flex-end",
        backgroundColor:"rgba(15, 23, 42, 0.2)",
        padding:8,
        paddingBottom:16
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
        flexWrap: 'wrap',
        alignContent: 'flex-start'
      },
      listRelax:{
        flexDirection: 'row',
        gap:11.5,
        overflow:'scroll'
      },
      bottomPadding: {
        height: 100, 
      },
      topContent:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row'
      }

})

export default styles