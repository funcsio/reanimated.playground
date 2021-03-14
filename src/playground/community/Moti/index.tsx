import React, { lazy, Suspense } from "react";
import { Typography } from "@material-ui/core";
import MotiPlayground from "./Moti.Playground";

const MotiPlaygroundPage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Typography variant="h4">Moti</Typography>
      <MotiPlayground />
    </div>
  );
};

export default MotiPlaygroundPage;
