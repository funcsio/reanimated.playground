import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";
import { MDXProvider } from "@mdx-js/tag";
import components from "./components";

const MDXRenderer: React.FunctionComponent<{}> = (props) => (
  <>
    <MDXProvider components={components}>
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </MDXProvider>
  </>
);

export { MDXRenderer };
