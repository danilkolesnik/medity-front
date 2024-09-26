import { getWeek } from 'date-fns';

const generateChartData = (aggregatedData, period) => {
  const chartData = [];

  if (period === 'day') {
    for (let hour = 0; hour < 24; hour++) {
      chartData.push({
        stacks: [
          {
            value: aggregatedData[hour] || 0,
            color: '#9B9B9B'
          }
        ],
        label: `${hour}:00`,
        labelTextStyle: {
          color: "#94A3B8",
          fontSize: 10,
          fontWeight: "400",
          fontFamily: 'Urbanist-Regular'
        }
      });
    }
  } else if (period === 'week') {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let day = 0; day < 7; day++) {
      chartData.push({
        stacks: [
          {
            value: aggregatedData[day] || 0,
            color: '#9B9B9B'
          }
        ],
        label: daysOfWeek[day],
        labelTextStyle: {
          color: "#94A3B8",
          fontSize: 10,
          fontWeight: "400",
          fontFamily: 'Urbanist-Regular'
        }
      });
    }
  } else if (period === 'month') {
    for (let week = 1; week <= 4; week++) {
      chartData.push({
        stacks: [
          {
            value: aggregatedData[week] || 0,
            color: '#9B9B9B'
          }
        ],
        label: `Week ${week}`,
        labelTextStyle: {
          color: "#94A3B8",
          fontSize: 10,
          fontWeight: "400",
          fontFamily: 'Urbanist-Regular'
        }
      });
    }
  }

  return chartData;
};

export default generateChartData;
