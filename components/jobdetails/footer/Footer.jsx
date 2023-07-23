import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { COLORS, icons } from "../../../constants";

const Footer = ({ url }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.likeBtn(isLiked)}
        onPress={() => setIsLiked((prev) => !prev)}
      >
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage(isLiked)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
