import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, AnimatePresence } from "moti";
import { StyleSheet, Button, Image as RNImage } from "react-native";
import KnobsComponents from "../../../knobs/components";
import Playground from "../../../containers/ReactView";
import { useView, PropTypes } from "react-view";
import MotiLogo from "../../../assets/moti.svg";
import { Card, FormLabel } from "@material-ui/core";
const MotiPlayground = () => {
  const params = useView({
    componentName: "View",
    props: {
      animate: {
        value: `{ opacity: 1, scale: 1.5,}`,
        type: PropTypes.Object,
        description: "Magically animate any value passed here",
      },
      from: {
        value: `{ opacity: 0, scale: 0.5, }`,
        type: PropTypes.Object,
        description: "The initial animation styles when the component mounts",
      },
      exit: {
        value: `{ scale:10, }`,
        type: PropTypes.Object,
        description:
          "Unmount animation styles. This works the exact same as framer-motion's exit prop, and requires wrapping your component with AnimatePresence. The only difference is you import AnimatePresence from moti",
      },
      transition: {
        value: `{ type: 'timing' }`,
        type: PropTypes.Object,
        description: "Animation Prop",
      },
      onDidAnimate: {
        value: `(a,b)=>{console.log(a,b)}`,
        type: PropTypes.Function,
        description: `Callback function called after finishing a given animation.
        1️⃣ First argument is the style prop string (opacity, scale, etc.).
        2️⃣ The second argument is whether the animation finished or not (boolean).`,
      },
      children: {
        value: `<Image source={MotiLogo} style={{height:150,width:150,resizeMode:"contain"}} />`,
        type: PropTypes.ReactNode,
        description: "Visible label.",
      },
    },
    scope: {
      View,
      Text,
      Image,
      MotiLogo,
      AnimatePresence,
    },

    imports: {
      moti: {
        named: ["View", "Text", "Image", "AnimatePresence"],
      },
    },
  });
  const [toggle, setToggle] = useState(true);
  return (
    <React.Fragment>
      <Card
        style={{
          padding: 20,
        }}
      >
        {/* <View
        from={{ translateY: -5 }}
        animate={{ translateY: 0 }}
        transition={{
          delay: 100,
        }}
      >
        <Text>Hello</Text>
      </View> */}

        <div style={{ textAlign: "center" }}>
          {" "}
          <FormLabel component="span">Unmount</FormLabel>
          <KnobsComponents.Switch
            label=""
            checked={toggle}
            onChange={(e) => setToggle(e.target.checked)}
          />
          <FormLabel component="span">Mount</FormLabel>
        </div>
        <AnimatePresence>
          <Playground params={params} showCompiler={toggle} />
        </AnimatePresence>
      </Card>
    </React.Fragment>
  );
};

// const styles = StyleSheet.create({});
export default MotiPlayground;
