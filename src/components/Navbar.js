import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  logo: {
    color: "#64ffda",
    width: 42,
    height: 42,
    fill: "none",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    height: 24,
    marginRight: theme.spacing(2),
    color: "#64ffda",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
  },
  next_to_title: {
    flexGrow: 0.05,
  },
  navbarPadding: {
    position: "relative",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: 16,
    paddingBottom: 10,
    backdropFilter: "blur(11px)",
    backgroundColor: "rgba(10, 25, 47, 0.85)",

    "&.MuiToolbar-root": {
      justifyContent: "space-between",
    },
  },
  navlinks: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
  },
  navbarLink: {
    margin: "0 5px",
    padding: 10,
    fontSize: 13,
    letterSpacing: 0.05 + "em",
    color: "#ccd6f6",
    transition: "0.2s ease",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(102, 249, 216)",
    },
    textDecoration: "none",
    "& span": {
      color: "rgb(102, 249, 216)",
    },
  },
  navbarButton: {
    border: "1px solid rgb(102, 249, 216)",
    backgroundColor: "transparent",
    padding: "12px 5px",
    borderRadius: 5,
    "& a": {
      color: "rgb(102, 249, 216)",
    },
    "&:hover": {
      backgroundColor: "#f9f9f926",
    },
  },
}));

function Navbar() {
  //material ui classes
  const classes = useStyles();
  // change navbar background
  const [navBar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    if (window.scrollY < 80) {
      setNavbar(false);
    }
  }, [window.scrollY]);

  window.addEventListener("scroll", changeBackground);

  //Framer motion 

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.645, 0.045, 0.355, 1],
        staggerChildren: 0.3,
        delay: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity : 1 }
  }





  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
      <AppBar
        elevation={0}
        color="transparent"
        style={{
          width: "100%",
          boxShadow: `${
            navBar ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none"
          }`,
        }}
        position="fixed"
      >
        <Toolbar className={classes.navbarPadding}>
          <IconButton
            component={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1] }}
            className={classes.menuButton}
          >
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 84 96"
              className={classes.logo}
            >
              <title>Logo</title>
              <g transform="translate(-8.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <path
                    d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                    fill="currentColor"
                  ></path>
                  <polygon
                    id="Shape"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                  ></polygon>
                </g>
              </g>
            </svg>
          </IconButton>

          <div className={classes.navlinks}>
            <Hidden xsDown>
              <Typography 
                component={motion.div}
                variants={container}
                initial="hidden"
                animate="show"
                className={classes.next_to_title}
                >
                <motion.a 
                  variants={item}
                  className={classes.navbarLink}>
                  <span>01.</span>About
                </motion.a>
                <motion.a 
                  variants={item}
                  className={classes.navbarLink}>
                  <span>02.</span>Work
                </motion.a>
                <motion.a 
                  variants={item}
                  className={classes.navbarLink}>
                  <span>03.</span>Contact
                </motion.a>
                <motion.button 
                  variants={item}
                  className={classes.navbarButton}>
                  <a className={classes.navbarLink} href="">
                    Resume
                  </a>
                </motion.button>
              </Typography>
            </Hidden>
            <Hidden smUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                aria-label="menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
