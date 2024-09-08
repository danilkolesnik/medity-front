import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MovingText = ({ text }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const shouldAnimate = textWidth > screenWidth;

  useEffect(() => {
    if (shouldAnimate) {
      Animated.loop(
        Animated.timing(animation, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [animation, shouldAnimate]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-textWidth, screenWidth],
  });

  return (
    <View style={styles.container}>
      {shouldAnimate && (
        <>
          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
            style={styles.gradientLeft}
            pointerEvents="none"
          />
          <LinearGradient
            colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
            style={styles.gradientRight}
            pointerEvents="none"
          />
        </>
      )}

      <Animated.View
        style={[
          styles.textWrapper,
          {
            transform: [{ translateX }],
            width: textWidth, // Устанавливаем ширину для анимации
          },
        ]}
      >
        <Text
          style={styles.text}
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setTextWidth(width); // Получаем ширину текста
          }}
        >
          {text}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50, // Высота контейнера
    justifyContent: 'center',
    overflow: 'hidden', // Прячем текст, выходящий за границы контейнера
    position: 'relative', // Для наложения градиентов и текста
  },
  textWrapper: {
    flexDirection: 'row',
    position: 'absolute', // Анимированный текст будет двигаться поверх
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  gradientLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50, // Ширина градиента слева
    height: '100%',
  },
  gradientRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50, // Ширина градиента справа
    height: '100%',
  },
});

export default MovingText;
