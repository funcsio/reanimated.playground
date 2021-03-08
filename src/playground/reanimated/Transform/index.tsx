import React, { lazy, Suspense } from "react";
import { Typography } from "@material-ui/core";
import TransformPlayground from "./Transform.Playground";

const TransformPlaygroundPage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Typography variant="h4">Transform</Typography>
      <TransformPlayground />
    </div>
  );
};

export default TransformPlaygroundPage;
