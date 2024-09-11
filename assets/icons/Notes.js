import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeBlend, Mask, ClipPath } from 'react-native-svg';

const Notes = ({ width = 37, height = 37 }) => {
  return (
    <View>
       <Svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_b_717_650)">
        <Rect width="49" height="49" rx="24" fill="white" fillOpacity="0.15" />
        <G clipPath="url(#clip0_717_650)">
          <Mask id="mask0_717_650" maskUnits="userSpaceOnUse" x="12" y="12" width="25" height="25" style={{ maskType: 'luminance' }}>
            <Path d="M12 12H37V37H12V12Z" fill="white" />
          </Mask>
          <G mask="url(#mask0_717_650)">
            <Path
              d="M14.8643 17.4688H24.2393M29.4476 17.4688H34.1351M14.8643 22.1563H22.2861M27.6247 22.1563H34.1351M14.8643 26.8438H20.2028M25.5413 26.8438H34.1351M14.8643 31.5313H19.2913M23.7184 31.5313H27.8851M19.1611 30.176L19.9649 34.2657L23.4066 31.9459L29.708 16.6347L25.4624 14.8646L19.1611 30.176Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
      </G>
      <Defs>
        <Filter id="filter0_b_717_650" x="-10" y="-10" width="69" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <FeComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_717_650" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_717_650" result="shape" />
        </Filter>
        <ClipPath id="clip0_717_650">
          <Rect width="25" height="25" fill="white" transform="translate(12 12)" />
        </ClipPath>
      </Defs>
    </Svg>
    </View>
  
  );
};

export default Notes;