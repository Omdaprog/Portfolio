import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyle = makeStyles((theme) => ({
    overline: {
        color: "#64ffda",
        margin: "0 0 20px 4px",
        fontSize: "clamp(12px, 5vw, 14px)",
        fontWeight: 400,
        fontFamily: "monospace",
    },
    container: {
        "& h3": {
            margin: "0px 0px 20px",
            color: "rgb(204, 214, 246)",
            fontSize: "clamp(24px, 5vw, 28px)",
            "& a":{
                color: "inherit",
                textDecoration: "none",
            }
        },
        "& ul":{
            listStyle: "none",
            display: "flex",
            padding: 0,
            marginBottom: 10,
            "& li": {
                margin: "2% 0%",
                marginRight: "4%",
                fontSize: 14
            }
        },
        "& a svg": {
            width: 22,
            height: 22,
            color: "#ccd6f6",
            marginRight: "3%",
            "&:hover": {
                color: "#64ffda"
            }
        }
    },
    discInfo: {
        backgroundColor: "#112240",
        boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
        position: "relative",
        zIndex: 2,
        padding: 25,
        color: "#a8b2d1",
        fontSize: 16,
        borderRadius: 4,
        "& p": {
            margin: 0,
            lineHeight: 1.5,
            letterSpacing: "0.01em",
            wordSpacing: "0.05em"
        }
    },
    projectBackground:{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        paddingTop:"70%",
        position: "relative",
        right: 50,
        width: "110%"
    }

}))


function ProjectItem({item}) {
    const classes = useStyle()
    const info = item[0] 
    return (
        <Grid container>
            <Grid item md={6}>
                <Grid 
                    container
                    direction="column"
                    className={classes.container}
                >
                    <p className={classes.overline} >Featured Project</p>
                    <h3>
                        <a href="">{info.title}</a>
                    </h3>
                    <div className={classes.discInfo}>
                        <p>{info.discription}</p>
                    </div>
                    <ul>
                        {info.techList.map((tech) => (
                            <li>{tech}</li>
                        ))}
                        
                    </ul>
                    <div>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                </Grid>
            </Grid>
            <Grid item md={6}>
                <div className={classes.projectBackground} style={{backgroundImage:`url('${info.image}')`}}></div>
            </Grid>
        </Grid>
    )
}

export default ProjectItem
