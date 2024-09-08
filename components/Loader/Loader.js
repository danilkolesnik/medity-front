import {
    ImageBackground,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    FlatList,
    StatusBar,
    ActivityIndicator
  } from "react-native";

  const Loader = ({style}) =>{
    return(
        <View
            style={{
                position:'absolute',
                top:'50%',
                left: '50%',
                transform: [{ translateX: -50 }, { translateY: -60 }],
            }}
        >
        <ActivityIndicator size={100} color="#fff" />
        </View>)
  }

  export default Loader