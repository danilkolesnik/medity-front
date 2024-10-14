import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { formatSecondsToMinutes } from '../../helpers/miscellaneous';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

export const PlayerProgressBar = () => {
  const { position, duration } = useProgress(); // Получаем позицию и длительность трека
  const progress = useSharedValue(0); // Shared value для прогресса
  const previousPosition = useRef(position); // Ссылка на предыдущую позицию, чтобы не обновлять слишком часто

  useEffect(() => {
    if (duration > 0) {
      // Обновляем прогресс только при изменении позиции, чтобы избежать лишних обновлений
      if (Math.abs(position - previousPosition.current) > 0.1) { // обновляем, если изменения более чем на 0.1
        previousPosition.current = position;
        progress.value = withTiming(position / duration, { duration: 300 }); // Плавная анимация
      }
    }
  }, [position, duration]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`, // Плавно изменяем ширину прогресс-бара
    };
  });

  const trackElapsedTime = formatSecondsToMinutes(position);
  const trackRemainingTime = formatSecondsToMinutes(duration - position);

  return (
    <View style={styles.container}>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{trackElapsedTime}</Text>
        <Text style={[styles.timeText, { color: 'rgba(255,255,255,0.5)' }]}>
          {trackRemainingTime}
        </Text>
      </View>
      
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#050505',
	paddingVertical:26,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingBottom: 10,
  },
  timeText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Urbanist-Regular',
    fontWeight: '400',
    color: '#fff',
  },
  progressBarContainer: {
    backgroundColor: '#565656',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#BBBBBB',
    borderRadius: 4,
  },
});
