import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Home = ({ width = 19, height = 21 }) => {
  return (
    <View>
   <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
  >
    <Path
      fill="#fff"
      d="M21.5 20a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20Zm-2-1V9.978l-7-5.444-7 5.444V19h14Z"
    />
  </Svg>
    </View>
  
  );
};

export default Home;