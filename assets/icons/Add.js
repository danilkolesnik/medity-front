import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs, ClipPath, Circle } from "react-native-svg";

const Add = ({ width = 55, height = 55 }) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
      >
        <G filter="url(#a)">
          <Circle cx={23} cy={24} r={23} fill="#252525" />
        </G>
        <G clipPath="url(#b)">
          <Path
            fill="#fff"
            d="M30 25H24v6c0 0.6-0.5 1-1 1s-1-0.4-1-1v-6h-6c-0.6 0-1-0.5-1-1s0.4-1 1-1h6v-6c0-0.6 0.5-1 1-1s1 0.4 1 1v6h6c0.6 0 1 0.5 1 1s-0.4 1-1 1Z"
          />
        </G>
        <Defs>
          <ClipPath id="b">
            <Path fill="#fff" d="M12 12h24v24H12z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default Add;
