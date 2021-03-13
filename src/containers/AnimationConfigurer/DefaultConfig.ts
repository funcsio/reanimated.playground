import { Easing } from "react-native-reanimated";
import EAnimationFunctions from "../../constants/AnimationFunctions.enum";
const InitialAnimationConfig = {
  [EAnimationFunctions.withTiming]: {
    duration: 300,
    easing: Easing.ease,
  },
  [EAnimationFunctions.withSpring]: {
    damping: 10,
    mass: 1,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.001,
    restSpeedThreshold: 0.001,
  },

  [EAnimationFunctions.withDecay]: {
    velocity: 0,
    deceleration: 0.998,
    clamp: [],
  },
  [EAnimationFunctions.withDelay]: {
    delayMS: 1000,
  },
  [EAnimationFunctions.withRepeat]: {
    numberOfReps: 2,
    reverse: false,
  },
};

export default InitialAnimationConfig;
