import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs, Filter, FeFlood, FeGaussianBlur, FeComposite, FeBlend } from 'react-native-svg';

const Bell = ({ width = 37, height = 37 }) => {
  return (
    <View>
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_b_717_649)">
        <Rect width="48" height="48" rx="24" fill="white" fillOpacity="0.15" />
        <Path
          d="M32.6543 27.9345C31.8783 27.1359 30.4257 25.9346 30.4257 22C30.4271 20.588 29.9144 19.2197 28.9757 18.1305C28.0371 17.0413 26.7313 16.2993 25.2829 16.0321V15.2308C25.2829 15.0691 25.2496 14.9091 25.185 14.7598C25.1204 14.6105 25.0257 14.4748 24.9063 14.3605C24.7869 14.2462 24.6452 14.1555 24.4892 14.0937C24.3332 14.0318 24.166 14 23.9972 14C23.8283 14 23.6611 14.0318 23.5051 14.0937C23.3492 14.1555 23.2074 14.2462 23.088 14.3605C22.9686 14.4748 22.8739 14.6105 22.8093 14.7598C22.7447 14.9091 22.7115 15.0691 22.7115 15.2308V16.0321C21.2631 16.2993 19.9572 17.0413 19.0186 18.1305C18.08 19.2197 17.5672 20.588 17.5686 22C17.5686 25.9346 16.1161 27.1359 15.3401 27.9345C15.1187 28.1605 14.9969 28.4595 15.0001 28.7692C15.0002 28.9311 15.0337 29.0914 15.0986 29.2409C15.1635 29.3904 15.2586 29.5262 15.3784 29.6405C15.4982 29.7549 15.6403 29.8454 15.7967 29.9071C15.9531 29.9688 16.1206 30.0004 16.2898 30H31.7103C31.8794 30.0004 32.047 29.9688 32.2033 29.9071C32.3597 29.8454 32.5019 29.7549 32.6217 29.6405C32.7414 29.5262 32.8365 29.3904 32.9014 29.2409C32.9663 29.0914 32.9998 28.9311 33 28.7692C33.0016 28.4587 32.8777 28.1596 32.6543 27.9345Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <Path
          d="M27 32C27 32.7956 26.6839 33.5587 26.1213 34.1213C25.5587 34.6839 24.7956 35 24 35C23.2044 35 22.4413 34.6839 21.8787 34.1213C21.3161 33.5587 21 32.7956 21 32L24 32H27Z"
          fill="white"
        />
      </G>
      <Defs>
        <Filter id="filter0_b_717_649" x="-10" y="-10" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <FeComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_717_649" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_717_649" result="shape" />
        </Filter>
      </Defs>
    </Svg>


    </View>
  
  );
};

export default Bell;