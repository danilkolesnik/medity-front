import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

const Edit = ({ width = 19, height = 21 }) => {
  return (
    <View>
       <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.283 3.893 6.7 10.046c-.556.613-2.206.896-2.575.49-.369-.406-.117-2.225.439-2.838l5.589-6.158c.137-.166.304-.3.49-.392a1.394 1.394 0 0 1 1.187-.028c.189.084.36.21.505.369.144.16.257.349.333.558a1.814 1.814 0 0 1-.029 1.307 1.666 1.666 0 0 1-.356.54Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.267 2.346H3.34c-.621 0-1.216.271-1.655.755A2.72 2.72 0 0 0 1 4.925v6.45c0 .684.247 1.34.686 1.823a2.236 2.236 0 0 0 1.655.756h6.437c1.293 0 1.756-1.16 1.756-2.58V8.15"
    />
  </Svg>
    </View>
  
  );
};

export default Edit;