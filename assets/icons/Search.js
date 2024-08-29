import React from "react";
import { View } from "react-native";
import Svg, { Path, Rect, ClipPath, G, Defs, Circle } from "react-native-svg";

const SearchIcon = ({ width = 19, height = 21 }) => {
  return (
    <View>
      <Svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M9.16663 16.6667C13.3088 16.6667 16.6666 13.3088 16.6666 9.16669C16.6666 5.02455 13.3088 1.66669 9.16663 1.66669C5.02449 1.66669 1.66663 5.02455 1.66663 9.16669C1.66663 13.3088 5.02449 16.6667 9.16663 16.6667Z"
          stroke="white"
          stroke-opacity="0.5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.3333 18.3333L15 15"
          stroke="white"
          stroke-opacity="0.5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default SearchIcon;
