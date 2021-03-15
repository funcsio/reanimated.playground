import React, { useState, useEffect } from "react";
import EAnimationFunctions, {
  AnimationFunctionsSecondary as EAnimationFunctionsSecondary,
  AnimationFunctionsPrimary as EAnimationFunctionsPrimary,
} from "../../constants/AnimationFunctions.enum";
import { ResolveAnimationFunction } from "../../utils/AnimationFunction.Resolver";
import { Grid } from "@material-ui/core";
import AnimationConfigurerRenderer from "./AnimationConfigurer";
import InitialAnimationConfig from "./DefaultConfig";
interface IAnimationConfigurerProps {
  setParentAnimateWithConfig: Function;
  onAnimationFinished?: Function;
}
const AnimationConfigurer: React.FunctionComponent<IAnimationConfigurerProps> = ({
  setParentAnimateWithConfig,
  onAnimationFinished,
}) => {
  const [animationFunction, setAnimationFunction] = useState(
    EAnimationFunctions.withTiming
  );

  const [animationConfig, setAnimationConfig] = useState<any>(
    InitialAnimationConfig
  );
  const [animationFunctionChild, setAnimationFunctionChild] = useState(
    EAnimationFunctionsPrimary.withTiming
  );
  const [animationConfigChild, setAnimationConfigChild] = useState<any>(
    InitialAnimationConfig
  );

  useEffect(() => {
    const animateValue = () => {
      return (value: any) => {
        let args: Array<any> = [];
        let argsChild: Array<any> = [];
        switch (animationFunction) {
          case EAnimationFunctions.withDelay:
            args.push(animationConfig.delayMS);
            argsChild = [value, animationConfigChild, onAnimationFinished];
            return ResolveAnimationFunction(animationFunction)(
              ...args,
              ResolveAnimationFunction(animationFunctionChild)(...argsChild)
            );
          case EAnimationFunctions.withRepeat:
            args = [
              animationConfig.numberOfReps,
              animationConfig.reverse,
              onAnimationFinished,
            ];
            argsChild = [value, animationConfigChild, onAnimationFinished];
            return ResolveAnimationFunction(animationFunction)(
              ResolveAnimationFunction(animationFunctionChild)(...argsChild),
              ...args
            );
          case EAnimationFunctions.withDecay:
            args = [animationConfig, onAnimationFinished];
            return ResolveAnimationFunction(animationFunction)(...args);
          default:
            args = [value, animationConfig, onAnimationFinished];
            return ResolveAnimationFunction(animationFunction)(...args);
        }
      };
    };
    setParentAnimateWithConfig(animateValue);
  }, [
    animationFunction,
    animationConfigChild,
    animationConfig,
    animationFunctionChild,
    setParentAnimateWithConfig,
  ]);
  return (
    <Grid
      container
      spacing={5}
      justify="space-evenly"
      alignContent="center"
      alignItems="stretch"
    >
      <Grid item md>
        <AnimationConfigurerRenderer
          setParentConfig={setAnimationConfig}
          setParentAnimationFunction={setAnimationFunction}
        />
      </Grid>
      <Grid item md>
        {Object.values(EAnimationFunctionsSecondary).includes(
          EAnimationFunctions[animationFunction]
        ) && (
          <AnimationConfigurerRenderer
            isSecondary={true}
            setParentConfig={setAnimationConfigChild}
            setParentAnimationFunction={setAnimationFunctionChild}
          />
        )}
      </Grid>
    </Grid>
  );
};
export default AnimationConfigurer;
