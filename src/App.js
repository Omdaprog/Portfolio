import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import "./style.css"


function App() {
  
  return (
    <>
      <div className="root">
        <Navbar />
          <main>
            <HeroSection />
          </main>
      </div>
    </>
  );
}

export default App;
