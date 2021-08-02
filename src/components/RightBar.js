import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) => ({
  Bar: {
    position: "fixed",
    bottom: 0,
    right: 40,
    left: "auto",
    zIndex: 10,
    color: "#a8b2d1",
    "& ul": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        padding: 0,
        listStyle: "none",
        
        "& li": {
            padding: 15,
            transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
            "&:hover":{
              transform: "translateY(-5px)",
              "& a": {
                color: "rgb(100, 255, 218)",
              }
            }
        },
        
        "& li:last-child": {
            paddingBottom: 30,
        },
        "&::after": {
            content: '""',
            display: "block",
            width: 1,
            height: 90,
            margin: "0px auto", 
            backgroundColor: "rgb(168, 178, 209)",       
        },
        "& li a svg": {
            height: 24,
            width: 24,
        },
        "& li a": {
            color: "#8892b0",
            textDecoration: "none",
            writingMode: "vertical-rl",
            fontSize: 15,
            letterSpacing: "0.1em",
        }
    },
  },
}));

function RightBar() {
  const classes = useStyle();
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1], delay:1.2 }}
      className={classes.Bar}>
      <ul>
        <li>
          <a rel="noreferrer" target="_blank" href="mailto:imed.ben.kaliaa@gmail.com">
            ahlem.jarrar@hotmail.com
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default RightBar;
