import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs } from "react-native-svg";

const Favorite = ({ active}) => {

  const fillColor = active ? "#fff" : "none"; 
  const strokeColor = "#fff";

  return (
    <View>
       <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={47}
        height={44}
        fill="none"
      >
        <G filter="url(#a)">
          <Rect
            width={46.5}
            height={43.961}
            fill="#fff" // Белый цвет для фона
            fillOpacity={0.15}
            rx={21.98}
          />
          <Path
            fill={fillColor} // Цвет зависит от active
            stroke={strokeColor} // Белый цвет для границы
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M23.25 14.46c-2.25-2.62-6.008-3.43-8.826-1.03-2.818 2.4-3.215 6.413-1.002 9.252 1.84 2.36 7.409 7.338 9.234 8.95.204.18.306.27.425.305a.57.57 0 0 0 .322 0c.12-.035.221-.125.425-.305 1.826-1.612 7.394-6.59 9.234-8.95 2.214-2.839 1.865-6.877-1.002-9.252-2.866-2.375-6.56-1.59-8.81 1.03Z"
            clipRule="evenodd"
          />
        </G>
        <Defs></Defs>
      </Svg>
    </View>
  
  );
};

export default Favorite;