import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conteiner: {
    width: "100%",
    height: "100%",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  background: {
    flex: 1,
    width: null,
    height: "100%",
  },
  title:{
    color: "#fff",
    fontWeight: "400",
    fontFamily: "Urbanist-Regular",
    fontSize:18,
    paddingTop:28,
    paddingBottom:12,
  },
  goalsTitle:{
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Urbanist-Regular",
    paddingLeft:12,
  },
  topContent:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    
  }
});

export default styles;
