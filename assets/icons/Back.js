import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Back = ({ width = 19, height = 21 }) => {
  return (
    <View>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
  >
    <G filter="url(#a)">
      <Rect width={48} height={48} fill="#fff" fillOpacity={0.15} rx={24} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m27.5 31-7-7 7-7"
      />
    </G>
    <Defs></Defs>
  </Svg>
    </View>
  
  );
};

export default Back;