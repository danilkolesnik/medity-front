import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, G, Defs,Circle } from "react-native-svg";

const Profile = ({ width = 19, height = 21 }) => {
  return (
    <View>
   <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.219 19.8H3.782c-.777 0-1.35-.767-1.058-1.472C4.084 15.068 7.28 13.2 11 13.2c3.722 0 6.917 1.868 8.277 5.128.293.705-.281 1.472-1.058 1.472ZM6.509 6.6c0-2.427 2.015-4.4 4.49-4.4 2.478 0 4.492 1.973 4.492 4.4 0 2.427-2.014 4.4-4.491 4.4-2.476 0-4.492-1.973-4.492-4.4ZM21.95 19.4c-.816-3.695-3.37-6.422-6.73-7.66 1.78-1.404 2.82-3.676 2.438-6.163-.443-2.885-2.893-5.194-5.85-5.53C7.725-.42 4.262 2.693 4.262 6.6c0 2.079.983 3.931 2.517 5.14C3.418 12.978.866 15.705.048 19.4-.248 20.743.857 22 2.26 22H19.74c1.404 0 2.509-1.257 2.211-2.6Z"
      clipRule="evenodd"
    />
  </Svg>
    </View>
  
  );
};

export default Profile;