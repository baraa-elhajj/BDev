import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-[#36353d]">
          <Home />
        </main>
        <footer className="bg-gray-800 p-5"></footer>
      </div>
    </>
  );
}

export default App;
