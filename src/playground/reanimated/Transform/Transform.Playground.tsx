import React, { useRef, useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import * as MUIIcons from "@material-ui/icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  cancelAnimation,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/Feather";
import Knobs from "../../../knobs";
import KnobContainers from "../../../knobs/containers";
import { useSize } from "../../../hooks";
import AnimationConfigurer from "../../../containers/AnimationConfigurer";
import { FormLabel, Grid } from "@material-ui/core";
const Transform = () => {
  const ref: any = useRef(null);

  const { width: Dim_Width, height: Dim_Height } = useSize(ref);

  const [animationFinished, setAnimationFinished] = useState(true);

  const [sliderX, setSliderX] = useState<number>(0);
  const [sliderY, setSliderY] = useState<number>(0);
  const [sliderRotateZ, setSliderRotateZ] = useState<number>(0);

  const X = useSharedValue(sliderX);
  const Y = useSharedValue(sliderY);
  const RotateZ = useSharedValue(sliderRotateZ);

  const [animateValue, setAnimateValue] = useState<any>();

  const AnimatedStyles = {
    animate: useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: X.value,
          },
          {
            translateY: Y.value,
          },
          {
            rotateZ: `${RotateZ.value}deg`,
          },
        ],
      };
    }),
  };

  const handlerXChange = (_: any, newValue: number | number[]) => {
    setAnimationFinished(true);
    setSliderX(newValue as number);
  };

  const handlerYChange = (_: any, newValue: number | number[]): void => {
    setAnimationFinished(true);
    setSliderY(newValue as number);
  };

  const handlerRotateZChange = (_: any, newValue: number | number[]): void => {
    setAnimationFinished(true);
    setSliderRotateZ(newValue as number);
  };

  return (
    <Animated.View
      style={{
        height: "50vh",
        minHeight: 500,
        maxHeight: 720,
        width: "100%",
        display: "flex",
        flex: 1,
      }}
    >
      <View
        style={{ flex: 1, minHeight: "50vh", marginBottom: "5%" }}
        ref={ref}
      >
        <Animated.View style={[AnimatedStyles.animate, styles.box]}>
          <Icon name="move" size={30} color="#fafafa" />
        </Animated.View>

        {animationFinished && (
          <>
            <Animated.View
              style={[
                styles.box,
                styles.boxGhost,
                {
                  transform: [
                    { translateX: sliderX },
                    { translateY: sliderY },
                    { rotateZ: `${sliderRotateZ}deg` },
                  ],
                },
              ]}
            ></Animated.View>
          </>
        )}
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
            variant="contained"
            color="primary"
            onClick={() => {
              setAnimationFinished(false);
              X.value = animateValue(sliderX);
              Y.value = animateValue(sliderY);
              RotateZ.value = animateValue(sliderRotateZ);
            }}
          >
            <MUIIcons.PlayArrowRounded fontSize="large" />
          </Knobs.Button.IconButton>
          <Knobs.Button.IconButton
            variant="outlined"
            aria-label="Cancel Animation"
            color="primary"
            onClick={() => {
              setAnimationFinished(true);
              cancelAnimation(X);
              cancelAnimation(Y);
              cancelAnimation(RotateZ);
            }}
          >
            <MUIIcons.Stop />
          </Knobs.Button.IconButton>

          <Knobs.Button.IconButton
            variant="outlined"
            color="primary"
            onClick={() => {
              setAnimationFinished(true);
              setSliderX(Math.round(Math.random() * (Dim_Width - 100)));
              setSliderY(Math.round(Math.random() * (Dim_Height - 100)));
              setSliderRotateZ(Math.round(Math.random() * 360));
            }}
          >
            <MUIIcons.Shuffle />
          </Knobs.Button.IconButton>
        </Grid>
        <Grid item xs={12} md>
          <FormLabel>X</FormLabel>
          <Knobs.Slider
            min={0}
            max={Dim_Width - 100}
            value={sliderX}
            onChange={handlerXChange}
            aria-labelledby="continuous-slider"
          />
          <FormLabel>Y</FormLabel>
          <Knobs.Slider
            min={0}
            max={Dim_Height - 100}
            value={sliderY}
            onChange={handlerYChange}
            aria-labelledby="continuous-slider"
          />
          <FormLabel>Rotate</FormLabel>
          <Knobs.Slider
            min={0}
            max={360}
            value={sliderRotateZ}
            onChange={handlerRotateZChange}
          />
        </Grid>
      </Grid>
      <AnimationConfigurer
        setParentAnimateWithConfig={setAnimateValue}
        onAnimationFinished={(isFinished) => {
          setAnimationFinished(isFinished);
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#001a72",
    borderRadius: 15,
    height: 100,
    width: 100,
    marginVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxGhost: {
    position: "absolute",
    zIndex: 2,
    opacity: 0.2,
    borderWidth: 5,
    borderStyle: "dotted",
    borderColor: "#000",
  },
});
export default Transform;
