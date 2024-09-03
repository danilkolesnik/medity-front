import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Setting = ({ width = 19, height = 21 }) => {
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
        strokeWidth={2}
        d="M24 32a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM24 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM24 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
    </View>
  
  );
};

export default Setting;