import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Animated } from 'react-native';

const ITEM_HEIGHT = 60; // Высота каждого элемента в таймпикере

const generateTimeArray = (start, end) => {
  let timeArray = [];
  for (let i = start; i <= end; i++) {
    timeArray.push(i < 10 ? `0${i}` : `${i}`);
  }
  return timeArray;
};

const TimePicker = ({ onTimeChange }) => {
  const [selectedHour, setSelectedHour] = useState('10');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const hours = generateTimeArray(0, 23); // Формат 24 часа
  const minutes = generateTimeArray(0, 59);

  const hourRef = useRef(new Animated.Value(0)).current;
  const minuteRef = useRef(new Animated.Value(0)).current;

  const handleScroll = (event, setSelected, itemsArray, type) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const selectedIndex = Math.round(offsetY / ITEM_HEIGHT);
    const selectedItem = itemsArray[selectedIndex];

    setSelected(selectedItem);

    const selectedTime = `${type === 'hour' ? selectedItem : selectedHour}:${
      type === 'minute' ? selectedItem : selectedMinute
    }`;

    onTimeChange(selectedTime);
  };

  const scrollToInitialValue = (animatedValue, selectedValue, itemsArray) => {
    const index = itemsArray.indexOf(selectedValue);
    if (index !== -1) {
      animatedValue.setValue(ITEM_HEIGHT * index);
    }
  };

  useEffect(() => {
    scrollToInitialValue(hourRef, selectedHour, hours);
    scrollToInitialValue(minuteRef, selectedMinute, minutes);
  }, []);

  const renderPicker = (itemsArray, animatedValue, setSelected, type) => {
    return (
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        snapToAlignment="center"
        onMomentumScrollEnd={(event) => handleScroll(event, setSelected, itemsArray, type)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={{ height: ITEM_HEIGHT }} />
        {itemsArray.map((item, index) => {
          const inputRange = [
            (index - 1) * ITEM_HEIGHT,
            index * ITEM_HEIGHT,
            (index + 1) * ITEM_HEIGHT,
          ];

          const scale = animatedValue.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: 'clamp',
          });

          const opacity = animatedValue.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={`${item}-${index}`} style={[styles.item, { transform: [{ scale }], opacity }]}>
              <Text style={styles.itemText}>{item}</Text>
            </Animated.View>
          );
        })}
        <View style={{ height: ITEM_HEIGHT }} />
      </Animated.ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.pickerContainer}>
        {renderPicker(hours, hourRef, setSelectedHour, 'hour')}
      </View>
      <View style={styles.pickerContainer}>
        {renderPicker(minutes, minuteRef, setSelectedMinute, 'minute')}
      </View>
      <Text style={styles.separator}>PM</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

    borderRadius: 10,
  },
  pickerContainer: {
    height: ITEM_HEIGHT * 3,
    overflow: 'hidden',
    width: 75,
  },
  scrollViewContent: {
    paddingVertical: 0, // Чтобы все элементы были в пределах контейнера
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    color: '#1A1A1A',
  },
  selectedItemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  separator: {
    fontSize: 14,
    color: '#1A1A1A',
    paddingHorizontal: 10,
    fontWeight:"700"
  },
  background:{
    position:'absolute',
    backgroundColor:"#fff",
    width:211,
    height:56,
    zIndex: 0,
    borderRadius:15
  }
});

export default TimePicker;
