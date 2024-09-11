import React from "react";
import { View } from "react-native";
import Svg, { G, Rect, Path, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeBlend } from 'react-native-svg';

const Next = ({ width = 37, height = 37 }) => {
  return (
    <View>
         <Svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_b_715_651)">
        <Rect width="37" height="37" rx="18.5" fill="white" fillOpacity="0.15" />
      </G>
      <Path
        d="M15.3303 24.7115C15.7652 25.0962 16.4704 25.0962 16.9053 24.7115L22.3484 19.892C23.2175 19.1224 23.2172 17.8754 22.3476 17.1062L16.9012 12.2885C16.4663 11.9038 15.7612 11.9038 15.3263 12.2885C14.8912 12.6733 14.8912 13.297 15.3263 13.6817L19.9877 17.8052C20.4226 18.1899 20.4226 18.8136 19.9877 19.1983L15.3303 23.3183C14.8954 23.703 14.8954 24.3268 15.3303 24.7115Z"
        fill="white"
      />
      <Defs>
        <Filter id="filter0_b_715_651" x="-10" y="-10" width="57" height="57" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <FeComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_715_651" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_715_651" result="shape" />
        </Filter>
      </Defs>
    </Svg>
    </View>
  );
};

export default Next;
