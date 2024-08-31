import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Rigth = ({ width = 19, height = 21 }) => {
  return (
    <View>
   <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.5 1 5 5-5 5"
    />
  </Svg>
    </View>
  
  );
};

export default Rigth;