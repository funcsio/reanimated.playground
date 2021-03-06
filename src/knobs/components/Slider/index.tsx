import React from "react";
import { Slider, SliderProps } from "@material-ui/core";

const KnobSlider: React.FunctionComponent<any> = (props:SliderProps) => {
  return <Slider {...props} />;
};

export default KnobSlider;
