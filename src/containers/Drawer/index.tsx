import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { GitHub } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container, Divider } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "../../assets/logo-split.svg";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import {
  Reanimated_Components_Index,
  Community_Components_Index,
} from "../Navigation";
import Footer from "../Footer";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: "1.5rem",
    minHeight: "100vh",
  },
  parentElm: {
    paddingLeft: "0.5rem",
  },
}));

function ResponsiveDrawer(props: any) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = (value: any) => {
    if (value === false) {
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  };

  const drawer = (
    <div>
      <div style={{ padding: "0.5rem" }}>
        <Link to="/" onClick={() => handleDrawerToggle(false)}>
          <img
            src={Logo}
            alt="reanimated.playground logo"
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
          <Divider />
          <Typography style={{ fontWeight: 100 }} variant="h5"></Typography>
        </Link>
      </div>
      <div className={classes.parentElm}>
        <Typography variant="h6">Reanimated</Typography>
        <List>
          {Reanimated_Components_Index.map((elm, index) => (
            <Link
              key={elm.name}
              to={`/reanimated/${elm.path}`}
              onClick={() => handleDrawerToggle(false)}
            >
              <ListItem button key={elm.name}>
                <ListItemText primary={elm.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>

      <div className={classes.parentElm}>
        <Typography variant="h6">Community</Typography>
        <List className={classes.parentElm}>
          {Community_Components_Index.map((elm, index) => (
            <Link
              key={elm.name}
              to={`/community/${elm.path}`}
              onClick={() => handleDrawerToggle(false)}
            >
              <ListItem button key={elm.name}>
                <ListItemText primary={elm.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="h6" noWrap>
              {/* Reanimated Playground */}
            </Typography>
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <IconButton
              color="inherit"
              rel="noopener noreferrer"
              href="https://github.com/funcsio/reanimated.playground"
              target="_blank"
            >
              <GitHub />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={() => handleDrawerToggle(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{ maxWidth: "100vw" }}>
          <Container style={{ minHeight: "60vh" }} maxWidth="lg">
            <Navigation />
          </Container>
          <Footer />
        </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
