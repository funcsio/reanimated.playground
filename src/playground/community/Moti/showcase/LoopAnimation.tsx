import React, { useReducer } from "react";
import styles from "./common/Styles";
import { View } from "moti";

function Shape() {
  return (
    <View
      from={{
        translateY: 20,
      }}
      animate={{
        translateY: 0,
      }}
      transition={{
        loop: true,
        type: "timing",
        duration: 1500,
        delay: 100,
      }}
      style={styles.shape}
    />
  );
}

export default function Loop() {
  return (
    <View style={styles.container}>
      <Shape />
    </View>
  );
}
