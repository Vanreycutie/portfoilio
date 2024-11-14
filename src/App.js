import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Apps from "./components/Apps";
import About from "./components/About";
import Learning from "./components/Learning";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
  return (  
    <div >
      <Navbar/>
      <Hero/>
      <Apps/>
      <About/>
      <Learning/>
      <Work/>
      <Contact/>
     
    </div>
  );
}

export default App;
