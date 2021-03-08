import React, {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import Draggable, { DraggableEvent } from "react-draggable";
import Icon from "react-native-vector-icons/Feather";
import Knobs from "../../../knobs";
import KnobContainers from "../../../knobs/containers";
import { useSize } from "../../../hooks";
const Transform = () => {
  const ref: any = useRef(null);
  const { width, height } = useSize(ref);

  const [animationFinished, setAnimationFinished] = useState(true);

  const [sliderX, setSliderX] = useState<number>(0);
  const [sliderY, setSliderY] = useState<number>(0);
  const [sliderRotateZ, setSliderRotateZ] = useState<number>(0);

  const X = useSharedValue(0);
  const Y = useSharedValue(0);
  const RotateZ = useSharedValue(0);

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

  const animateValue = (value: any) => {
    return withSpring(value, {}, (isFinished) => {
      setAnimationFinished(isFinished);
    });
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
      <View style={{ flex: 1 }} ref={ref}>
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
      <Button
        title="Animate"
        onPress={() => {
          setAnimationFinished(false);
          X.value = animateValue(sliderX);
          Y.value = animateValue(sliderY);
          RotateZ.value = animateValue(sliderRotateZ);
        }}
      />
      <Button
        title="Random"
        onPress={() => {
          setAnimationFinished(true);
          setSliderX(Math.round(Math.random() * (width - 100)));
          setSliderY(Math.round(Math.random() * (height - 100)));
          setSliderRotateZ(Math.round(Math.random() * 360));
        }}
      />

      <Knobs.Slider
        min={0}
        max={width - 100}
        value={sliderX}
        onChange={handlerXChange}
        aria-labelledby="continuous-slider"
      />
      <Knobs.Slider
        min={0}
        max={height - 100}
        value={sliderY}
        onChange={handlerYChange}
        aria-labelledby="continuous-slider"
      />
      <Knobs.Slider
        min={0}
        max={360}
        value={sliderRotateZ}
        onChange={handlerRotateZChange}
      />
      <KnobContainers.DynamicSection
        config={[
          {
            type: "TextField",
            props: {
              type: "number",
              variant: "outlined",
              label: "Duration",
              margin: "dense",
            },
          },
          {
            type: "TextField",
            props: {
              type: "number",
              variant: "outlined",
              label: "Easing",
              margin: "dense",
            },
          },
        ]}
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
