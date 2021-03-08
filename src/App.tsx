import React, { useLayoutEffect, useState } from "react";
import { View } from "react-native";
import Stats from "stats.js";
import Root from "./containers";

const App = () => {
  useLayoutEffect(() => {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    stats.dom.style.position = "relative";
    document.getElementById("stats-for-nerds")?.appendChild(stats.dom);

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
        <Root />
      </View>
      <div
        id="stats-for-nerds"
        style={{ position: "absolute", bottom: 0, right: 0 }}
      ></div>
    </>
  );
};

export default App;
