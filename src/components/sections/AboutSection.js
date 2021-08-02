import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import image from "../../image/image.jpg"



const useStyle = makeStyles((theme) => ({
  section: {
    margin: "0px Auto",
    padding: "100px 0px",
    maxWidth: 900,
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
      counterIncrement: "section 1",
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
  content: {
    fontSize: 17,
    wordSpacing: "0.08em",
    width: "auto",
    [theme.breakpoints.down("xs")]: {
      width: 280, 
    },
    "& ul": {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(140px, 200px))",
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
      },
      padding: 0,
      margin: "20px 0px 0px",
      overflow: "hidden",
      listStyle: "none",
      "& li": {
        position: "relative",
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 13,
        "&::before": {
          content: '"▹"',
          position: "absolute",
          left: 0,
          color: "rgb(100, 255, 218)",
          fontSize: 14,
          lineHeight: 1,
        },
      },
    },
  },

  imageContainer: {
    position: "relative",
    maxWidth: 300,
  },
  imageBorder: {
    border: "2px solid rgb(100, 255, 218)",
    width: "100%",
    height: 300,
    top: 30,
    right: -30,
    position: "relative",
    borderRadius: "1%",
    [theme.breakpoints.between(0,375)]: {
      width: "95%",
      height: 235,
    },
  },
  image: {
    position: "absolute",
    top: 0,
    right: 0,
    "& img": {
      width: "100%",
      borderRadius: "1%",
    },
    "&::after": {
      width: "100%",
      height: "98%",
      content: '""',
      background: "rgb(0 64 255 / 32%)",
      position: "absolute",
      right: 0,
      transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    },
    "&:hover::after": {
      backgroundColor: "transparent",
    },
  },
}));

function AboutSection() {
  const classes = useStyle();

  //Border animation
  const [BorderAnimation, setBorderAnimation] = useState(false)

  // Make framer motion animation work when the dom element in-view
  const containerVarients = {
    hidden: { y: 30, opacity: 0},
    visible: { y: 0, opacity: 1},
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    console.log();
  }, [controls, inView]);
  return (
    <motion.section
      id="about"
      variants={containerVarients}
      initial="hidden" 
      animate={controls}
      transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1] }}
      className={classes.section}
    >
      <h2 ref={ref} className={classes.title}>About Me</h2>
      <Grid container spacing={8} justify="center">
        <Grid item md={7}>
          <div className={classes.content}>
            <p>
            I'm a Tunisian Arab woman with more than five years of experience in tech and programming. My name means dreams and I'm a real dreamer who loves sarcasm and good humour. I love also to challenge myself to be a better version of myself each time. However, my main objective is to make an impact and involve women in tech as much as possible. Outside of work I like spending time with my family, hiking, camping with my friends and discovering new places.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="skills-list">
              <li>Android</li>
              <li>iOS</li>
              <li>React native</li>
              <li>Wordpress</li>
              <li>Java</li>
              <li>kotlin</li>
              <li>Swift</li>
              <li>javascript</li>
              <li>php</li>
            </ul>
          </div>
        </Grid>
        <Grid item md={5} sm={8} xs={11}>
          
          <div className={classes.imageContainer}>
            <motion.div animate={BorderAnimation ? {x:-10, y:-10} : {x:0, y:0}} className={classes.imageBorder}></motion.div>
            <div 
              onMouseEnter={()=> setBorderAnimation(true)}
              onMouseLeave={() => setBorderAnimation(false)}
              className={classes.image}>
              <img
                src={image}
                alt=""
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </motion.section>
  );
}

export default AboutSection;
