import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs,ClipPath } from "react-native-svg"

const Like = ({ width = 30, height = 30 }) => {
  return (
    <View>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_715_650)">
        <rect width="37" height="37" rx="18.5" fill="white" fill-opacity="0.15"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 13.6027C17.0005 11.8955 14.4948 11.3679 12.616 12.9312C10.7372 14.4945 10.4727 17.1082 11.9482 18.9571C13.1749 20.4943 16.8873 23.7364 18.1041 24.7858C18.2402 24.9032 18.3083 24.9619 18.3877 24.9849C18.4569 25.005 18.5328 25.005 18.6021 24.9849C18.6815 24.9619 18.7495 24.9032 18.8857 24.7858C20.1024 23.7364 23.8148 20.4943 25.0416 18.9571C26.517 17.1082 26.2848 14.478 24.3737 12.9312C22.4626 11.3844 19.9995 11.8955 18.5 13.6027Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <filter id="filter0_b_715_650" x="-10" y="-10" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_715_650"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_715_650" result="shape"/>
        </filter>
        </defs>
        </svg>

    </View>
  
  );
};

export default Like;