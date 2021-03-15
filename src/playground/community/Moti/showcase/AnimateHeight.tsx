import React, { ComponentProps, useReducer, useState } from "react";
import { View as MotiView } from "moti";
import { Button, View } from "react-native";
import styles from "./common/Styles";
import Refresh from "./common/Refresh";
function useLayout() {
  const [layout, setLayout] = useState({
    height: 0,
  });
  const onLayout: ComponentProps<typeof View>["onLayout"] = ({
    nativeEvent,
  }) => {
    setLayout(nativeEvent.layout);
  };

  return [layout, onLayout] as const;
}

function Measure() {
  const [{ height }, onLayout] = useLayout();

  const [open, toggle] = useReducer((s) => !s, false);

  return (
    <>
      <MotiView animate={{ height }} style={{ overflow: "hidden" }}>
        <View
          onLayout={onLayout}
          style={{
            height: open ? 100 : 230,
            backgroundColor: "#fff",
            margin: 20,
            marginTop: 40,
            zIndex: 3,
          }}
        />
      </MotiView>
      <Refresh visible={!open} onRefresh={toggle} allWhite />
    </>
  );
}

export default function App() {
  return (
    <View style={{ backgroundColor: "#9c1aff", height: 250, margin: 10 }}>
      <Measure />
    </View>
  );
}
