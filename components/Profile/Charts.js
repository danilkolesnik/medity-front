import { useState, useEffect } from "react";

import { View } from "react-native";

import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

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

    const stackDataDay = [
        {
            stacks: [
              {
                  value: 250,
              }
            ],
         
            label: 'Jan',
          },
          {
            stacks: [
              {
                  value: 500,
              },
             ],
            label: 'Mar',
          },
          {
            stacks: [
              {
                  value: 745,
              }
          ],
            label: 'Feb',
          },
          {
            stacks: [
              {
                  value: 320,

              }
          ],
            label: 'Mar',
           
          },
    ]
    return (
        <View style={styles.chartsContent}>
            <BarChart
                barWidth={18}
                noOfSections={3}
                barBorderRadius={6}
                frontColor="#9B9B9B"
                stackData={stackDataWeek}
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