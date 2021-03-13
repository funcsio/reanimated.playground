import {
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import AnimationEnum, {
  AnimationFunctionsPrimary,
  AnimationFunctionsSecondary,
} from "../constants/AnimationFunctions.enum";

const ResolveAnimationFunction = (
  value: AnimationEnum | AnimationFunctionsPrimary | AnimationFunctionsSecondary
): Function => {
  switch (value) {
    case AnimationEnum.withSpring:
      return withSpring;
    case AnimationEnum.withTiming:
      return withTiming;
    case AnimationEnum.withDecay:
      return withDecay;
    case AnimationEnum.withDelay:
      return withDelay;
    case AnimationEnum.withRepeat:
      return withRepeat;
    default:
      return withTiming;
  }
};

export { ResolveAnimationFunction };
