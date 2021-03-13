import React, { useEffect, useState, useReducer } from "react";
import { Easing } from "react-native-reanimated";
import lodash from "lodash";
import EAnimationFunctions from "../constants/AnimationFunctions.enum";
import KnobsContainers from "../knobs/containers";
import Knobs from "../knobs";

// A cutom hook to configure and interact with various animation functions
const useAnimationConfigurer = (AnimationFunction: EAnimationFunctions) => {
  const [
    selectedAnimationFunction,
    setSelectedAnimationFunction,
  ] = useState<EAnimationFunctions>(AnimationFunction);

  useEffect(() => {
    setSelectedAnimationFunction(AnimationFunction);
  }, [AnimationFunction]);

  return {};
};

export default useAnimationConfigurer;
