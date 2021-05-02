import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";



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
    "& a": {
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
    "& a::after": {
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
    "& ul": {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
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
    [theme.breakpoints.down("xs")]: {
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
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML &amp; CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at{" "}
              <a
                href="https://us.mullenlowe.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                an advertising agency
              </a>
              ,{" "}
              <a
                href="https://starry.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a start-up
              </a>
              ,{" "}
              <a
                href="https://www.apple.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a huge corporation
              </a>
              , and{" "}
              <a
                href="https://scout.camd.northeastern.edu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <a
                href="https://upstatement.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Upstatement
              </a>{" "}
              for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul class="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Eleventy</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>WordPress</li>
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
                src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/e9589/me.webp"
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
