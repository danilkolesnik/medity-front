import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import aggregateListeningStats from "../../utils/aggregateListeningStats";
import generateChartData from "../../utils/generateChartData";
import Rigth from "../../assets/icons/Rigth";
import styles from "../../styles/profile";
import { startOfDay, startOfWeek, startOfMonth, addDays, addWeeks, addMonths, format } from 'date-fns';

const Charts = ({ activeData }) => {
  const [chartData, setChartData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [periodText, setPeriodText] = useState(getPeriodText(activeData, new Date()));

  useEffect(() => {
    const fetchData = async () => {
      const aggregatedData = await aggregateListeningStats(activeData, currentDate);
      const data = generateChartData(aggregatedData, activeData);
      setChartData(data);
    };

    fetchData();
  }, [activeData, currentDate]);

  useEffect(() => {
    setPeriodText(getPeriodText(activeData, currentDate));
  }, [activeData, currentDate]);

  const handlePeriodChange = (direction) => {
    let newDate;
    if (direction === 'left') {
      switch (activeData) {
        case 'day':
          newDate = addDays(currentDate, -1);
          break;
        case 'week':
          newDate = addWeeks(currentDate, -1);
          break;
        case 'month':
          newDate = addMonths(currentDate, -1);
          break;
        default:
          newDate = currentDate;
      }
    } else if (direction === 'right') {
      switch (activeData) {
        case 'day':
          newDate = addDays(currentDate, 1);
          break;
        case 'week':
          newDate = addWeeks(currentDate, 1);
          break;
        case 'month':
          newDate = addMonths(currentDate, 1);
          break;
        default:
          newDate = currentDate;
      }
    }
    setCurrentDate(newDate);
  };

  return (
    <View style={styles.chartsContent}>
      <View style={styles.chartsButtons}>
        <Pressable onPress={() => handlePeriodChange('left')} style={{ transform: [{ rotate: '180deg' }] }}>
          <Rigth />
        </Pressable>
        <Text style={styles.chartsText}>{periodText}</Text>
        <Pressable onPress={() => handlePeriodChange('right')}>
          <Rigth />
        </Pressable>
      </View>
      <BarChart
        barWidth={18}
        noOfSections={3}
        barBorderRadius={6}
        frontColor="#9B9B9B"
        stackData={chartData}
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisTextStyle={{
          color: "#94A3B8",
          fontSize: 8,
          fontWeight: "400",
          fontFamily: 'Urbanist-Regular'
        }}
      />
    </View>
  );
};

const getPeriodText = (period, date) => {
  switch (period) {
    case 'day':
      return format(date, 'EEEE, MMMM d, yyyy');
    case 'week':
      const startOfWeekDate = startOfWeek(date);
      const endOfWeekDate = addDays(startOfWeekDate, 6);
      return `${format(startOfWeekDate, 'MMM d')} - ${format(endOfWeekDate, 'MMM d, yyyy')}`;
    case 'month':
      return format(date, 'MMMM yyyy');
    default:
      return '';
  }
};

export default Charts;
