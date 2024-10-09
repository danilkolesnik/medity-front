import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        height: "100%",
        width: "100%",
        paddingRight:24
    },
    background:{
        flex: 1, 
        width: null, 
        height: "100%",
        resizeMode: 'repeat',
    },
    chakrasContainer: {
        margin: 20,
        marginTop: 0,
        paddingBottom: 70,
        paddingTop:80,
        width:'100%',
        gap:16

    },
    chakraWrapper: {
        height: 192,
        borderRadius: 40,
        marginTop: 10,
        width:'100%',
    },
    infoBar: {
        backgroundColor: "rgba(15, 23, 42, 0.40)",
        height: 60,
        width:'100%',     
        padding: 12,
    },
    infoBarText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight:"600",
        fontFamily:"Urbanist-Bold",
        letterSpacing: 2,
    },
    infoMarksWrapper: {
        flex: 1,
        flexDirection: "row",
        gap: 6,
    },
    infoMark: {
        fontWeight:"400",
        fontFamily:'Urbanist-Regular',
        color: "#FFF",
        opacity: 30,
    },

    backgroundCardRelax:{
        flex: 1,
        width: '100%',
        height: "100%",
        justifyContent: 'flex-end',   
        borderRadius:40 
    },
    affirmationsContainer: {
        paddingTop:27
    },
    affirmation:{
        fontWeight:"400",
        fontSize: 18,
        fontFamily:'Urbanist-Regular',
        textAlign: "center",
        color: "#fff",
    },
    affirmationNavigation:{
        flex: 1,
        flexDirection: "row",
        margin: "auto",
        justifyContent: "center",
        gap: 10,
        marginTop: 20,
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
        justifyContent: "center",
        gap: 20,
        marginTop: 20,
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})

export default styles;
