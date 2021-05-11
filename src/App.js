import HeroSection from "./components/sections/HeroSection"
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar";
import Hidden from '@material-ui/core/Hidden';
import "./style.css"
import AboutSection from "./components/sections/AboutSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";


import 'firebase/storage'


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
            <ProjectSection />
            <ContactSection />
          </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
