import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as MUIIcons from "@material-ui/icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  cancelAnimation,
} from "react-native-reanimated";
import Knobs from "../../../knobs";
import ColorPicker from "../../../components/ColorPicker";
import AnimationConfigurer from "../../../containers/AnimationConfigurer";
import { FormLabel, Grid } from "@material-ui/core";

const RGBObjectToString = (colorObject) => {
  const { r, g, b, a } = colorObject;
  return `rgba(${r},${g},${b},${a})`;
};

const RandomRGBA = () => {
  const GenerateValue = (limit) => Math.round(Math.random() * limit);
  return {
    r: GenerateValue(255),
    g: GenerateValue(255),
    b: GenerateValue(255),
    a: 1,
  };
};
const Colors = () => {
  const [animationFinished, setAnimationFinished] = useState(true);
  const [colorPicker, setColorPicker] = useState({
    c1: { r: 6, g: 26, b: 114, a: 1 },
    c2: { r: 0, g: 255, b: 255, a: 1 },
  });

  const Color = useSharedValue(RGBObjectToString(colorPicker.c1));
  const [animateValue, setAnimateValue] = useState<any>();

  const AnimatedStyles = {
    animate: useAnimatedStyle(() => {
      return {
        backgroundColor: Color.value,
      };
    }),
  };

  useEffect(() => {
    Color.value = RGBObjectToString(colorPicker.c1);
  }, [Color, colorPicker.c1]);
  const handleColorPicker = (picker: "c1" | "c2", color) => {
    setColorPicker({ ...colorPicker, [picker]: { ...color } });
  };
  const onAnimationFinished = (isFinished) => {
    setAnimationFinished(isFinished);
  };
  return (
    <Animated.View
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          minHeight: "250px",
          height: "30vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View style={[AnimatedStyles.animate, styles.box]}>
          <MUIIcons.PaletteOutlined
            style={{ color: "#ccc" }}
            fontSize="large"
          />
        </Animated.View>
      </View>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
        spacing={1}
      >
        <Grid item xs={12} style={{ textAlign: "center" }} md>
          <Knobs.Button.IconButton
            variant="outlined"
            aria-label="Cancel Animation"
            color="primary"
            onClick={() => {
              Color.value = RGBObjectToString(colorPicker.c1);
            }}
          >
            <MUIIcons.Refresh />
          </Knobs.Button.IconButton>
          <Knobs.Button.IconButton
            variant="contained"
            color="primary"
            onClick={() => {
              setAnimationFinished(false);
              Color.value = animateValue(RGBObjectToString(colorPicker.c2));
            }}
          >
            <MUIIcons.PlayArrowRounded fontSize="large" />
          </Knobs.Button.IconButton>
          <Knobs.Button.IconButton
            variant="outlined"
            aria-label="Cancel Animation"
            color="primary"
            onClick={() => {
              cancelAnimation(Color);
            }}
          >
            <MUIIcons.Stop />
          </Knobs.Button.IconButton>

          <Knobs.Button.IconButton
            variant="outlined"
            color="primary"
            onClick={() => {
              setAnimationFinished(true);
              const start = RandomRGBA();
              const end = RandomRGBA();
              setColorPicker({
                c1: start,
                c2: end,
              });
            }}
          >
            <MUIIcons.Shuffle />
          </Knobs.Button.IconButton>
        </Grid>
        <Grid item xs={12} md>
          <Grid container spacing={3} justify="space-evenly">
            <Grid item>
              <FormLabel>Start</FormLabel>
              <ColorPicker
                onChange={(color) => {
                  handleColorPicker("c1", color.rgb);
                }}
                value={colorPicker.c1}
              />
            </Grid>
            <Grid item>
              <FormLabel>Finish</FormLabel>

              <ColorPicker
                onChange={(color) => handleColorPicker("c2", color.rgb)}
                value={colorPicker.c2}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AnimationConfigurer
        setParentAnimateWithConfig={setAnimateValue}
        onAnimationFinished={onAnimationFinished}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 15,
    height: "80%",
    width: "80%",
    marginVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Colors;
