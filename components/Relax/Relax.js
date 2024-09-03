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
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { SERVER } from "../../constants/async";

import Card from "../Sleep/Card";
import Menu from '../Menu/menu'
import axios from "axios";

import SearchIcon from "../../assets/icons/Search";
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";

import styles from "../../styles/sleep"; 


const Relax = () =>{
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
            return data.docs.filter(item => item.mainCategory === 'relax')
        } catch (error) {
            console.log(error);      
        }
    }

    const groupedData = sleep.reduce((acc, item) => {
        const category = item.category.title;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});
    
    const groupedArray = Object.keys(groupedData).map(category => ({
        category,
        data: groupedData[category],
    }));


    useEffect(() =>{
        getSleep()
            .then(res => {
                setSleep(res)                
            })
    },[])

    return(
        <SafeAreaView style={styles.conteiner}>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >
            <ScrollView style={[styles.content]}>
                <SafeAreaView style={styles.topContent}>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Back></Back>
                    </Pressable>
                    <Pressable>
                        <Setting></Setting>
                    </Pressable>
                </SafeAreaView>
                <View>
                    <Text style={styles.title}>Relax</Text>
                    <Text style={[styles.text, {paddingTop: 4, paddingBottom: 12}]}>{sleep.length} practices</Text>
                    <Text style={[styles.text, {paddingBottom:45}]}>Relax your body and find an inner peace</Text>
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
      data={groupedArray}
      renderItem={({ item }) => (
        <View>
          <Text style={[styles.title, { paddingTop: 24, paddingBottom: 10, fontSize: 18 }]}>
            {item.category}
          </Text>
          <FlatList
            data={item.data}
            renderItem={({ item }) => <Card item={item} style={styles.backgroundCardRelax} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listRelax}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
      keyExtractor={(item) => item.category}
      contentContainerStyle={styles.container}
    />
                
                <View style={styles.bottomPadding} />
            </ScrollView>
            
            </ImageBackground>
            
            <Menu></Menu>
        </SafeAreaView>
    )
}

export default Relax