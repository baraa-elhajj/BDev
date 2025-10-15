import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-[#36353d]">
        <Home />
        <About />
      </main>
      <footer className="bg-gray-800 p-5"></footer>
    </>
  );
}

export default App;
