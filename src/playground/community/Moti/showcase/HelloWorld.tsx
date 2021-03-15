import React, { useReducer } from "react";
import { View } from "moti";

import Refresh from "./common/Refresh";
import styles from "./common/Styles";
function Shape() {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "timing",
      }}
      style={styles.shape}
    ></View>
  );
}

export default function HelloWorld() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <View style={styles.container}>
      {visible && <Shape />}
      <Refresh visible={visible} onRefresh={toggle} />
    </View>
  );
}
