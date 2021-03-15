import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "../../pages/Home";
import { Dimensions, Tranform, Colors } from "../../playground/reanimated";
import { Moti } from "../../playground/community";
export const Reanimated_Components_Index = [
  {
    name: "Dimensions",
    component: Dimensions,
    path: "dimensions",
  },
  {
    name: "Transform",
    component: Tranform,
    path: "transform",
  },
  {
    name: "Colors",
    component: Colors,
    path: "colors",
  },
];

export const Community_Components_Index = [
  {
    name: "Moti",
    component: Moti,
    path: "moti",
  },
];
export default function Navigation() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact />

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
        <Route path="/community">
          {Community_Components_Index.map((elm, idx) => {
            return (
              <Route key={idx} path={`/community/${elm.path}`} exact>
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
