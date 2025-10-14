import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-[#36353d]"></main>
        <footer className="bg-gray-800 p-5"></footer>
      </div>
    </>
  );
}

export default App;
