import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

const Burger = ({ width = 19, height = 21 }) => {
  return (
    <View>
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={48}
    fill="none"
  >
    <G filter="url(#a)">
      <Rect
        width={45.035}
        height={48}
        x={4.482}
        fill="#565656"
        rx={22.518}
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.988 18h14.024m-14.024 6h14.024m-14.024 6h14.024"
      />
    </G>
    <Defs></Defs>
  </Svg>
    </View>
  
  );
};

export default Burger;