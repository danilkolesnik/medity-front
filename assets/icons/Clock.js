import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

const Clock = ({ width = 19, height = 21 }) => {
  return (
    <View>
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
  >
    <Path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <Path
      stroke="#425562"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 4v2.5L7.5 8"
    />
  </Svg>
    </View>
  
  );
};

export default Clock;