import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pl={window.innerWidth < 960 ?  1: 5}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const StyledTabs = withStyles({
    root: {
        minWidth: 175,
    },

    indicator: {
      backgroundColor: '#64ffda',
      left:0,
      width: 2,
    },
  })(Tabs);
  
  const StyledTab = withStyles({
    selected: {
        color: "#64ffda !important",
    },

    wrapper: {
        alignItems: "baseline",
    },
  })(Tab);
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent",
        display: 'flex',
        width: "100%",
    },
    
    
    section: {
        margin: "0px auto",
        padding: "100px 0px",
        maxWidth: 700, 
    },
    WorkTitle: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        margin: "10px 0px 5px",
        width: "100%",
        fontSize: "clamp(16px,5vw,18px)",
        whiteSpace: "nowrap",
        fontWeight: 600,
        color: "#ccd6f6",
        lineHeight: 1.1,
        "& a":{
            display: "inline-block",
            textDecoration: "none",
            textDecorationSkipInk: "auto",
            position: "relative",
            transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
            cursor: "pointer",
            color: "#64ffda",
        },
        "& a:hover": {
            outline: 0,
        },
        "& a::after":{
            content: '""',
            display: "block",
            width: 0,
            height: 1,
            position: "relative",
            bottom: "0.1em",
            backgroundColor: "#64ffda",
            transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
            opacity: 0.5,
        },
        "& a:hover::after": {
            width: "100%",
        },
    },
    title: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        margin: "10px 0px 40px",
        width: "100%",
        fontSize: "clamp(26px,5vw,32px)",
        whiteSpace: "nowrap",
        fontWeight: 600,
        color: "#ccd6f6",
        lineHeight: 1.1,
        "&:before": {
          position: "relative",
          bottom: -2,
          counterIncrement: "section 2",
          content: '"0" counter(section) "."',
          marginRight: 15,
          color: "rgb(100, 255, 218)",
          fontSize: "clamp(16px,3vw,24px)",
          fontWeight: 400,
        },
        "&:after": {
          content: '""',
          display: "block",
          position: "relative",
          top: -1,
          width: 300,
          height: 1,
          marginLeft: 20,
          backgroundColor: "rgb(35, 53, 84)",
        },
      },
    styledtab: {
        textDecoration: "none",
        textDecorationSkipInk: "auto",
        position: "relative",
        display: "flex",
        webkitboxAlign: "center",
        alignItems: "center",
        width: "60%",
        height: 42,
        padding: "0px 20px 2px",
        borderLeft: "2px solid #233554",
        backgroundColor: "transparent",
        color: "#8892b0",
        textTransform: "capitalize",
        fontSize: 13,
        whiteSpace: "nowrap",
        textAlign: "left",
        "&:hover": {
            backgroundColor: "#112240",
            color: "#64ffda",
        },
        "&:focus": {
            backgroundColor: "#112240",
            color: "#64ffda",
        }
    },
    content: {
        fontSize: 17,
        wordSpacing: "0.08em",
        "&::before": {
            content: '"▹"',
            position: "relative",
            left: 0,
            color: "rgb(100, 255, 218)",
            fontSize: 17,
            lineHeight: 1,
            paddingRight: 10,
          },
    }

}));


function WorkPlacement() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    // Framer motion
    const containerVarients = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }

        console.log();
    }, [controls, inView]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <motion.section 
        variants={containerVarients}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
        className={classes.section}
        >
            <h2 className={classes.title}>About Me</h2>
            <div
            style={(window.innerWidth < 960) ? {display: "block"} : {display: 'flex'}} 
            className={classes.root}>
            <StyledTabs
                orientation= {window.innerWidth < 960 ?  "horizontal": "vertical"} 
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                
            >
                <StyledTab className={classes.styledtab} label="One Time Code" {...a11yProps(0)} />
                <StyledTab className={classes.styledtab} label="Horizontal" {...a11yProps(1)} />
                <StyledTab className={classes.styledtab} label="Proxym group" {...a11yProps(2)} />
                <StyledTab className={classes.styledtab} label="Azurreo" {...a11yProps(3)} />
            </StyledTabs>
            <TabPanel value={value} index={0}>
                <h3 ref={ref} className={classes.WorkTitle}>Founder CEO &nbsp;<a target="_blank"  rel="noreferrer" href="http://www.isima.rnu.tn/">@ One Time Code </a></h3>
                <p style={{fontSize: 13}}>Dec 2020 - Present</p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3 className={classes.WorkTitle}>Engineer&nbsp;<a target="_blank"  rel="noreferrer" href="http://www.isima.rnu.tn/">@ Horizontal </a></h3>
                <p style={{fontSize: 13}}>Dec 2020 - Present</p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>

            </TabPanel>
            <TabPanel value={value} index={2}>
                <h3 className={classes.WorkTitle}>Engineer&nbsp;<a target="_blank"  rel="noreferrer" href="http://www.isima.rnu.tn/">@ Proxym group </a></h3>
                <p style={{fontSize: 13}}>Dec 2020 - Present</p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h3 className={classes.WorkTitle}>Engineer &nbsp;<a target="_blank"  rel="noreferrer" href="http://www.isima.rnu.tn/">@ Azurreo </a></h3>
                <p style={{fontSize: 13}}>Dec 2020 - Present</p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>
                <p className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis laudantium tempora </p>

            </TabPanel>
            
            </div>
        </motion.section>
        
    );
}

export default WorkPlacement
