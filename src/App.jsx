import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-[#36353d]">
          <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 lg:px-16 py-16"
          >
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffbd59] leading-tight">
                Hello, I'm Baraa!
              </h2>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                I'm a Full-stack Engineer with 4+ years of experience building
                and optimizing web applications. I love working with modern
                tools like <span className="text-[#ffbd59]/85">React</span>,{" "}
                <span className="text-[#ffbd59]/85">Next.js</span>, and{" "}
                <span className="text-[#ffbd59]/85">MERN</span> stack, and I
                have hands-on experience creating and deploying REST APIs,
                integrating databases, and delivering scalable solutions.
                Passionate about continuous learning and currently expanding my
                expertise through personal projects and certifications.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="src/assets/images/profile.png"
                alt="Profile"
                className="w-100 h-100 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 p-5"></footer>
      </div>
    </>
  );
}

export default App;
