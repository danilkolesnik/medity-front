import { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Card from "./Card";
import Menu from '../Menu/menu'
import SearchIcon from "../../assets/icons/Search";
import Play from "../../assets/icons/Play";

import styles from "../../styles/home";
const Home = ({navigation}) =>{

    const data = [
        {id:1,title:'Meditation for deep sleep',options:['15 min','Evening','Relax']},
        {id:2,title:'Meditation for deep sleep',options:['15 min','Evening','Relax']},
        {id:3,title:'Meditation for deep sleep',options:['15 min','Evening','Relax']}
    ]

    const [currentStep, setCurrentStep] = useState(null);

    const [searchText, setSearchText] = useState("");

    return (
      <SafeAreaView style={styles.conteiner}>
        <ImageBackground
          source={require("../../assets/images/ostatochni.jpg")}
          style={styles.background}
        >
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.title}>Welcome!</Text>

            <View style={styles.inputContainer}>
              <SearchIcon />
              <TextInput
                style={styles.input}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search"
                placeholderTextColor="#949494"
              />
            </View>

            <View style={styles.contentCard}>
              <View style={styles.cardConteiner}>
                <Text style={styles.cardTitle}>Get Back to Sleep</Text>
                <View style={styles.contentBotton}>
                  <Text style={styles.contentBottonText}>10 min</Text>
                  <Play></Play>
                </View>
              </View>
              <View style={styles.cardConteiner}>
                <Text style={styles.cardTitle}>Get Back to Sleep</Text>
                <View style={styles.contentBotton}>
                  <Text style={styles.contentBottonText}>10 min</Text>
                  <Play></Play>
                </View>
              </View>
            </View>

            <View style={styles.buttonMore}>
              <Text style={styles.textMore}>New meditations</Text>
              <Pressable>
                <Text style={styles.textButtonMore}>See all</Text>
              </Pressable>
            </View>

            <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>{
              setCurrentStep(index)
            }}
          >
            <Card title={item.title} options={item.options} active={currentStep} index={index} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
            <View style={styles.buttonMore}>
              <Text style={styles.textMore}>Your progress</Text>
              <Pressable>
                <Text style={styles.textButtonMore}>View full</Text>
              </Pressable>
            </View>

            <Text style={styles.progressStatusTittle}>Weekly progress</Text>
            <Text style={styles.progressStatusText}>
              On average, you practiced mindfulness{"\n"}{" "}
              <Text style={{ fontWeight: "700" }}>4%</Text> more this week
              compared to last.
            </Text>

            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 12,
                }}
              >
                <Text style={styles.progressTitle}>9</Text>
                <View
                  style={{
                    paddingLeft: 6,
                  }}
                >
                  <Text style={styles.progressText}>min/day</Text>
                  <Text style={[styles.progressText, { fontSize: 10 }]}>
                    This week
                  </Text>
                </View>
              </View>
              <ProgressBar
                progress={0.9}
                color="#BBBBBB"
                style={{
                  backgroundColor: "#565656",
                  height: 8,
                  borderRadius: 4,
                }}
              />
            </View>
            <View
              style={{
                paddingTop: 27,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 12,
                }}
              >
                <Text style={styles.progressTitle}>7</Text>
                <View
                  style={{
                    paddingLeft: 6,
                  }}
                >
                  <Text style={styles.progressText}>min/day</Text>
                  <Text style={[styles.progressText, { fontSize: 10 }]}>
                    This week
                  </Text>
                </View>
              </View>
              <ProgressBar
                progress={0.9}
                color="#BBBBBB"
                style={{
                  backgroundColor: "#565656",
                  height: 8,
                  borderRadius: 4,
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>

        <Menu />
      </SafeAreaView>
    );
}

export default Home