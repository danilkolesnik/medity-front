import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex: 1, 
        width: null, 
        height: "100%",
        resizeMode: 'repeat',
    },
    notesContainer: {
        flex: 1,
        justifyContent: 'center',  // Вертикальное центрирование
        alignItems: 'center',      // Горизонтальное центрирование
        height: "100%",
    },
    noteCaption:{
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
        bottom:36,
        width:327,
        left: '50%',
        transform: [{ translateX: -163.5 }],
        flex: 1,
        flexDirection: "row",
        margin: "auto",
        justifyContent: "flex-end",
        gap: 20,
        marginTop: 20,
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})

export default styles;
