import React, { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import Stats from "stats.js";
import Translate from "./playground/reanimated/AnimatedStyles/Translate";
const App = () => {
  useLayoutEffect(() => {
    console.log("LOL");
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
    function animate() {
      stats.begin();
      stats.end();
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  });

  return (
    <>
      <View
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <Translate />
      </View>
    </>
  );
};

export default App;
