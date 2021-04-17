import HeroSection from "./components/sections/HeroSection"
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar";
import Hidden from '@material-ui/core/Hidden';
import "./style.css"
import AboutSection from "./components/sections/AboutSection";
import ProjectSection from "./components/sections/ProjectSection";


function App() {
  
  return (
    <>
      <div className="root">
        <Navbar />
        <Hidden xsDown>
          <LeftBar />
          <RightBar />
        </Hidden>
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
          </main>
      </div>
    </>
  );
}

export default App;
