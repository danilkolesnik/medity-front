import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonConteiner:{
        borderRadius: "20px",
    },
    button:{      
        flex:1,
        flexDirection: 'row', 
        alignSelf:'flex-end',
        alignItems:"center"

    },
    text:{
        color:'#fff',
        fontSize: "16px",
        fontWeight: "600",
        fontFamily:"Urbanist-SemiBold",
        paddingRight:40
    },
    icon:{
        padding:20,
        backgroundColor:'#fff',
        borderRadius:32
    }

})

export default styles;