import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View, Text, Pressable, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import Loader from "../Loader/Loader";
import { SERVER } from '../../constants/async';
import axios from "axios";
import styles from "../../styles/quiz";

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const navigation = useNavigation();

  const handleNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.push('Home');
    }
  };

  const handleOptionSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentStep];

  const getQuestions = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${SERVER}/api/question`);
      setQuestions(data.docs);
    } catch (error) {
      console.error("Error fetching questions:", error);
      // Optionally, you can set an error state here to display an error message to the user
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/ostatochni.jpg")}
        style={styles.background}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <Text style={styles.title}>Let us hear{"\n"}about you!</Text>
            {questions.length > 0 && currentQuestion ? (
              <View style={styles.containerSlider}>
                <Text style={styles.question}>{currentQuestion.question}</Text>
                {currentQuestion.options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optionButton,
                      answers[currentStep] === option.option && styles.activeOptionButton,
                    ]}
                    onPress={() => handleOptionSelect(option.option)}
                  >
                    <Text style={[
                      styles.optionText,
                      answers[currentStep] === option.option && styles.activeOptionText,
                    ]}>{option.option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <Text style={styles.errorText}>No questions available.</Text>
            )}
            <View style={styles.buttons}>
              <View style={styles.stepIndicator}>
                {questions.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.stepDot,
                      index === currentStep ? styles.activeStepDot : styles.inactiveStepDot,
                    ]}
                  />
                ))}
              </View>
              <Pressable onPress={handleNextStep} style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next Step</Text>
              </Pressable>
            </View>
          </>
        )}
      </ImageBackground>
    </>
  );
};

export default Quiz;
