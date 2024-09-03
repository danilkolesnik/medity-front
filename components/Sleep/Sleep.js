import { useState, useEffect } from "react";
import { 
    View,
    Text, 
    ImageBackground,
    ScrollView,
    FlatList,
    TextInput,
    Pressable
} from "react-native"
import SearchIcon from "../../assets/icons/Search";
import Menu from '../Menu/menu'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import Card from "./Card";
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";
import { SERVER } from "../../constants/async";
import axios from "axios";
import styles from "../../styles/sleep";

const Sleep = () =>{

    const [sleep, setSleep] = useState([])

    const [searchText, setSearchText] = useState("");

    const navigation = useNavigation();

    const getSleep = async() =>{
        try {
            const {data} = await axios.get(`${SERVER}/api/meditation`,
            { 
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            })
            return data.docs.filter(item => item.mainCategory === 'sleep')
        } catch (error) {
            console.log(error);      
        }
    }

    useEffect(() =>{
        getSleep()
            .then(res => setSleep(res))
    },[])

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            <ScrollView style={styles.content}>
                <SafeAreaView style={styles.topContent}>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Back></Back>
                    </Pressable>
                    <Pressable>
                        <Setting></Setting>
                    </Pressable>
                </SafeAreaView>
                <View>
                    <Text style={styles.title}>Sleep</Text>
                    <Text style={[styles.text, {paddingTop: 4, paddingBottom: 12}]}>{sleep.length} practices</Text>
                    <Text style={[styles.text, {paddingBottom:45}]}>Meditations for calm sleep</Text>
                </View>
                
                <View style={styles.inputContainer}>
                    <SearchIcon/>
                    <TextInput
                        style={styles.input}
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder="Search"
                        placeholderTextColor="#949494"
                    />
                </View>

                <FlatList
                    data={sleep}
                    renderItem={({ item, index }) => (
                        <Pressable>
                            <Card item={item} style={styles.backgroundCard} />
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                />

            </ScrollView>
            <Menu></Menu>
            </ImageBackground>
            
        </SafeAreaView>
    )
}

export default Sleep