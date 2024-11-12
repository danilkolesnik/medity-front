import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeBlend } from 'react-native-svg';

const Prev = ({ width = 37, height = 37 }) => {
  return (
    <View>
     <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
 
  >
    <G filter="url(#a)">
      <Rect width={37} height={37} fill="#fff" fillOpacity={0.15} rx={18.5} />
    </G>
    <Path
      fill="#fff"
      d="M20.67 12.289a1.219 1.219 0 0 0-1.575 0l-5.443 4.819c-.87.77-.87 2.017 0 2.786l5.447 4.818c.435.384 1.14.384 1.575 0a.907.907 0 0 0 0-1.394l-4.662-4.123a.907.907 0 0 1 0-1.393l4.658-4.12a.907.907 0 0 0 0-1.393Z"
    />
    <Defs></Defs>
  </Svg>
    </View>
  
  );
};

export default Prev;