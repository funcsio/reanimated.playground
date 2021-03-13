import React, { useState, useEffect } from "react";
import lodash from "lodash";
import { Easing } from "react-native-reanimated";

import EAnimationFunctions, {
  AnimationFunctionsSecondary as EAnimationFunctionsSecondary,
  AnimationFunctionsPrimary as EAnimationFunctionsPrimary,
} from "../../constants/AnimationFunctions.enum";
import { ResolveAnimationFunction } from "../../utils/AnimationFunction.Resolver";
import KnobsComponents from "../../knobs/components";
import KnobsContainers from "../../knobs/containers";

interface IAnimationConfigurerRendererProps {
  setParentConfig: Function;
  setParentAnimationFunction: Function;
  isSecondary?: Boolean;
}

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
};
const AnimationConfigurerRenderer: React.FunctionComponent<IAnimationConfigurerRendererProps> = (
  props
) => {
  const [animationFunction, setAnimationFunction] = useState(
    EAnimationFunctions.withTiming
  );

  const [animationConfig, setAnimationConfig] = useState(
    InitialAnimationConfig
  );

  useEffect(() => {
    props.setParentConfig(animationConfig[animationFunction]);
    props.setParentAnimationFunction(animationFunction);
  }, [props, animationConfig, animationFunction]);

  const handleConfigPropertyChange = (parentObject, partiallyUpdatedObject) => {
    return lodash.cloneDeep(lodash.merge(parentObject, partiallyUpdatedObject));
  };
  const withTimingUIConfiguration = [
    {
      type: "TextField",
      props: {
        type: "number",
        variant: "outlined",
        label: "Duration",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withTiming].duration,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withTiming]: {
                duration: parseInt(e.target.value, 10) | 0,
              },
            });
          });
        },
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
        value: animationConfig[EAnimationFunctions.withSpring].damping,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withSpring]: {
                damping: parseInt(e.target.value, 10) | 0,
              },
            });
          });
        },
      },
    },
    {
      type: "TextField",
      props: {
        type: "number",
        variant: "outlined",
        label: "Mass",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withSpring].mass,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withSpring]: {
                mass: parseInt(e.target.value, 10) | 0,
              },
            });
          });
        },
      },
    },
    {
      type: "TextField",
      props: {
        type: "number",
        variant: "outlined",
        label: "Stiffness",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withSpring].stiffness,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withSpring]: {
                stiffness: parseInt(e.target.value, 10) | 0,
              },
            });
          });
        },
      },
    },
    {
      type: "Switch",

      props: {
        label: "Overshoot Clamping",
        checked:
          animationConfig[EAnimationFunctions.withSpring].overshootClamping,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withSpring]: {
                overshootClamping: e.target.checked,
              },
            });
          });
        },
      },
    },
    {
      type: "TextField",
      props: {
        type: "number",
        variant: "outlined",
        label: "RestDisplacementThreshold",
        margin: "dense",
        value:
          animationConfig[EAnimationFunctions.withSpring]
            .restDisplacementThreshold,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withSpring]: {
                restDisplacementThreshold: parseFloat(e.target.value) || 0,
              },
            });
          });
        },
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
        value:
          animationConfig[EAnimationFunctions.withSpring].restSpeedThreshold,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withSpring]: {
                restSpeedThreshold: parseFloat(e.target.value) || 0,
              },
            });
          });
        },
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
        value: animationConfig[EAnimationFunctions.withDecay].velocity,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withDecay]: {
                velocity: parseFloat(e.target.value) || 0,
              },
            });
          });
        },
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
        value: animationConfig[EAnimationFunctions.withDecay].deceleration,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withDecay]: {
                deceleration: parseFloat(e.target.value) || 0,
              },
            });
          });
        },
      },
    },
    {
      type: "TextField",
      props: {
        component: "span",
        type: "number",
        variant: "outlined",
        label: "Clamp (Start)",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withDecay].clamp[0],
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withDecay]: {
                clamp: [
                  parseInt(e.target.value, 10) | 0,
                  prevState[EAnimationFunctions.withDecay].clamp[1],
                ],
              },
            });
          });
        },
      },
    },
    {
      type: "TextField",
      props: {
        component: "span",
        type: "number",
        variant: "outlined",
        label: "Clamp (Emd)",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withDecay].clamp[1],
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withDecay]: {
                clamp: [
                  prevState[EAnimationFunctions.withDecay].clamp[0],
                  parseInt(e.target.value, 10) | 0,
                ],
              },
            });
          });
        },
      },
    },
  ];

  const withDelayUIConfiguration = [
    {
      type: "TextField",
      props: {
        type: "number",
        variant: "outlined",
        label: "Delay (ms)",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withDelay].delayMS,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withDelay]: {
                delayMS: parseInt(e.target.value) | 0,
              },
            });
          });
        },
      },
    },
  ];

  const UIConfig = (AnimationFunction: EAnimationFunctions) => {
    switch (AnimationFunction) {
      case EAnimationFunctions.withTiming:
        return withTimingUIConfiguration;
      case EAnimationFunctions.withSpring:
        return withSpringUIConfiguration;
      case EAnimationFunctions.withDecay:
        return withDecayUIConfiguration;
      case EAnimationFunctions.withDelay:
        return withDelayUIConfiguration;
    }
  };

  return (
    <>
      <KnobsComponents.Select
        label="Animation Function"
        selectProps={{
          fullWidth: true,
          value: animationFunction,
          onChange: (e) => {
            setAnimationFunction(e.target.value as EAnimationFunctions);
            props.setParentAnimationFunction(
              e.target.value as EAnimationFunctions
            );
          },
        }}
        items={(() => {
          const items = [
            {
              value: EAnimationFunctions.withTiming,
              name: "withTiming",
            },
            {
              value: EAnimationFunctions.withSpring,
              name: "withSpring",
            },
            { value: EAnimationFunctions.withDecay, name: "withDecay" },
          ];

          if (!props.isSecondary) {
            return [
              ...items,
              { value: EAnimationFunctions.withDelay, name: "withDelay" },
              { value: EAnimationFunctions.withRepeat, name: "withRepeat" },
            ];
          }
          return items;
        })()}
      />
      <KnobsContainers.DynamicSection config={UIConfig(animationFunction)} />
    </>
  );
};

AnimationConfigurerRenderer.defaultProps = {
  isSecondary: false,
};
export default AnimationConfigurerRenderer;
