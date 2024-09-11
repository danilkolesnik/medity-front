import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs,ClipPath } from "react-native-svg"

const Add = ({ width = 37, height = 37 }) => {
  return (
    <View>
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_719_651)">
<circle cx="45" cy="40" r="35" fill="#252525"/>
</g>
<g clip-path="url(#clip0_719_651)">
<path d="M57 42H47V52C47 53.1 46.1 54 45 54C43.9 54 43 53.1 43 52V42H33C31.9 42 31 41.1 31 40C31 38.9 31.9 38 33 38H43V28C43 26.9 43.9 26 45 26C46.1 26 47 26.9 47 28V38H57C58.1 38 59 38.9 59 40C59 41.1 58.1 42 57 42Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_719_651" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_719_651"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_719_651" result="shape"/>
</filter>
<clipPath id="clip0_719_651">
<rect width="48" height="48" fill="white" transform="translate(21 16)"/>
</clipPath>
</defs>
</svg>



    </View>
  
  );
};

export default Add;