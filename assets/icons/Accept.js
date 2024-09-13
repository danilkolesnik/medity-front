import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs,ClipPath,Circle } from "react-native-svg"

const Accept = ({ width = 37, height = 37 }) => {
  return (
    <View>
       <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 32 32"
  >
    <Defs></Defs>
    <G id="checkmark">
      <Path d="m3 16 9 9M12 25 29 7" className="cls-1" stroke="#fff" />
    </G>
  </Svg>

    </View>
  
  );
};

export default Accept;