import React from "react";
import { TextField } from "@material-ui/core";
import { Easing } from "react-native-reanimated";
const AnimationConfigurer = (props) => {
  return (
    <>
      <TextField
        type="number"
        variant="outlined"
        label="Duration"
        margin="dense"
      />
      <TextField
        type="number"
        variant="outlined"
        label="Easing"
        margin="dense"
      />
    </>
  );
};

export default AnimationConfigurer;

const withTimingConfigurer = [
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



