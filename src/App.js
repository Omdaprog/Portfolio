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
import { db } from './base'
import { useState,useEffect } from "react";

import 'firebase/storage'


function App() {
  const [projects, setprojects] = useState("hi")

  useEffect(() => {
    const fetchProject = async () => {
      const projectCollection = await db.collection("portfolio")
        .get();
      setprojects(
        projectCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    }
    fetchProject();
  }, [])
  
  return (
    <>
      <div className="root">
        {console.log(projects)}
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
