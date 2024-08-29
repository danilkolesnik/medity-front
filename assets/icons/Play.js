import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Play = ({last = false}) => {
  return (
    <View>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
  >
    <Rect width={64} height={64} fill="#fff" rx={32} />
    <Path
      fill="#262626"
      d="m40.282 30.66-12.728-8.387c-1.085-.717-2.554.063-2.554 1.349v16.753c0 1.307 1.469 2.065 2.554 1.349l12.728-8.387c.957-.612.957-2.045 0-2.677Z"
    />
  </Svg>
    </View>
  
  );
};

export default Play;