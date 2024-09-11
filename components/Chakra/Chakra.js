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

const Chakra = () => {
  const navigation = useNavigation();

  const [activeAffirmation, setActiveAffirmation] = useState(0);
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