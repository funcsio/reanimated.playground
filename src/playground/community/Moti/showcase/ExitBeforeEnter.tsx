import { AnimatePresence } from "framer-motion";
import React, { useReducer } from "react";
import styles from "./common/Styles";
import Refresh from "./common/Refresh";
import { View } from "moti";

function Shape({ bg }: { bg: string }) {
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
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[styles.shape, { backgroundColor: bg }]}
    />
  );
}

export default function ExitBeforeEnter() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <View style={styles.container}>
      <AnimatePresence exitBeforeEnter>
        {visible && <Shape bg="hotpink" key="hotpink" />}
        {!visible && <Shape bg="cyan" key="cyan" />}
      </AnimatePresence>
      <Refresh onRefresh={toggle} visible={visible} allWhite />
    </View>
  );
}
