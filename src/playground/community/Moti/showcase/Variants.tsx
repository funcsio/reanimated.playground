import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { View, useAnimationState } from "moti";
import styles from "./common/Styles";
import { Typography } from "@material-ui/core";
// you can create a reusable animation preset
const useFadeInDown = () => {
  return useAnimationState({
    from: {
      opacity: 0,
      translateY: -15,
    },
    to: {
      opacity: 1,
      translateY: 0,
    },
  });
};

function Shape() {
  const fadeInDown = useFadeInDown();

  const scaleIn = useAnimationState({
    from: {
      scale: 0.7,
    },
    open: {
      scale: 1,
    },
    big: {
      scale: 1.5,
    },
  });

  const onPress = () => {
    fadeInDown.transitionTo((state) => {
      if (state === "from") {
        return "to";
      } else {
        return "from";
      }
    });

    if (scaleIn.current === "from") {
      scaleIn.transitionTo("open");
    } else if (scaleIn.current === "open") {
      scaleIn.transitionTo("big");
    } else {
      scaleIn.transitionTo("from");
    }
  };

  return (
    <Pressable onPress={onPress}>
      <View delay={300} state={fadeInDown} style={stylesLocal.shape}>
        <Typography>Click Me</Typography>
      </View>
      <View
        transition={{
          type: "spring",
        }}
        delay={300}
        state={scaleIn}
        style={[stylesLocal.shape, stylesLocal.shape2]}
      >
        <Typography>Click Me</Typography>
      </View>
    </Pressable>
  );
}

export default function Variants() {
  return (
    <View style={styles.container}>
      <Shape />
    </View>
  );
}

const stylesLocal = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "black",
    display: "flex",
    alignContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  shape2: {
    backgroundColor: "hotpink",
    marginTop: 16,
  },
});
