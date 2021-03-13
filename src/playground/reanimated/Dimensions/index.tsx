import React, { useState } from "react";
import * as MUIIcons from "@material-ui/icons";

import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  cancelAnimation,
} from "react-native-reanimated";
import Knobs from "../../../knobs";
import { useSize } from "../../../hooks";
import { Card, Grid, FormLabel } from "@material-ui/core";
import AnimationConfigurer from "../../../containers/AnimationConfigurer";
import stylesCSS from "./styles.module.scss";
import Editor from "@monaco-editor/react";

const MIN_BOX_DIMENSIONS = 75;

const Translate = () => {
  const ref: any = React.createRef();

  const { width: Dim_Width, height: Dim_Height } = useSize(ref);
  const [animationFinished, setAnimationFinished] = useState(true);

  const [sliderWidth, setSliderWidth] = useState<number>(MIN_BOX_DIMENSIONS);
  const [sliderHeight, setSliderHeight] = useState<number>(MIN_BOX_DIMENSIONS);

  const width = useSharedValue(sliderWidth);
  const height = useSharedValue(sliderHeight);

  const [animateValue, setAnimateValue] = useState<any>();

  const AnimatedStyles = {
    animate: useAnimatedStyle(() => {
      return {
        width: width.value,
        height: height.value,
      };
    }),
  };

  const handlerWidthChange = (_: any, newValue: number | number[]) => {
    setAnimationFinished(true);
    setSliderWidth(newValue as number);
  };

  const handlerHeightChange = (_: any, newValue: number | number[]) => {
    setAnimationFinished(true);
    setSliderHeight(newValue as number);
  };

  return (
    <Card
      style={{
        padding: 20,
      }}
    >
      <Animated.View style={styles.cont}>
        <View
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
          }}
          ref={ref}
        >
          <Animated.View
            style={[styles.box, AnimatedStyles.animate]}
          ></Animated.View>

          {animationFinished && (
            <>
              <Animated.View
                style={[
                  styles.box,
                  styles.boxGhost,
                  {
                    width: sliderWidth,
                    height: sliderHeight,
                  },
                ]}
              ></Animated.View>
            </>
          )}
        </View>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          className={stylesCSS.configurationCont}
        >
          <Grid item xs>
            <FormLabel>Width</FormLabel>
            <Knobs.Slider
              min={MIN_BOX_DIMENSIONS}
              max={Dim_Width * 0.9}
              value={sliderWidth}
              onChange={handlerWidthChange}
            />
            <FormLabel>Height</FormLabel>
            <Knobs.Slider
              min={MIN_BOX_DIMENSIONS}
              max={Dim_Height * 0.9}
              value={sliderHeight}
              onChange={handlerHeightChange}
            />

            <AnimationConfigurer
              setParentAnimateWithConfig={setAnimateValue}
              onAnimationFinished={(isFinished) => {
                setAnimationFinished(isFinished);
              }}
            />
          </Grid>
          <Grid item>
            <Knobs.Button.IconButton
              variant="outlined"
              color="primary"
              onClick={() => {
                setAnimationFinished(true);
                setSliderWidth(
                  MIN_BOX_DIMENSIONS +
                    Math.round(
                      Math.random() * (0.9 * Dim_Width - MIN_BOX_DIMENSIONS)
                    )
                );
                setSliderHeight(
                  MIN_BOX_DIMENSIONS +
                    Math.round(
                      Math.random() * (0.9 * Dim_Height - MIN_BOX_DIMENSIONS)
                    )
                );
              }}
            >
              <MUIIcons.Shuffle />
            </Knobs.Button.IconButton>

            <Knobs.Button.IconButton
              variant="outlined"
              aria-label="Cancel Animation"
              color="primary"
              onClick={() => {
                cancelAnimation(width);
                cancelAnimation(height);
              }}
            >
              <MUIIcons.Stop />
            </Knobs.Button.IconButton>

            <Knobs.Button.IconButton
              variant="contained"
              color="primary"
              onClick={() => {
                setAnimationFinished(false);
                width.value = animateValue(sliderWidth);
                height.value = animateValue(sliderHeight);
              }}
            >
              <MUIIcons.PlayArrowRounded fontSize="large" />
            </Knobs.Button.IconButton>
          </Grid>
        </Grid>
      </Animated.View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: "100%",
  },
  box: {
    backgroundColor: "#001a72",
    borderRadius: 15,
    height: MIN_BOX_DIMENSIONS,
    width: MIN_BOX_DIMENSIONS,
    marginVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxGhost: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "transparent",
    borderWidth: 2,

    borderStyle: "dashed",
    borderColor: "#ccc",
  },
});
export default Translate;
