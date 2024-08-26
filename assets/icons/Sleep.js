import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Sleep = ({ width = 19, height = 21 }) => {
  return (
    <View>
   <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"

  >
    <Path
      fill="#fff"
      d="M20.797 12.64a.576.576 0 0 1 .95.526c-.812 5.241-5.342 9.253-10.81 9.253C4.897 22.419 0 17.522 0 11.48 0 6.001 4.031 1.461 9.29.667a.564.564 0 0 1 .508.934 7.763 7.763 0 0 0-1.986 5.193 7.812 7.812 0 0 0 7.813 7.812 7.76 7.76 0 0 0 5.172-1.967Z"
    />
  </Svg>
    </View>
  
  );
};

export default Sleep;