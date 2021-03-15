import React, { useReducer } from "react";
import { View, AnimatePresence } from "moti";

import styles from "./common/Styles";
import Refresh from "./common/Refresh";

function Shape() {
  return (
    <View
      from={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={styles.shape}
    />
  );
}

export default function Presence() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <View style={styles.container}>
      <AnimatePresence>{visible && <Shape />}</AnimatePresence>
      <Refresh visible={visible} onRefresh={toggle} />
    </View>
  );
}
