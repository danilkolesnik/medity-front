import { supabase } from "./supabase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { startOfDay, startOfWeek, startOfMonth, endOfDay, endOfWeek, endOfMonth } from 'date-fns';

const aggregateListeningStats = async (period, currentDate) => {
  let startDate, endDate;

  const userId = await AsyncStorage.getItem('userId');

  if (period === 'day') {
    startDate = startOfDay(currentDate);
    endDate = endOfDay(currentDate);
  } else if (period === 'week') {
    startDate = startOfWeek(currentDate);
    endDate = endOfWeek(currentDate);
  } else if (period === 'month') {
    startDate = startOfMonth(currentDate);
    endDate = endOfMonth(currentDate);
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
    return [];
  }

  const aggregatedData = {};

  data.forEach((item) => {
    const date = new Date(item.date);

    if (period === 'day') {
      const hour = date.getHours();
      aggregatedData[hour] = (aggregatedData[hour] || 0) + item.second;
    } else if (period === 'week') {
      const day = date.getDay();
      aggregatedData[day] = (aggregatedData[day] || 0) + item.second;
    } else if (period === 'month') {
      const week = Math.ceil(date.getDate() / 7);
      aggregatedData[week] = (aggregatedData[week] || 0) + item.second;
    }
  });

  return aggregatedData;
};

export default aggregateListeningStats;
