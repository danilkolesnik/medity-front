import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const WelnessSleep = ({ width = 19, height = 21 }) => {
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
      d="M13.367 8.678a6.75 6.75 0 0 0 8.954 8.956A7.502 7.502 0 0 1 7.5 16a7.502 7.502 0 0 1 5.867-7.322Zm6.256.04.627.157v.75l-.627.157a1.5 1.5 0 0 0-1.091 1.091l-.157.627h-.75l-.157-.627a1.5 1.5 0 0 0-1.091-1.091l-.627-.157v-.75l.627-.157a1.5 1.5 0 0 0 1.09-1.091L17.626 7h.75l.157.627a1.5 1.5 0 0 0 1.091 1.091Zm3.75 3.75.627.157v.75l-.627.157a1.5 1.5 0 0 0-1.091 1.091l-.157.627h-.75l-.157-.627a1.5 1.5 0 0 0-1.091-1.091l-.627-.157v-.75l.627-.157a1.5 1.5 0 0 0 1.091-1.091l.157-.627h.75l.157.627a1.5 1.5 0 0 0 1.091 1.091Z"
    />
  </Svg>
    </View>
  
  );
};

export default WelnessSleep;