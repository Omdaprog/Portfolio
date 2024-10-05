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
    // position: "relative",
    // maxWidth: 300,
    position: "relative",
    display: "inline-block",
  },
  imageBorder: {
    position: "absolute", /* Position the frame relative to the container */
    top: 20, /* Adjust to create the slight offset */
    left: 20,
    right: -20,
    bottom: -15, /* Adjust to create the slight offset */
    zIndex: 0, /* Behind the image */
    border: "2px solid rgb(100, 255, 218)", /* Optional: Add a border to enhance frame effect */
  },
  image: {
    "position": "relative",
    "display": "inline-block", 
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",

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
            Highly skilled Full-Stack Shopify-plus Developer with over 3 years of experience in crafting dynamic, user-centric web applications. Expertise spans developing custom Shopify apps to deploying scalable web solutions using cutting-edge technologies like Next.js, Remix.js, AWS and Google Cloud platforms. Thrive in high-pressure environments, and consistently deliver innovative solutions that meet and exceed project goals. Strong problem-solving abilities, combined with a passion for continuous learning help improve and expand my skillset.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="skills-list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Shopify-Plus</li>
              <li>AWS</li>
              <li>Next.js</li>
              <li>Remix.js</li>
              <li>Hydrogen</li>
              <li>Liquid</li>
              <li>Framer Motion</li>
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
