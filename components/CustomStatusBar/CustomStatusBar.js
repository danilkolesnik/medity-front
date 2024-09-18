// CustomStatusBar.js

import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";

const CustomStatusBar = ({
  children,
  statusBgColor = "black",
  barStyle = "light-content",
  bgColor = "black",
}) => {
  return (
    <Fragment>
      <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
      <SafeAreaView style={{ backgroundColor: bgColor }}>
        <SafeAreaView style={{ backgroundColor: bgColor }}>
          {children}
        </SafeAreaView>
      </SafeAreaView>
    </Fragment>
  );
};

export default CustomStatusBar;
