import {
  ImageBackground,
  View,
  Text,
  Pressable,
  ScrollView,
  Image
} from "react-native";
import Header from "../Header/Header";
import styles from "../../styles/chakrasstyle";
import Next from "../../assets/icons/Next";
import Prev from "../../assets/icons/Prev";
import Like from "../../assets/icons/Like";
import Bell from "../../assets/icons/Bell";
import Notes from "../../assets/icons/Notes";
import { useState,useCallback } from "react";
import { useNavigation,useRoute,useFocusEffect } from "@react-navigation/native";

import Card from "../Home/Card";

import stylesList from "../../styles/home";

const Chakra = () => {

  const currentRoute = "Chakras"

  const navigation = useNavigation();
  const route = useRoute()

  const {item} = route.params

  const [activeAffirmation, setActiveAffirmation] = useState(0);

  const [currentStep, setCurrentStep] = useState(null);


  const handleSwitchAffirmation = (operation) => {
    if (operation === "next") {
      setActiveAffirmation((prev) => (prev + 1) % item.affirmations.length);
    } else {
      setActiveAffirmation((prev) => (prev - 1 + item.affirmations.length) % item.affirmations.length);
    }
  };

  return (

      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
        resizeMode="repeat"
      >
       
        <ScrollView contentContainerStyle={stylesList.content}>
        <Header currentRoute={currentRoute} currentTitle={item.title} currentBack={true} />
        <View>
            <View style={styles.affirmationsContainer}>
              <Text style={styles.affirmation}>{item.affirmations[activeAffirmation].affirmation}</Text>
              <View style={styles.affirmationNavigation}>
                <Pressable onPress={() => handleSwitchAffirmation("prev")}>
                  <Prev />
                </Pressable>
                
                {/* <Like /> */}
                <Pressable onPress={() => handleSwitchAffirmation("next")}>
                  <Next />
                </Pressable>
              </View>
            </View>
        </View>
        <View style={[stylesList.buttonMore]}>
                <Text style={stylesList.textMore}>Meditations</Text>
                
              </View>

              <View style={[stylesList.stylesList, {gap:18}]}>
                {item.meditations.map((item, index) =>(
                      <Card key={index} title={item.title} options={item.mainCategory} audio={item.media} active={currentStep} index={index} type={item.type} setCurrentStep={setCurrentStep} />
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


        </ScrollView>
       

            


  

      </ImageBackground>
  )
}

export default Chakra;