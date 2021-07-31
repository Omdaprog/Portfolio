import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "auto",
    minHeight: 70,
    padding: 15,
    textAlign: "center",
    "& div": {
      color: "#a8b2d1",
      fontSize: 14,
      wordSpacing: "0.2em",
      transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
      display: "flex",

      "&:hover": {
        color: "#64ffda",
      },
      "& a svg": {
        height: 24,
        width: 24,
        color: "#a8b2d1",
        margin: "0.8em",
        marginTop: 17,
        "&:hover": {
          color: "#64ffda",
        },
      },
    },
  },
}));

function Footer() {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <div> Designed & Built by Imed Ben Kalia</div>
      <div>
        <a target="_blank"  rel="noreferrer" href="https://github.com/Omdaprog">
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
        <a target="_blank"  rel="noreferrer" href="https://linkedin.com/in/imed-ben-kalia">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
