import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs,ClipPath,Circle } from "react-native-svg"

const Add = ({ width = 37, height = 37 }) => {
  return (
    <View>
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={90}
    height={90}
    fill="none"
  
  >
    <G filter="url(#a)">
      <Circle cx={45} cy={40} r={35} fill="#252525" />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#fff"
        d="M57 42H47v10c0 1.1-.9 2-2 2s-2-.9-2-2V42H33c-1.1 0-2-.9-2-2s.9-2 2-2h10V28c0-1.1.9-2 2-2s2 .9 2 2v10h10c1.1 0 2 .9 2 2s-.9 2-2 2Z"
      />
    </G>
    <Defs>
      <ClipPath id="b">
        <Path fill="#fff" d="M21 16h48v48H21z" />
      </ClipPath>
    </Defs>
  </Svg>


    </View>
  
  );
};

export default Add;