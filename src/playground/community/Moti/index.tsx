import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";
import { MDXProvider } from "@mdx-js/tag";
import { Divider, Typography } from "@material-ui/core";
import MotiPlayground from "./Moti.Playground";
import { components } from "../../../containers/mdx";
import ShowCase from "./showcase";
const Content = lazy(() => importMDX("./content.mdx"));
const MotiPlaygroundPage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <div style={{ overflowX: "scroll" }}>
        <MDXProvider components={components}>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </MDXProvider>
      </div>
      <MotiPlayground />
      <br />
      <Typography variant="h4">Showcase</Typography>
      <br />
      <Divider />
      <br />
      <ShowCase />
    </div>
  );
};

export default MotiPlaygroundPage;
