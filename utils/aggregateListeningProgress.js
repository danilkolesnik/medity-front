import { supabase } from "./supabase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { startOfDay, subDays, endOfDay } from 'date-fns';

const aggregateListeningProgress = async (period, currentDate) => {
  let startDate, endDate;

  const userId = await AsyncStorage.getItem('userId');

  if (period === '9days') {
    startDate = subDays(currentDate, 8);
    endDate = endOfDay(currentDate);
  } else if (period === '7days') {
    startDate = subDays(currentDate, 6);
    endDate = endOfDay(currentDate);
  } else {
    throw new Error('Unsupported period');
  }

  const { data, error } = await supabase
    .from('listening_stats')
    .select('*')
    .eq('user_id', userId)
    .gte('date', startDate.toISOString())
    .lte('date', endDate.toISOString())
    .order('date', { ascending: true });
    
  if (error) {
    console.error('Ошибка при получении данных:', error);
    return {
      averageSecondsPerDay: 0,
      aggregatedData: {},
    };
  }

  const aggregatedData = {};

  data.forEach((item) => {
    const date = new Date(item.date);
    const day = date.getDate();
    aggregatedData[day] = (aggregatedData[day] || 0) + item.second;
  });

  const totalSeconds = Object.values(aggregatedData).reduce((sum, seconds) => sum + seconds, 0);
  const averageSecondsPerDay = totalSeconds / (period === '9days' ? 9 : 7);

  return {
    averageSecondsPerDay,
    aggregatedData,
  };
};

export default aggregateListeningProgress;
