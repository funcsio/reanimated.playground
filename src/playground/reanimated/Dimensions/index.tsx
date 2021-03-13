import React, {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as MUIIcons from "@material-ui/icons";

import { StyleSheet, View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withDelay,
  withRepeat,
  useAnimatedGestureHandler,
  withDecay,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import Draggable, { DraggableEvent } from "react-draggable";
import Icon from "react-native-vector-icons/Feather";
import Knobs from "../../../knobs";
import AnimationFunctionsEnum from "../../../constants/AnimationFunctions.enum";
import { ResolveAnimationFunction } from "../../../utils/AnimationFunction.Resolver";
import { useSize } from "../../../hooks";
import { Card, Fab, Grid, IconButton, Button } from "@material-ui/core";
import Editor from "@monaco-editor/react";
import AnimationConfigurer from "../../../containers/AnimationConfigurer";

const MIN_BOX_DIMENSIONS = 100;

const Translate = () => {
  const ref: any = React.createRef();

  const { width: Dim_Width, height: Dim_Height } = useSize(ref);
  const [animationFinished, setAnimationFinished] = useState(true);

  const [sliderWidth, setSliderWidth] = useState<number>(MIN_BOX_DIMENSIONS);
  const [sliderHeight, setSliderHeight] = useState<number>(MIN_BOX_DIMENSIONS);

  const width = useSharedValue(sliderWidth);
  const height = useSharedValue(sliderHeight);

  const [animateValue, setAnimateValue] = useState<any>();

  // const animateValue = (value: any) => {
  //   // return withSpring(value, {}, (isFinished) => {
  //   //   setAnimationFinished(isFinished);
  //   // });
  //   const args: Array<any> = [
  //     value,
  //     animationConfig,
  //     ,
  //   ];
  //   // withDelay
  //   // return ResolveAnimationFunction(animationFunction).call(this, 400,withTiming(value));
  //   return ResolveAnimationFunction(animationFunction).call(this, ...args);
  // };
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
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs>
            <Knobs.Slider
              min={MIN_BOX_DIMENSIONS}
              max={Dim_Width}
              value={sliderWidth}
              onChange={handlerWidthChange}
            />
            <Knobs.Slider
              min={MIN_BOX_DIMENSIONS}
              max={Dim_Height}
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
                    Math.round(Math.random() * (Dim_Width - MIN_BOX_DIMENSIONS))
                );
                setSliderHeight(
                  MIN_BOX_DIMENSIONS +
                    Math.round(
                      Math.random() * (Dim_Height - MIN_BOX_DIMENSIONS)
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
      {/* <Editor
        height="20vh"
        options={{
          lineNumbers: "off",
          readOnly: true,
        }}
        defaultLanguage="javascript"
        defaultValue="Hello"
      /> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  cont: {
    minHeight: "50vh",
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
