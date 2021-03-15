import React, { useState, useEffect } from "react";
import lodash from "lodash";

import EAnimationFunctions from "../../constants/AnimationFunctions.enum";
import KnobsComponents from "../../knobs/components";
import KnobsContainers from "../../knobs/containers";
import InitialAnimationConfig from "./DefaultConfig";
import stylesCSS from "./styles.module.scss";

const styles = {
  configurationItem: {
    margin: "0.5rem 0.3rem",
  },
};
interface IAnimationConfigurerRendererProps {
  setParentConfig: Function;
  setParentAnimationFunction: Function;
  isSecondary?: Boolean;
}

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
        className: stylesCSS.configurationItem,
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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
        style: { ...styles.configurationItem },
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

  const withRepeatUIConfiguration = [
    {
      type: "TextField",
      props: {
        type: "number",
        style: { ...styles.configurationItem },
        variant: "outlined",
        label: "Number of repetations",
        margin: "dense",
        value: animationConfig[EAnimationFunctions.withRepeat].numberOfReps,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withRepeat]: {
                numberOfReps: parseInt(e.target.value) | 0,
              },
            });
          });
        },
      },
    },
    {
      type: "Switch",
      props: {
        label: "Reverse",

        checked: animationConfig[EAnimationFunctions.withRepeat].reverse,
        onChange: (e) => {
          setAnimationConfig((prevState) => {
            return handleConfigPropertyChange(prevState, {
              [EAnimationFunctions.withRepeat]: {
                reverse: e.target.checked,
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
      case EAnimationFunctions.withRepeat:
        return withRepeatUIConfiguration;
    }
  };

  return (
    <div className={stylesCSS.configurationCont}>
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
    </div>
  );
};

AnimationConfigurerRenderer.defaultProps = {
  isSecondary: false,
};
export default AnimationConfigurerRenderer;
