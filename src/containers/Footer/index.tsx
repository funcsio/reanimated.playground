import React from "react";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import * as MUIcons from "@material-ui/icons";

import LogoStacked from "../../assets/logo-split.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.root}>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h6">Why?</Typography>
          <Typography>
            Reanimated is Awesome 😎. And with the release of v2, it's faster,
            new internals & the API quite refined. Hence the semantics are a bit
            different from v1 therefore there's some exploration and tinkering
            required to get comfortable with the new API.
          </Typography>
          <br />
          <Typography variant="h6">How it bridges the gap?</Typography>
          <Typography>
            The idea behind this playground is inspired by a similar problem I
            have solved in past by React Native Elements Playground 🚀. <br />
            With this, a user can test various possibilities with the ecosystem
            and generate a code snippet on the fly (coming soon). <br />
            <br />
            #UnleashingThePotential
          </Typography>
          <img
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/funcsio/reanimated.playground?style=social"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <img className={styles.logo} src={LogoStacked} />

          <List>
            <a href="https://github.com/funcsio">
              <ListItem>
                <MUIcons.GitHub className={styles.socialIcon} />
                GitHub
              </ListItem>
            </a>
            <a href="https://twitter.com/funcsio">
              <ListItem>
                <MUIcons.Twitter className={styles.socialIcon} /> Twitter
              </ListItem>
            </a>
            <a href="https://www.youtube.com/channel/UCF0mlih0bfq5iAPzRFX3XPw">
              <ListItem>
                <MUIcons.YouTube className={styles.socialIcon} /> YouTube
              </ListItem>
            </a>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
