import { makeStyles } from "@material-ui/core/styles";
import ProjectItem from "../ProjectItem";
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
        "&:before": {
          position: "relative",
          bottom: -2,
          counterIncrement: "section 2",
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

}))

function ProjectSection() {
    const classes = useStyle()
    const projects = [
        {
            image : "https://brittanychiang.com/static/76c828e964233651d4fb75f911746c90/47203/octoprofile.webp",
            title: "OctoProfile",
            discription: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            techList: ["Next.js","Chart.js","GitHub API","OctoProfile"],
            github: "",
            link: "",
        }
    ]
    return (
        <section className={classes.section} >
            <h2 className={classes.title}>Some Things I’ve Built</h2>
            
            {projects.map((project, index) => (
                <ProjectItem key={index} item={project}/>
            ))}
            
        </section>
    )
}

export default ProjectSection
