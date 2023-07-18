import React from "react";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;