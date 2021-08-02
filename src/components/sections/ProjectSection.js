import { makeStyles } from "@material-ui/core/styles";
import ProjectItem from "../ProjectItem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { db } from '../../base'


const useStyle = makeStyles((theme) => ({
  section: {
    margin: "0px Auto",
    padding: "100px 0px",
    maxWidth: 1000,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "clamp(23px,5vw,32px)",
    },
    "&:before": {
      position: "relative",
      bottom: -2,
      counterIncrement: "section 3",
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
}));

function ProjectSection() {
  const classes = useStyle();


  // Firebase Database
  const [projects, setprojects] = useState()

  useEffect(() => {
    const fetchProject = db.collection("Ahlem_Portfolio")
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          doc.data().image != null &&
          documents.push({...doc.data(), id: doc.id})
        });
        setprojects(documents);
        
      })
    return () => fetchProject();
  }, [])

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
      id="project"
      variants={containerVarients}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75, ease: [0.645, 0.045, 0.355, 1] }}
      className={classes.section}
    >
      <h2 ref={ref} className={classes.title}>Some Things I’ve Built</h2>
      {projects ? (projects.map((project, index) => (
        <div style={{ margin: "5% 0 10% 0" }}>
          <ProjectItem
            key={index}
            even={index % 2 === 0 ? true : false}
            item={project}
          />
        </div>
        
      ))) : false}
      
    </motion.section>
  );
}

export default ProjectSection;
