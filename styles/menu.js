import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        position:'absolute',
        bottom:0,
        left: 0,
        right: 0,
        flex:1,
        flexDirection:'row',
        paddingBottom:20,
        paddingTop:10,
        paddingLeft:22,
        paddingRight:22,
        width:"100%",
        zIndex: 1,
        overflow: 'hidden',
    },

    button:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        textAlign:"center"
    },
    text:(active = false) =>{
        return{
            fontSize:10,
            color:"#fff",
            fontWeight: active ? 800 : 400,
            fontFamily: active ? "Urbanist-Bold" : 'Urbanist-Regular'
        }
    },
    
})
export default styles