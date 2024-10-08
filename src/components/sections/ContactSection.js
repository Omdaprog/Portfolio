import { makeStyles } from "@material-ui/core/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useStyle = makeStyles((theme) => ({
  section: {
    margin: "0px Auto 200px",
    maxWidth: 600,
    textAlign: "center",
    "& p": {
      margin: 10,
    },
  },
  overline: {
    color: "#64ffda",
    margin: "0 0 20px 4px",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "monospace",
    "&:before": {
      position: "relative",
      counterIncrement: "section 3",
      content: '"0" counter(section) "."',
      marginRight: 5,
      color: "rgb(100, 255, 218)",
    },
  },
  title: {
    margin: "10px 0px 40px",
    width: "100%",
    fontSize: "clamp(40px, 5vw, 60px)",
    whiteSpace: "nowrap",
    fontWeight: 600,
    color: "#ccd6f6",
    lineHeight: 1.1,
  },
  button: {
    color: "#64ffda",
    backgroundColor: "transparent",
    border: "1px solid #64ffda",
    borderRadius: 4,
    padding: "1.25rem 1.75rem",
    fontSize: 14,
    lineHeight: 1,
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    top: 50,
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    "&:hover": {
      backgroundColor: "rgba(100,255,218,0.1)",
    },
  },
}));

function ContactSection() {
  const classes = useStyle();

  // Make framer motion animation work when the dom element in-view
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

  return (
    <motion.section
      id="contact"
      variants={containerVarients}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
      className={classes.section}
    >
      <h2 ref={ref} className={classes.overline}>
        What’s Next?
      </h2>
      <h2 className={classes.title}>Get In Touch</h2>
      <p>
        Although I'm currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a target="_blank"  rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=imed.ben.kaliaa@gmail.com" className={classes.button}>Say Hello</a>
    </motion.section> 
  );
}

export default ContactSection;
