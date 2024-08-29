import React from "react";
import { View } from "react-native";
import Svg, { Path, Rect, ClipPath, G, Defs, Circle } from "react-native-svg";

const Mail = ({ width = 19, height = 21 }) => {
  return (
    <View>
      <Svg
        width="19"
        height="15"
        viewBox="0 0 19 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.78125 0L0 0.78125V13.2812L0.78125 14.0625H17.9688L18.75 13.2812V0.78125L17.9688 0H0.78125ZM1.5625 2.5474V12.5H17.1875V2.54714L9.3749 9.64958L1.5625 2.5474ZM15.9478 1.5625H2.80194L9.3749 7.53792L15.9478 1.5625Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default Mail;
