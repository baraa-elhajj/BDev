import { BriefcaseBusiness } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex md:flex-row items-center justify-between px-6 lg:px-16 py-16"
    >
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <div className="block md:hidden mb-4">
          <img
            src="src/assets/images/profile.png"
            alt="Profile"
            className="w-30 h-30 rounded-full object-cover mx-auto"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffbd59] leading-tight">
          Code with purpose. Build with passion.
        </h2>

        <p className="text-base sm:text-lg text-white/85 leading-relaxed">
          I build web apps with modern tools like{" "}
          <span className="text-[#ffbd59]/90">React</span>,{" "}
          <span className="text-[#ffbd59]/85">Next.js</span>, and{" "}
          <span className="text-[#ffbd59]/85">MERN</span> stack.<br></br>
          My passion for building and solving problems through code thrives me
          to push boundaries and turn ideas into reality.
        </p>

        <div className="flex items-center justify-center md:justify-start space-x-2 lg:space-x-3">
          <a
            href="#projects"
            className="lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold 
                  text-white/85 dark:text-white/80 border border-[#ffbd59] dark:border-gray-700 
                  rounded-md hover:bg-[#ffbd59] hover:text-[#36353d]/95 dark:hover:bg-gray-800 
                  transition-colors duration-300"
          >
            Some of my projects
          </a>
          <button
            className="flex items-center justify-center cursor-pointer px-4 lg:px-6 py-1.5 lg:py-2 
                  text-xs lg:text-sm font-semibold bg-[#ffbd59] text-[#36353d]/95 dark:bg-gray-50 
                  dark:text-gray-900 rounded-md hover:bg-[#ffbd59]/80 dark:hover:bg-gray-200 
                  transition-colors duration-300"
          >
            <a href="#hire-me">Hire Me</a>
            <BriefcaseBusiness className="h-3 w-3 ml-1.5 mb-0.5 lg:h-4 lg:w-4" />
          </button>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src="src/assets/images/profile.png"
          alt="Profile"
          className="w-100 h-100"
        />
      </div>
    </section>
  );
}
