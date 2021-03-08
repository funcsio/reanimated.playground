import React, { useEffect, useState } from "react";

import EAnimationFunctions from "../constants/AnimationFunctions.enum";
import KnobsContainers from "../knobs/containers";

// A cutom hook to configure and interact with various animation functions
const useAnimationConfigurer = (AnimationFunction: EAnimationFunctions) => {
  const [
    selectedAnimationFunction,
    setSelectedAnimationFunction,
  ] = useState<EAnimationFunctions>(AnimationFunction);

  useEffect(() => {
    setSelectedAnimationFunction(AnimationFunction);
  }, [AnimationFunction]);

  const AnimationConfigurerRenderer = () => {
    return (
      <KnobsContainers.DynamicSection
        config={UIConfig(selectedAnimationFunction)}
      />
    );
  };

  return {
    AnimationConfigurerRenderer,
  };
};

const UIConfig = (AnimationFunction: EAnimationFunctions) => {
  switch (AnimationFunction) {
    case EAnimationFunctions.withTiming:
      return withTimingUIConfiguration;
    case EAnimationFunctions.withSpring:
      return withSpringUIConfiguration;
    case EAnimationFunctions.withDecay:
      return withDecayUIConfiguration;
  }
};

const withTimingUIConfiguration = [
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
];

const withSpringUIConfiguration = [
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "Damping",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "Mass",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "Stiffness",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "OvershootClamping",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "RestDisplacementThreshold",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "RestSpeedThreshold",
      placeholder: "restSpeedThreshold",
      margin: "dense",
    },
  },
];

const withDecayUIConfiguration = [
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "Velocity",
      placeholder: "velocity",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "Deceleration",
      placeholder: "deceleration",
      margin: "dense",
    },
  },
  {
    type: "TextField",
    props: {
      type: "number",
      variant: "outlined",
      label: "Clamp",
      placeholder: "clamp",
      margin: "dense",
    },
  },
];

export default useAnimationConfigurer;
