import { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import ArrowUp from "./components/ArrowUp";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      <div id="home" className="bg-[#36353d]">
        <Navbar />
        <ArrowUp />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <HireMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
