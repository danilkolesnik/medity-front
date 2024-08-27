import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Arrow = ({ width = 24, height = 24 }) => {
  return (
    <>  
    <Svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="56" cy="56" r="56" fill="white" opacity="0.15"/>
    <Circle cx="56" cy="56" r="44" fill="white" opacity="0.15"/>
    <Rect x="24" y="24" width="64" height="64" rx="32" fill="white"/>
    <Path d="M58 50L64.07 56.07L58 62.14" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M63 56.0703L47 56.0703" stroke="#111111" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    </>
  
  );
};

export default Arrow;

