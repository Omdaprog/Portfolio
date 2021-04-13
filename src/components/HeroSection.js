import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  section: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "100vh",
    
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
      },
      "& h1": {
          color: "#64ffda",
          margin: "0 0 30px 4px",
          fontSize: "clamp(14px, 5vw, 16px)",
          fontWeight: 400,
          fontFamily: "monospace",
      },
      
      "& h3": {
        marginTop: 10,
        color: "#8892b0",
        lineheight: 0.9,
      },
        "& p": {
            margin: "20px 0px 0px",
            maxWidth: 500,
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
  }
}));
function HeroSection() {
  const classes = useStyle();
  return (
    <section className={classes.section}>
      <div className={classes.content} >
        <h1>Hi, my name is</h1>
      </div>
      <div className={classes.content}>
        <h2 className={classes.bigheading}>Imed Ben Kalia.</h2>
      </div>
      <div className={classes.content}>
        <h3 className={classes.bigheading}>I build things for the web.</h3>
      </div>
      <div className={classes.content}>
        <p>
          I'm a Boston-based software engineer who specializes in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I'm an engineer at <a href="https://upstatement.com/">Upstatement</a>{" "}
          focused on building accessible, human-centered products.
        </p>
      </div>
      <div className={classes.content}>
        <a href="mailto:brittany.chiang@gmail.com" className={classes.emailLink}>
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
