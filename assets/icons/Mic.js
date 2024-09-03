import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs,ClipPath } from "react-native-svg"

const Mic = ({ width = 19, height = 21 }) => {
  return (
    <View>
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"

  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M10.95 12.393a5.96 5.96 0 0 1-2.283.737v2.703H7.333V13.13a6.003 6.003 0 0 1-5.296-5.297H3.38a4.668 4.668 0 0 0 6.58 3.57l-1.034-1.034a3.333 3.333 0 0 1-4.26-3.202V6.109L.93 2.372l.943-.943 13.2 13.2-.944.942-3.178-3.178Zm1.967-1.786-.962-.962c.339-.54.57-1.153.664-1.812h1.344a5.968 5.968 0 0 1-1.046 2.774Zm-1.94-1.94L5.123 2.814a3.333 3.333 0 0 1 6.21 1.686l.001 2.667c0 .52-.121 1.035-.356 1.5h-.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
    </View>
  
  );
};

export default Mic;