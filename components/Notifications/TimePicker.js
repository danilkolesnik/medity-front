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

const TimePicker = ({ onTimeChange, hour,minute}) => {

  const [selectedHour, setSelectedHour] = useState(hour);
  const [selectedMinute, setSelectedMinute] = useState(minute);

  const hours = generateTimeArray(0, 23);
  const minutes = generateTimeArray(0, 59);

  const hourRef = useRef();
  const minuteRef = useRef();

  const animatedHourValue = useRef(new Animated.Value(0)).current;
  const animatedMinuteValue = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    // Прокрутка к начальному значению для часов и минут
    const hourIndex = hours.indexOf(selectedHour);
    const minuteIndex = minutes.indexOf(selectedMinute);

    if (hourRef.current) {
      hourRef.current.scrollTo({ y: hourIndex * ITEM_HEIGHT, animated: false });
      animatedHourValue.setValue(hourIndex * ITEM_HEIGHT); // Синхронизация с анимацией
    }
    if (minuteRef.current) {
      minuteRef.current.scrollTo({ y: minuteIndex * ITEM_HEIGHT, animated: false });
      animatedMinuteValue.setValue(minuteIndex * ITEM_HEIGHT); // Синхронизация с анимацией
    }
  }, []);

  const renderPicker = (itemsArray, animatedValue, setSelected, type, selectedItem) => {
    return (
      <Animated.ScrollView
        ref={type === 'hour' ? hourRef : minuteRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        snapToAlignment="center"
        onMomentumScrollEnd={(event) => handleScroll(event, setSelected, itemsArray, type)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
          { useNativeDriver: false } // Отключаем native driver для анимации цвета
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

          const textColor = animatedValue.interpolate({
            inputRange,
            outputRange: ['rgba(255, 255, 255, 1)', 'rgba(26, 26, 26, 1)', 'rgba(255, 255, 255, 1)'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`${item}-${index}`}
              style={[
                styles.item,
                { transform: [{ scale }], opacity },
              ]}
            >
              <Animated.Text style={[styles.itemText, { color: textColor }]}>
                {item}
              </Animated.Text>
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
        {renderPicker(hours, animatedHourValue, setSelectedHour, 'hour', selectedHour)}
      </View>
      <View style={styles.pickerContainer}>
        {renderPicker(minutes, animatedMinuteValue, setSelectedMinute, 'minute', selectedMinute)}
      </View>
      <Text style={styles.separator}>PM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    paddingVertical: 0,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    color: '#FFFFFF', // Цвет по умолчанию
  },
  separator: {
    fontSize: 14,
    color: '#1A1A1A',
    paddingHorizontal: 10,
    fontWeight: '700',
  },
  background: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 211,
    height: 56,
    zIndex: 0,
    borderRadius: 15,
  },
});

export default TimePicker;
