import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) => ({
  section: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "100%",
    paddingTop: 165,
    margin: "0px auto",
    padding: "100px 0px",
    maxWidth: "1000px",
  },
  content: {
      "& h1, h2, h3": {
        margin: "0px 0px 10px",
        fontWeight: 600,
        color: "#ccd6f6",
        lineHeight: 1.1,
        [theme.breakpoints.down("xs")]: {
          marginBottom: 0, 
        },
      },
      "& h1": {
          color: "#64ffda",
          margin: "0 0 20px 4px",
          fontSize: "clamp(14px, 5vw, 16px)",
          fontWeight: 400,
          fontFamily: "monospace",
          [theme.breakpoints.down("xs")]: {
            paddingBottom: 15, 
          },
      },
      
      "& h3": {
        marginTop: 10,
        color: "#8892b0",
        lineheight: 0.9,
      },
        "& p": {
            margin: "20px 0px 0px",
            maxWidth: 500,
            lineHeight: "1.8",
            wordSpacing: "3px",
            fontSize: "clamp(14px, 5vw, 16px)",
            [theme.breakpoints.down("xs")]: {
              lineHeight: "1.5",
              wordSpacing: 0.5,
              marginTop: 13,
            },
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
            }
        }
  },
  bigheading : {
    margin: 0,
    fontSize: "clamp(40px, 8vw, 80px)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "clamp(36px, 8vw, 80px)",
    }
  },
  emailLink: {
    color: "#64ffda",
    backgroundColor: "transparent",
    border: "1px solid #64ffda",
    borderRadius: 4,
    padding: "1.25rem 1.75rem",
    fontSize: 14,
    fontFamily: "monospace",
    lineHeight: 1,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    marginTop: 50,
    "&:hover":{
      backgroundColor: "rgba(100,255,218,0.1)",
    }
  },
  button: {
    marginTop: 50,
  }
}));
function HeroSection() {
  const classes = useStyle();

  const container = {
    hidden: { opacity: 0 , y:30},
    show: {
      opacity: 1,
      y:0,
      transition: {
        when: "beforeChildren",
        duration: 0.2,
        ease: [0.645, 0.045, 0.355, 1],
        staggerChildren: 0.2,
        delayChildren: 0.2,
        delay: 1.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y:30 },
    show: { opacity : 1, y:0 }
  }


  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className={classes.section}>
      <motion.div variants={item} className={classes.content} >
        <h1>Hi, my name is</h1>
      </motion.div>
      <motion.div variants={item} className={classes.content}>
        <h2 className={classes.bigheading}>Imededdine Ben Kalia.</h2>
      </motion.div>
      <motion.div variants={item} className={classes.content}>
        <h3 className={classes.bigheading}>I build things for Web.</h3>
      </motion.div>
      <motion.div variants={item} className={classes.content}>
        <p>
        Shopify Full Stack Engineer with around 4 years of experience, passionate about building efficient, maintainable, and scalable solutions. Developed and contributed to the creation of multiple custom Shopify apps and headless eCommerce solutions 
        </p>
      </motion.div>
      <motion.div variants={item} className={classes.button}>
        <a target="_blank"  rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=imed.ben.kaliaa@gmail.com" className={classes.emailLink}>
          Get In Touch
        </a>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
