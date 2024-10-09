import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { db } from '../../base'

const useStyle = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px auto",
    padding: "100px 0px",
    maxWidth: "1000px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: "10px 0px 40px",
    width: "100%",
    fontSize: "clamp(26px,5vw,32px)",
    whiteSpace: "nowrap",
    fontWeight: 600,
    color: "#ccd6f6",
    lineHeight: 1.1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "clamp(23px,5vw,32px)",
    },
  },

  container: {
    boxShadow: "0 10px 20px -15px rgba(2,12,27,0.7)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    height: "100%",
    padding: "2rem 1.75rem",
    borderRadius: 4,
    backgroundColor: "#112240",
  },

  link: {
    "& svg": {
      color: "#828ead",
      marginRight: 14,
      "&:hover": {
        color: "#64ffda"
      }
    },
  },
  projectName: {
    margin: "15px 0px 10px",
    color: "#ccd6f6",
    fontSize: 18,
    "& a": {
      display: "inline-block",
      textDecoration: "none",
      textDecorationSkipInk: "auto",
      color: "inherit",
      fontWeight: 600,
      "&:hover": {
        color : "#64ffda"
      }
    },
  },
  projectDescription: {
    color: "#a8b2d1",
    fontSize: 14,
    letterSpacing: "0.03rem",
    lineHeight: "1.25rem",
  },
  projectTech: {
    "& ul": {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",
      padding: 0,
      marginBottom: 10,
      "& li": {
        margin: "2% 0%",
        marginRight: "3%",
        fontSize: 14,
      },
  }},
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





function OtherProject() {
  // Firebase Database
  const [projects, setprojects] = useState()

  useEffect(() => {
    const fetchProject = db.collection("Ahlem_Portfolio")
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          !("image" in doc.data()) &&
          documents.push({...doc.data(), id: doc.id})
        });
        setprojects(documents);
      })
    return () => fetchProject();
  }, [])

  // update number of item
  const [numberOfItems, setnumberOfItems] = useState(3)
  const showMoreItems= () => {
    (numberOfItems === 3) ? setnumberOfItems(8) : setnumberOfItems(3)
  }

  // Material ui Makestyle
  const classes = useStyle();

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
  
  return (
    <section className={classes.section}>
      <h2  className={classes.title}>Other Noteworthy Projects</h2>
      <Grid   container spacing={3}>
      
        {projects ? projects.slice(0,numberOfItems).map((project,value) => (
         //"image" in project && 
         // eslint-disable-next-line 
          <Grid 
          
          component={motion.div}
          variants={containerVarients}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1] }}
          key={value} item lg={4}>
            <div style={{"&:hover":{marginBottom: 5,}}} className={classes.container}>
              <header style={{ width: "100%" }}>
                <Grid
                  
                  container
                  direction="row"
                  alignItems="center"
                  style={{justifyContent: "space-between"}}
                >
                  <Grid item style={{ color: "#64ffda" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      width="40px"
                      height="40px"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </Grid>
                  <Grid className={classes.link}>
                    {"link" in project &&
                      <a
                        href={project.link}
                        aria-label="External Link"
                        target="_blank"
                        rel="noreferrer" 
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          width="20px"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    }
                    
                    {"github" in project &&
                      <a
                        href={project.github}
                        rel="noreferrer" 
                        aria-label="GitHub Link"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          width="20px"
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    }
                    
                  </Grid>
                </Grid>
                
                <h3  className={classes.projectName}><a href={project.link} target="_blank" rel="noreferrer" >{project.title}</a></h3>
                <div className={classes.projectDescription}><p>{project.description}</p></div>
              </header>
              <footer className={classes.projectTech}>
                <ul>
                  {project.tech.map((value) => (
                    <li ref={ref} >{value}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </Grid>
        )):false}
      </Grid>
      <button 
      
      className={classes.button}
      onClick={showMoreItems}
      >{numberOfItems === 3 ? "Show More" : "Show Less"}</button>
    </section>
  );
}

export default OtherProject;
