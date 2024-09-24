import { useState,useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View, Text, Pressable,TouchableOpacity,Animated} from "react-native";
import { useRoute,useNavigation  } from '@react-navigation/native';

import {SERVER} from '../../constants/async'
import axios from "axios";

import styles from "../../styles/quiz";

const questions = [
    {
      question: 'How often do you practice meditation?',
      options: ['3-4 times a week', 'I’m practice meditation everyday!', '1-2 times a week', 'Less often'],
    },
    {
        question: 'How often do you practice meditation2?',
        options: ['3-4 times a week', 'I’m practice meditation everyday!', '1-2 times a week', 'Less often'],
    },
    {
        question: 'How often do you practice meditation3?',
        options: ['3-4 times a week', 'I’m practice meditation everyday!', '1-2 times a week', 'Less often'],
    },
];

const Quiz = () =>{

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const navigation = useNavigation()

  const handleNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
        navigation.push('Home')
    }
  };

  const handleOptionSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentStep];


  const getQuestions = async() =>{
    try {
        const {data} = await axios.get(`http://10.0.2.2:3000/api/meditation`,
        { 
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
        return res
    } catch (error) {
        console.log(error);      
    }
  }

  useEffect(() =>{
    getQuestions()
    
  },[]) 

    return(
        <>
            <ImageBackground
                source={require("../../assets/images/ostatochni.jpg")}
                style={styles.background}
            >

            <Text style={styles.title}>Let us hear{"\n"}about you!</Text>

            <View style={styles.containerSlider}>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.optionButton,
                        answers[currentStep] === option && styles.activeOptionButton,
                    ]}
                    onPress={() => handleOptionSelect(option)}
                >
                <Text style={[
                    styles.optionText,
                    answers[currentStep] === option && styles.activeOptionText,
                ]}>{option}</Text>
                </TouchableOpacity>
            ))}

            </View>

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

                <Pressable onPress={handleNextStep} style={styles.nextButton} >
                    <Text style={styles.nextButtonText}>Next Step</Text>
                </Pressable>
            </View>
           
            </ImageBackground>
  
        </>
    )
}

export default Quiz