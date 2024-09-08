import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

const Skip = ({ width = 19, height = 21 }) => {
  return (
    <View>
        <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <Rect
      width={1.5}
      height={18}
      x={2}
      y={3}
      fill="#fff"
      fillOpacity={0.5}
      rx={0.75}
    />
    <Path
      fill="#fff"
      fillOpacity={0.5}
      d="m8.629 10.794 11.136-7.548C20.715 2.6 22 3.302 22 4.459v15.079c0 1.176-1.285 1.858-2.235 1.213L8.63 13.204c-.839-.55-.839-1.84 0-2.409Z"
    />
  </Svg>
    </View>
  
  );
};

export default Skip;