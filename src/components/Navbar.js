import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from "framer-motion";
import { Link } from "react-scroll"
import resume from "../file/resume.pdf"
import logo from "../image/drawing.svg"

const useStyles = makeStyles((theme) => ({
  logo: {
    color: "#64ffda",
    width: 80,
    height: 80,
    fill: "none",
  },
  list: {
    width: 245,
    height: "100%",
    backgroundColor: "#112240",
    boxShadow: "-10px 0px 30px -15px rgba(2,12,27,0.7)",
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
    display: "flex",
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
    textDecoration: "none",
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
  listToggleDrawer:{
    margin: 10,
  
    "& div": {
      display: "flex",
    },
    "& span ,& p": {
      fontSize: 18,
      marginRight: 5,
      color: "rgb(204, 214, 246)",
    },
    "& span": {
      color: "rgb(100, 255, 218)",
      fontSize: 17,
    }
    
  }
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
  }, []);

  window.addEventListener("scroll", changeBackground);

  //Framer motion 

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
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
      
      <List className={classes.listToggleDrawer}>
        {["About", "Work", "Contact", "Resume"].map((text, index) => (
          <ListItem button key={text}>
            {(text === "Resume") ? 
              <a className={classes.navbarButton} href={resume}><ListItemText  style={{paddingLeft: 10,width:"auto"}} primary={text} /></a>
              :<ListItemText primary={(index+1+".")} secondary={text}/>
            }
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
            <img src={logo} className={classes.logo} alt="logo" />
            
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
                <motion.div 
                  variants={item}
                  className={classes.navbarLink}>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>01.</span>About
                    </Link>
                </motion.div>
                <motion.div 
                  variants={item}
                  className={classes.navbarLink}>
                    <Link
                      activeClass="active"
                      to="project"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>02.</span>Work
                    </Link>

                </motion.div>
                <motion.div 
                  variants={item}
                  className={classes.navbarLink}>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>03.</span>Contact
                    </Link>

                </motion.div>
                <motion.button 
                  variants={item}
                  className={classes.navbarButton}>
                  <a href={resume} className={classes.navbarLink} 
                  >
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
                onClick={toggleDrawer('left', true)} 
                
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
