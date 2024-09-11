import {
  ImageBackground,
  View,
  Text,
  Pressable,
  ScrollView,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/Header";
import styles from "../../styles/chakrasstyle";
import Next from "../../assets/icons/Next";
import Prev from "../../assets/icons/Prev";
import Like from "../../assets/icons/Like";
import Bell from "../../assets/icons/Bell";
import Notes from "../../assets/icons/Notes";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Card from "../Home/Card";

import stylesList from "../../styles/home";

const Chakra = () => {
  const navigation = useNavigation();

  const [activeAffirmation, setActiveAffirmation] = useState(0);

  const [currentStep, setCurrentStep] = useState(null);

  const affirmations = [
    {
      id: 1,
      text: "I am deserving of success and happiness, and I actively pursue my goals with unwavering determination. Every step I take brings me closer to realizing my dreams.",
    },
    {
      id: 2,
      text: "I have the strength and resilience to overcome any obstacle. Each challenge I encounter is a stepping stone to my personal growth and success.",
    },
    {
      id: 3,
      text: "My potential is limitless, and I trust in my ability to achieve greatness. I approach each day with a positive mindset and open heart.",
    },
    {
      id: 4,
      text: "I am confident in my skills and abilities, and I welcome new experiences as opportunities for advancement. Every moment is a chance to grow and shine.",
    },
    {
      id: 5,
      text: "I believe in my capacity to create the life I envision. I embrace each challenge with optimism, knowing that every experience contributes to my personal development and achievement.",
    },
  ];

  const [meditations, setMeditations] = useState([
    {
            "id": 15,
            "title": "Test1",
            "type": 432432,
            "description": "I am capable of achieving my dreams. Every challenge I face is an opportunity for growth, and I embrace each moment with confidence and positivity.",
            "category": {
                "id": 4,
                "title": "Wandering in Nature",
                "updatedAt": "2024-09-02T19:54:15.076Z",
                "createdAt": "2024-09-02T19:54:15.076Z"
            },
            "mainCategory": "sleep",
            "media": {
                "id": 22,
                "updatedAt": "2024-09-11T15:45:57.770Z",
                "createdAt": "2024-09-11T15:45:57.770Z",
                "url": "/media/a-space-journey-through-the-solar-system-153275.mp3",
                "filename": "a-space-journey-through-the-solar-system-153275.mp3",
                "mimeType": "audio/mpeg",
                "filesize": 519941,
                "width": null,
                "height": null,
                "focalX": null,
                "focalY": null
            },
            "image": {
                "id": 8,
                "updatedAt": "2024-09-11T15:46:11.608Z",
                "createdAt": "2024-09-11T15:46:11.608Z",
                "url": "/image/image-6.jpg",
                "filename": "image-6.jpg",
                "mimeType": "image/jpeg",
                "filesize": 19552,
                "width": 334,
                "height": 186,
                "focalX": 50,
                "focalY": 50
            },
            "updatedAt": "2024-09-11T15:46:15.055Z",
            "createdAt": "2024-09-11T15:46:15.055Z"
    },
    {
      "id": 14,
      "title": "Test",
      "type": 432,
      "description": "I am capable of achieving my dreams. Every challenge I face is an opportunity for growth, and I embrace each moment with confidence and positivity.",
      "category": {
          "id": 5,
          "title": "At the Beach",
          "updatedAt": "2024-09-02T19:54:25.739Z",
          "createdAt": "2024-09-02T19:54:25.739Z"
      },
      "mainCategory": "sleep",
      "media": {
          "id": 21,
          "updatedAt": "2024-09-11T15:31:46.105Z",
          "createdAt": "2024-09-11T15:31:46.105Z",
          "url": "/media/a-space-journey-through-the-solar-system-153274.mp3",
          "filename": "a-space-journey-through-the-solar-system-153274.mp3",
          "mimeType": "audio/mpeg",
          "filesize": 519941,
          "width": null,
          "height": null,
          "focalX": null,
          "focalY": null
      },
      "image": {
          "id": 7,
          "updatedAt": "2024-09-11T15:32:15.509Z",
          "createdAt": "2024-09-11T15:32:15.509Z",
          "url": "/image/tg_image_971686053.png",
          "filename": "tg_image_971686053.png",
          "mimeType": "image/png",
          "filesize": 59075,
          "width": 2212,
          "height": 192,
          "focalX": 50,
          "focalY": 50
      },
      "updatedAt": "2024-09-11T15:32:18.558Z",
      "createdAt": "2024-09-11T15:32:18.558Z"
  },
  {
    "id": 13,
    "title": "Thunderstorm",
    "type": 12,
    "description": "I am capable of achieving my dreams. Every challenge I face is an opportunity for growth, and I embrace each moment with confidence and positivity.",
    "category": {
        "id": 4,
        "title": "Wandering in Nature",
        "updatedAt": "2024-09-02T19:54:15.076Z",
        "createdAt": "2024-09-02T19:54:15.076Z"
    },
    "mainCategory": "relax",
    "media": {
        "id": 18,
        "updatedAt": "2024-09-06T18:32:03.461Z",
        "createdAt": "2024-09-06T18:32:03.461Z",
        "url": "/media/808_fm_102bpm-159549.mp3",
        "filename": "808_fm_102bpm-159549.mp3",
        "mimeType": "audio/mpeg",
        "filesize": 801645,
        "width": null,
        "height": null,
        "focalX": null,
        "focalY": null
    },
    "image": {
        "id": 6,
        "updatedAt": "2024-09-03T09:07:04.436Z",
        "createdAt": "2024-09-03T09:07:04.436Z",
        "url": "/image/image-5.jpg",
        "filename": "image-5.jpg",
        "mimeType": "image/jpeg",
        "filesize": 13636,
        "width": 140,
        "height": 170,
        "focalX": 50,
        "focalY": 50
    },
    "updatedAt": "2024-09-06T18:31:27.198Z",
    "createdAt": "2024-09-03T09:07:08.401Z"
},
  ])

  const handleSwitchAffirmation = (operation) => {
    if (operation === "next") {
      setActiveAffirmation((prev) => (prev + 1) % affirmations.length);
    } else {
      setActiveAffirmation((prev) => (prev - 1 + affirmations.length) % affirmations.length);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
        resizeMode="repeat"
      >
        <Header />
        <View>
            <View style={styles.affirmationsContainer}>
              <Text style={styles.affirmation}>{affirmations[activeAffirmation].text}</Text>
              <View style={styles.affirmationNavigation}>
                <Pressable onPress={() => handleSwitchAffirmation("prev")}>
                  <Prev />
                </Pressable>
                
                <Like />
                <Pressable onPress={() => handleSwitchAffirmation("next")}>
                  <Next />
                </Pressable>
              </View>
            </View>
        </View>

            <View style={[stylesList.buttonMore,{paddingHorizontal:24,marginTop:30}]}>
                <Text style={stylesList.textMore}>New meditations</Text>
                <Pressable onPress={() => navigation.navigate("Meditations")} >
                  <Text style={stylesList.textButtonMore}>See all</Text>
                </Pressable>
              </View>


        <View style={[stylesList.stylesList, {gap:18,  paddingHorizontal: 18}]}>
                {meditations.slice(0,3).map((item, index) =>(
                      <Card key={index} title={item.title} options={item.mainCategory} audio={item.media} active={currentStep} index={index} setCurrentStep={setCurrentStep} />
                    ))}
                </View>
        <View style={styles.bottomNavContainer}>
          <Pressable onPress={() => navigation.navigate("Notifications")}>
          <Image source={require("../../assets/images/notify.png")} ></Image>

          </Pressable>
          <Pressable onPress={() => navigation.navigate("Notes")}>
        <Image source={require("../../assets/images/notes.png")} ></Image>
          </Pressable>
        </View>


      </ImageBackground>
    </SafeAreaView>
  )
}

export default Chakra;