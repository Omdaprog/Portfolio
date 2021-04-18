import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  section: {
    margin: "0px Auto",
    padding: "100px 0px",
    maxWidth: 600,
    textAlign: "center",
    "& p": {
        margin: 10,
    }
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
    border: "1px solid #64ffda" ,
    borderRadius: 4,
    padding: "1.25rem 1.75rem",
    fontSize: 14,
    lineHeight: 1,
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    top: 50,
  }
}));

function ContactSection() {
  const classes = useStyle();
  return (

    <section className={classes.section}>
        <h2 className={classes.overline}>What’s Next?</h2>
        <h2 className={classes.title}>Get In Touch</h2>
        <p>Although I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a className={classes.button}>Say Hello</a>
    </section>
    
    )
}

export default ContactSection;
