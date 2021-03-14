import React, { lazy, Suspense } from "react";
import { Typography } from "@material-ui/core";
import ColorsPlayground from "./Colors.Playground";

const TransformPlaygroundPage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Typography variant="h4">Colors</Typography>
      <ColorsPlayground />
    </div>
  );
};

export default TransformPlaygroundPage;
