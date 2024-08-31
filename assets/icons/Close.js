import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

const Close = ({ width = 19, height = 21 }) => {
  return (
    <View>
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M21.098 8.895a.976.976 0 0 0 0-1.4 1.024 1.024 0 0 0-1.429 0l-5.843 5.728-5.842-5.728a1.024 1.024 0 0 0-1.428 0 .976.976 0 0 0 0 1.4l5.842 5.728-5.143 5.043a.976.976 0 0 0 0 1.4 1.024 1.024 0 0 0 1.428 0l5.143-5.042 5.144 5.042a1.024 1.024 0 0 0 1.428 0 .976.976 0 0 0 0-1.4l-5.143-5.043 5.842-5.728Z"
      clipRule="evenodd"
    />
  </Svg>
    </View>
  
  );
};

export default Close;