import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";

const KnobTextField: React.FunctionComponent<any> = (props: TextFieldProps) => {
  return <TextField {...props} InputLabelProps={{ shrink: true }} />;
};

export default KnobTextField;
