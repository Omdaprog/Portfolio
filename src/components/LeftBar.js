import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) => ({
  Bar: {
    position: "fixed",
    bottom: 0,
    left: 40,
    right: "auto",
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
        }
    },
  },
}));

function LeftBar() {
  const classes = useStyle();
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1], delay:1.2 }}
      className={classes.Bar}>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/ahlem-jarrar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahlem-jarrar/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default LeftBar;
