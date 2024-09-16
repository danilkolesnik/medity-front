import { useState, useEffect } from "react";

import { View,Text, Pressable } from "react-native";

import { BarChart } from "react-native-gifted-charts";
import Rigth from "../../assets/icons/Rigth";

import styles from "../../styles/profile";

const Charts = ({activeData}) =>{

    const stackDataWeek = [
        {
          stacks: [
            {
                value: 250,
                color: '#9B9B9B'
            }
          ],
       
          label: 'Sun',

          labelTextStyle:{
            color:"#94A3B8",
            fontSize:10,
            fontWeight:"400",
            fontFamily:'Urbanist-Regular'
         }
        },
        {
          stacks: [
            {
                value: 500,
                color: '#9B9B9B'
            },
           ],
          label: 'Mon',
          labelTextStyle:{
            color:"#94A3B8",
            fontSize:10,
            fontWeight:"400",
            fontFamily:'Urbanist-Regular'
        }
        },
        {
          stacks: [
            {
                value: 745,
                color: '#9B9B9B'
            }
        ],
          label: 'Tue',
          labelTextStyle:{
            color:"#94A3B8",
            fontSize:10,
            fontWeight:"400",
            fontFamily:'Urbanist-Regular'
        }
        },
        {
          stacks: [
            {
                value: 320,
                color: '#9B9B9B'
            }
        ],
          label: 'Wed',
          labelTextStyle:{
            color:"#94A3B8",
            fontSize:10,
            fontWeight:"400",
            fontFamily:'Urbanist-Regular'
        }
        },
        {
            stacks: [
              {
                  value: 200,
                  color: '#9B9B9B'
              }
          ],
            label: 'Thu',
            labelTextStyle:{
                color:"#94A3B8",
                fontSize:10,
                fontWeight:"400",
                fontFamily:'Urbanist-Regular'
            }
          },
          {
            stacks: [
              {
                  value: 620,
                  color: '#9B9B9B'
              }
          ],
            label: 'Fri',
            labelTextStyle:{
                color:"#94A3B8",
                fontSize:10,
                fontWeight:"400",
                fontFamily:'Urbanist-Regular'
            }
          },
          {
            stacks: [
              {
                  value: 320,
                  color: '#9B9B9B'
              }
          ],
            label: 'Sat',
            labelTextStyle:{
                color:"#94A3B8",
                fontSize:10,
                fontWeight:"400",
                fontFamily:'Urbanist-Regular'
            }
          
          },
    ];

    const stackData24Hours = [
      {
          stacks: [
              {
                  value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                  color: '#9B9B9B'
              }
          ],
          label: '00:00',
          labelTextStyle: {
              color: "#94A3B8",
              fontSize: 10,
              fontWeight: "400",
              fontFamily: 'Urbanist-Regular'
          }
      },
      {
          stacks: [
              {
                  value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                  color: '#9B9B9B'
              }
          ],
          label: '04:00',
          labelTextStyle: {
              color: "#94A3B8",
              fontSize: 10,
              fontWeight: "400",
              fontFamily: 'Urbanist-Regular'
          }
      },
      {
          stacks: [
              {
                  value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                  color: '#9B9B9B'
              }
          ],
          label: '08:00',
          labelTextStyle: {
              color: "#94A3B8",
              fontSize: 10,
              fontWeight: "400",
              fontFamily: 'Urbanist-Regular'
          }
      },
      {
          stacks: [
              {
                  value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                  color: '#9B9B9B'
              }
          ],
          label: '12:00',
          labelTextStyle: {
              color: "#94A3B8",
              fontSize: 10,
              fontWeight: "400",
              fontFamily: 'Urbanist-Regular'
          }
      },
      {
          stacks: [
              {
                  value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                  color: '#9B9B9B'
              }
          ],
          label: '16:00',
          labelTextStyle: {
              color: "#94A3B8",
              fontSize: 10,
              fontWeight: "400",
              fontFamily: 'Urbanist-Regular'
          }
      },
      {
          stacks: [
              {
                  value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                  color: '#9B9B9B'
              }
          ],
          label: '20:00',
          labelTextStyle: {
              color: "#94A3B8",
              fontSize: 10,
              fontWeight: "400",
              fontFamily: 'Urbanist-Regular'
          }
      }
  ];

  const stackDataMonth = [
    {
        stacks: [
            {
                value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                color: '#9B9B9B'
            }
        ],
        label: 'Week 1',
        labelTextStyle: {
            color: "#94A3B8",
            fontSize: 10,
            fontWeight: "400",
            fontFamily: 'Urbanist-Regular'
        }
    },
    {
        stacks: [
            {
                value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                color: '#9B9B9B'
            }
        ],
        label: 'Week 2',
        labelTextStyle: {
            color: "#94A3B8",
            fontSize: 10,
            fontWeight: "400",
            fontFamily: 'Urbanist-Regular'
        }
    },
    {
        stacks: [
            {
                value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                color: '#9B9B9B'
            }
        ],
        label: 'Week 3',
        labelTextStyle: {
            color: "#94A3B8",
            fontSize: 10,
            fontWeight: "400",
            fontFamily: 'Urbanist-Regular'
        }
    },
    {
        stacks: [
            {
                value: Math.floor(Math.random() * 1000), // Рандомное значение от 0 до 999
                color: '#9B9B9B'
            }
        ],
        label: 'Week 4',
        labelTextStyle: {
            color: "#94A3B8",
            fontSize: 10,
            fontWeight: "400",
            fontFamily: 'Urbanist-Regular'
        }
    }
];

    const switchData = () =>{
      switch (activeData) {
        case 1:
            return stackData24Hours
        case 2:
            return stackDataWeek
        case 3:
            return stackDataMonth
        default:
          break;
      }
    }
    return (
        <View style={styles.chartsContent}>
            <View style={styles.chartsButtons}>
              <Pressable style={{
                transform: [{ rotate: '180deg' }],    
              }}>
                <Rigth></Rigth>
              </Pressable>
              <Text style={styles.chartsText}>Nov 22-29, 2023</Text>
              <Pressable>
                <Rigth></Rigth>
              </Pressable>
            </View>
            <BarChart
                barWidth={18}
                noOfSections={3}
                barBorderRadius={6}
                frontColor="#9B9B9B"
                stackData={switchData()}
                yAxisThickness={0}
                xAxisThickness={0}
                yAxisTextStyle={{
                    color:"#94A3B8",
                    fontSize:8,
                    fontWeight:"400",
                    fontFamily:'Urbanist-Regular'
                }}
               
            />
           
        </View>
    );
}

export default Charts