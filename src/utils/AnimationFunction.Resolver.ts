import {
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import AnimationEnum from "../constants/AnimationFunctions.enum";

const ResolveAnimationFunction = (value: AnimationEnum): Function => {
  switch (value) {
    case AnimationEnum.withSpring:
      return withSpring;
    case AnimationEnum.withTiming:
      return withTiming;
    case AnimationEnum.withDecay:
      return withDecay;
    case AnimationEnum.withDelay:
      return withDelay;
    default:
      return withTiming;
  }
};

export { ResolveAnimationFunction };
