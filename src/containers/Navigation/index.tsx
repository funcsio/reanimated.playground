import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Dimensions, Tranform } from "../../playground/reanimated";

export const Reanimated_Components_Index = [
  {
    name: "Transform",
    component: Tranform,
    path: "transform",
  },
  {
    name: "Dimensions",
    component: Dimensions,
    path: "dimensions",
  },
];

export default function Navigation() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/reanimated">
          {Reanimated_Components_Index.map((elm, idx) => {
            return (
              <Route key={idx} path={`/reanimated/${elm.path}`} exact>
                <Helmet>
                  <title>{elm.name} | Playground 🚀</title>
                </Helmet>
                <elm.component />
              </Route>
            );
          })}
        </Route>
      </Switch>
    </React.Fragment>
  );
}
