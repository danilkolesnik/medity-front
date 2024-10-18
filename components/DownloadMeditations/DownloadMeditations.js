import { 
    useState, 
    useEffect, 
    useCallback 
} from "react";
import { 
    View, 
    Text, 
    ImageBackground, 
    ScrollView, 
    TextInput, 
    Pressable 
} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from '@react-native-async-storage/async-storage';
import TrackPlayer from 'react-native-track-player';
import axios from "axios";

import Menu from '../Menu/menu';
import Card from "../Sleep/Card";
import Loader from "../Loader/Loader";
import Back from "../../assets/icons/Back";
import Setting from "../../assets/icons/Setting";
import SearchIcon from "../../assets/icons/Search";

import { QueueInitialTracksService } from "../../utils/QueueInitialTracksService";
import styles from "../../styles/sleep";
import { SERVER } from "../../constants/async";

const DownloadMeditations = () => {
    const [loading, setLoading] = useState(true);
    const [downloadedMeditations, setDownloadedMeditations] = useState([]);
    const [originalMeditations, setOriginalMeditations] = useState([]);
    const [searchText, setSearchText] = useState("");

    const navigation = useNavigation();

    const getDownloadedMedia = useCallback(async () => {
        setLoading(true); 

        try {
            const storedData = await AsyncStorage.getItem('downloadedMedia');
            if (storedData) {
                const downloadedMediaArray = JSON.parse(storedData);
                setDownloadedMeditations(downloadedMediaArray);
                setOriginalMeditations(downloadedMediaArray);

                for (const track of downloadedMediaArray) {
                    const { id, media, title } = track;
                    await TrackPlayer.add([{
                        id: id,
                        url: media.url,
                        title: title,
                        artist: 'deadmau5',
                        album: 'while(1<2)',
                        genre: 'Progressive House, Electro House',
                        date: '2014-05-20T07:00:00+00:00',
                        artwork: 'http://example.com/cover.png',
                        duration: media.duration,
                    }]);

                }
            }
        } catch (error) {
            console.error('Error fetching downloaded media:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    }, []);

    const searchItem = useCallback((text) => {
        setSearchText(text);
        const filtered = originalMeditations.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setDownloadedMeditations(filtered);
    }, [originalMeditations]);

    useFocusEffect(
        useCallback(() => {
            getDownloadedMedia();
        }, [getDownloadedMedia])
    );

    return (
        <ImageBackground
            source={require("../../assets/images/ostatochni.jpg")}
            style={styles.background}
        >
            {loading ? (
                <Loader />
            ) : (
                <ScrollView style={styles.content}>
                    <View>
                        <Text style={styles.title}>Download Meditations</Text>
                        <Text style={[styles.text, { paddingTop: 4, paddingBottom: 12 }]}>
                            {downloadedMeditations.length} practices
                        </Text>
                        <Text style={[styles.text, { paddingBottom: 45 }]}>
                            All Meditations
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <SearchIcon />
                        <TextInput
                            style={styles.input}
                            value={searchText}
                            onChangeText={searchItem}
                            placeholder="Search"
                            placeholderTextColor="#949494"
                        />
                    </View>

                    <View style={styles.list}>
                        {downloadedMeditations.map(item => (
                            <Pressable key={item.id}>
                                <Card item={item} style={styles.backgroundCard} />
                            </Pressable>
                        ))}
                    </View>

                    <View style={styles.bottomPadding} />
                </ScrollView>
            )}
            <Menu />
        </ImageBackground>
    );
};

export default DownloadMeditations;
