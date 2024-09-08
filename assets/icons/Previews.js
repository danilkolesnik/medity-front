import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

const Previews = ({ width = 19, height = 21 }) => {
  return (
    <View>
       <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"

  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="m20 12.5-5-5 5-5"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M7.01 15a15 15 0 1 0 10.738-7.33"
    />
    <Path
      fill="#fff"
      fillOpacity={0.5}
      d="M15.53 27.656c1.882 0 3.262-1.159 3.262-2.728v-.013c0-1.334-.93-2.187-2.298-2.304v-.026c1.172-.248 1.992-1.042 1.992-2.2v-.014c0-1.426-1.178-2.422-2.968-2.422-1.758 0-2.97 1.022-3.119 2.552l-.006.065h1.126l.006-.065c.098-.95.886-1.536 1.993-1.536 1.145 0 1.79.566 1.79 1.55v.012c0 .938-.781 1.628-1.901 1.628h-1.126v.99h1.178c1.315 0 2.142.644 2.142 1.796v.014c0 .996-.84 1.686-2.07 1.686-1.25 0-2.103-.638-2.194-1.563l-.007-.065h-1.126l.006.078c.124 1.485 1.38 2.565 3.32 2.565ZM23.838 27.721c2.077 0 3.327-1.894 3.327-4.915v-.013c0-3.02-1.25-4.909-3.327-4.909s-3.314 1.888-3.314 4.909v.013c0 3.02 1.237 4.915 3.314 4.915Zm0-1.022c-1.348 0-2.135-1.497-2.135-3.893v-.013c0-2.396.787-3.88 2.135-3.88 1.348 0 2.148 1.484 2.148 3.88v.013c0 2.396-.8 3.893-2.148 3.893Z"
    />
  </Svg>
    </View>
  
  );
};

export default Previews;