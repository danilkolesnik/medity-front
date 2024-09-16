import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const ModalProfile = ({active, setModalVisible,deleteUser}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={active}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!active);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalOverlay} />
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure you want to remove your account?</Text>
                    <View
                        style={{
                            flexDirection:"row",
                            justifyContent:'space-between',
                            width:'100%'
                        }}
                    >
                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!active)}>
                                <Text style={styles.textStyle}>Do not delete</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button]}
                            onPress={() => deleteUser()}>
                                <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                    </View>
                   
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalOverlay: {
        position: 'absolute',    
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемненный фон
    },
    modalView: {
       
        backgroundColor: '#2D2D2D',
        
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width:300,   
        borderRadius:20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
    },
    button: {
        width:'50%',
        backgroundColor: '#282828',
        paddingVertical:12,
    },
    buttonOpen: {

    },
    buttonClose: {

    },
    textStyle: {
        color: 'white',
        fontWeight:"600",
        fontSize: 16,
        fontFamily:"Urbanist-Bold",
        textAlign: 'center',
    },
    modalText: {
        fontFamily:"Urbanist-Bold",
        fontSize: 16,
        fontWeight:'600',
        textAlign: 'center',
        color: 'white',
        paddingVertical:24
    },
});

export default ModalProfile;
