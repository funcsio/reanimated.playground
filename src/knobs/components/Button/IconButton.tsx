import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
const IconButton: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button
      style={{ padding: 5, borderRadius: 100, minWidth: 0, margin: "0.25rem" }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default IconButton;
