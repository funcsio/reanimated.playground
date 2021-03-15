import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import HelloWorld from "./HelloWorld";
import AnimatePresence from "./AnimatePresence";
import AnimateHeight from "./AnimateHeight";
import ExitBeforeEnter from "./ExitBeforeEnter";
import LoopAnimation from "./LoopAnimation";
import Variants from "./Variants";

const useStyles = makeStyles({
  card: { margin: "1rem 0.5rem", padding: 10 },
});
const ShowCase = () => {
  const stylesCSS = useStyles();
  return (
    <>
      <Card className={stylesCSS.card}>
        <Typography variant="h5">Hello World</Typography>
        <Typography variant="body1">
          This is all it takes to create an animation that fades and scales in
          with Moti:
        </Typography>
        <HelloWorld />
      </Card>
      <Card className={stylesCSS.card}>
        <Typography variant="h5">Animate Presence</Typography>
        <Typography variant="body1"></Typography>
        <AnimatePresence />
      </Card>
      <Card className={stylesCSS.card}>
        <Typography variant="h5">Animate Height</Typography>
        <Typography variant="body1">
          Animate changes in variable height.
        </Typography>
        <AnimateHeight />
      </Card>
      <Card className={stylesCSS.card}>
        <Typography variant="h5">Exit Before Enter</Typography>
        <Typography variant="body1">
          Smoothly hide one component before you let its sibling enter.
        </Typography>
        <ExitBeforeEnter />
      </Card>
      <Card className={stylesCSS.card}>
        <Typography variant="h5">Loop Animation</Typography>
        <Typography variant="body1">
          Create a loop animation of a box that goes up and down infinitely.
        </Typography>
        <LoopAnimation />
      </Card>
      <Card className={stylesCSS.card}>
        <Typography variant="h5">Variants</Typography>
        <Typography variant="body1">
          Variants are a common use case for animations. Moti makes this easy.
        </Typography>
        <Variants />
      </Card>
    </>
  );
};
export default ShowCase;
