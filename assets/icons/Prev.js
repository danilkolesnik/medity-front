import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeBlend } from 'react-native-svg';

const Prev = ({ width = 37, height = 37 }) => {
  return (
    <View>
     <Svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_b_715_649)">
        <Rect width="37" height="37" rx="18.5" fill="white" fillOpacity="0.15" />
      </G>
      <Path
        d="M20.6697 12.2885C20.2348 11.9038 19.5296 11.9038 19.0947 12.2885L13.6516 17.108C12.7825 17.8776 12.7828 19.1246 13.6524 19.8938L19.0988 24.7115C19.5337 25.0962 20.2388 25.0962 20.6737 24.7115C21.1088 24.3267 21.1088 23.703 20.6737 23.3183L16.0123 19.1948C15.5774 18.8101 15.5774 18.1864 16.0123 17.8017L20.6697 13.6817C21.1046 13.297 21.1046 12.6732 20.6697 12.2885Z"
        fill="white"
      />
      <Defs>
        <Filter id="filter0_b_715_649" x="-10" y="-10" width="57" height="57" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <FeComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_715_649" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_715_649" result="shape" />
        </Filter>
      </Defs>
    </Svg>
    </View>
  
  );
};

export default Prev;