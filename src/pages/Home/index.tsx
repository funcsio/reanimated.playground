import React from "react";
import clsx from "classnames";
import { Card, Divider, Grid, Typography } from "@material-ui/core";
import * as MUIcons from "@material-ui/icons";
import Icon from "react-native-vector-icons/Feather";
import Logo from "../../assets/logo.svg";
import MotiLogo from "../../assets/moti.svg";
import stylesCSS from "./styles.module.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={stylesCSS.root}>
      <div className={stylesCSS.hero}>
        <img className={stylesCSS.heroImg} src={Logo} />
        <p className={stylesCSS.tagline}>Unleashing the Potential</p>
      </div>

      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/reanimated/colors">
            <div className={clsx(stylesCSS.demoColors, stylesCSS.featureCard)}>
              <ReanimatedBadge />
              <Typography variant="h4" className={stylesCSS.featureHeading}>
                Colors
              </Typography>
              <MUIcons.PaletteRounded fontSize="large" />
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/reanimated/dimensions">
            <div
              className={clsx(stylesCSS.demoDimensions, stylesCSS.featureCard)}
            >
              <ReanimatedBadge />
              <Typography variant="h4" className={stylesCSS.featureHeading}>
                Dimensions
              </Typography>
              <Icon name="maximize-2" size={30} />
            </div>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/reanimated/transform">
            <div
              className={clsx(stylesCSS.demoTransform, stylesCSS.featureCard)}
            >
              <ReanimatedBadge />
              <Typography variant="h4" className={stylesCSS.featureHeading}>
                Transform
              </Typography>
              <Icon name="move" size={30} color="#fafafa" />
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/community/moti">
            <div className={clsx(stylesCSS.demoMoti, stylesCSS.featureCard)}>
              <CommunityBadge />
              <img src={MotiLogo} style={{ width: "40%", maxWidth: 150 }} />
            </div>
          </Link>
        </Grid>
        <Grid item xs>
          <Typography className={stylesCSS.more}>
            More, Coming Soon...
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const ReanimatedBadge = () => {
  return (
    <div className={clsx(stylesCSS.badge, stylesCSS.badgeReanimated)}>
      <Typography variant="overline">Reanimated</Typography>
    </div>
  );
};
const CommunityBadge = () => {
  return (
    <div className={clsx(stylesCSS.badge, stylesCSS.badgeCommunity)}>
      <Typography variant="overline">Community</Typography>
    </div>
  );
};

export default HomePage;
