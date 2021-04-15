import HeroSection from "./components/HeroSection"
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar"
import RightBar from "./components/RightBar";
import Hidden from '@material-ui/core/Hidden';
import "./style.css"


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
          </main>
      </div>
    </>
  );
}

export default App;
