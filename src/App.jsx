import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      <div id="home" className="bg-[#36353d]">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <footer className="bg-gray-800 p-5"></footer>
      </div>
    </>
  );
}

export default App;
