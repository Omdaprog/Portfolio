import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import WorkPlacement from "./components/sections/WorkPlacement";

import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar";
import Hidden from '@material-ui/core/Hidden';
import Footer from "./components/sections/Footer";
import "./style.css"


import 'firebase/storage'
import OtherProject from "./components/sections/OtherProject";


function App() {
  
  
  return (
    <>
      <div className="root">
        <Navbar />
        <Hidden smDown>
          <LeftBar />
          <RightBar />
        </Hidden>
          <main>
            <HeroSection />
            <AboutSection />
            <WorkPlacement />
            <ProjectSection />
            <OtherProject />
            <ContactSection />
          </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
