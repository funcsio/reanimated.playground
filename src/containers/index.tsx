import React from "react";
import Drawer from "./Drawer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { HashRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2089dc",
    },
  },
});
export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Drawer />
      </Router>
    </ThemeProvider>
  );
}
