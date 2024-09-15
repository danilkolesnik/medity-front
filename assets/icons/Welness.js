import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Welness = ({ width = 19, height = 21 }) => {
  return (
    <View>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
  >
    <Circle cx={16} cy={16} r={16} fill="#151515" />
    <Path
      fill="#3F3F3F"
      d="M22 10v1.333c0 6.418-3.582 9.334-8 9.334h-1.268c.141-2.008.767-3.224 2.399-4.668.802-.71.734-1.12.339-.884-2.723 1.62-4.075 3.809-4.135 7.305l-.002.247H10c0-.909.077-1.734.23-2.488-.153-.863-.23-2.034-.23-3.512A6.667 6.667 0 0 1 16.667 10c1.333 0 2.666.667 5.333 0Z"
    />
  </Svg>
    </View>
  
  );
};

export default Welness;