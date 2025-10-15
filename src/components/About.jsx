const coderData = {
  name: "Baraa El Hajj",
  role: "Full-stack Engineer",
  seniority: "Mid-Level",
  location: "Lebanon",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ],
};

const CoderProfileCard = () => {
  return (
    <div className="z-0 w-full mx-auto bg-[#36353d] border-[#36353d] relative rounded-lg border shadow-lg">
      {}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent  to-[#ffbd59]"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#ffbd59] to-transparent"></div>
      </div>

      {}
      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-[#36353d]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-gray-300 font-mono">baraa.js</div>
      </div>

      {}
      <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
        {}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          {}
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs">
            {Array.from(
              {
                length: 12,
              },
              (_, i) => (
                <div key={i} className="leading-relaxed select-none opacity-70">
                  {i + 1}
                </div>
              )
            )}
          </div>

          {}
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-blue-500">const</span>
              <span className="mr-2 text-blue-400 dark:text-violet-400">
                engineer
              </span>
              <span className="mr-2 text-white">=</span>
              <span className="text-blue-500">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-blue-300">name:</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-[#ffbd59]">{coderData.name}</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-6">
              <span className="text-blue-300">role:</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-[#ffbd59]">{coderData.role}</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-6">
              <span className="text-blue-300">seniority:</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-[#ffbd59]">{coderData.seniority}</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-6">
              <span className="text-blue-300">location:</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-[#ffbd59]">{coderData.location}</span>
              <span className="text-[#ffbd59]">&#39;</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-6">
              <span className="text-blue-300">skills:</span>
              <span className="text-blue-500">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-[#ffbd59]">&#39;</span>
                    <span className="text-[#ffbd59]">{skill}</span>
                    <span className="text-[#ffbd59]">&#39;</span>
                    {index < coderData.skills.length - 1 && (
                      <span className="text-white">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-blue-500">{"]"}</span>
              <span className="text-white">,</span>
            </div>

            <div>
              <span className="text-blue-500">{"}"}</span>
              <span className="text-white">;</span>
            </div>
          </code>
        </div>
      </div>

      {}
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 pt-3 text-xs text-gray-300 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-start justify-start px-6 lg:px-20 py-21"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
        <div className="flex flex-col gap-4 items-start text-left order-2 lg:order-1 animate-fade-in-up">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffbd59] mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-white sm:text-lg leading-relaxed max-w-3xl">
              <p>
                I'm a{" "}
                <span className="text-[#ffbd59]">Full-Stack Engineer</span> with
                4+ years of hands-on experience building and optimizing web
                applications.
              </p>

              <p>
                Having worked with several companies, I’ve gained a solid
                understanding of both frontend and backend development.{" "}
                <br></br>I’m always up for challenges that push my skills
                further.
              </p>

              <p>
                In my free time, you’ll find me learning new technologies or
                contributing to open-source projects to keep growing and sharing
                knowledge.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 border border-[#ffbd59] rounded-lg 
            text-white text-sm sm:text-base hover:bg-[#ffbd59] hover:text-[#36353d] 
            transition-all duration-300 cursor-default"
            >
              MERN Stack
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 border border-[#ffbd59] rounded-lg 
            text-white text-sm sm:text-base hover:bg-[#ffbd59] hover:text-[#36353d] 
            transition-all duration-300 cursor-default"
            >
              Clean Coder
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 border border-[#ffbd59] rounded-lg 
            text-white text-sm sm:text-base hover:bg-[#ffbd59] hover:text-[#36353d] 
            transition-all duration-300 cursor-default"
            >
              Problem Solver
            </span>
          </div>

          <p className="italic text-white text-xs sm:text-sm lg:text-sm max-w-lg leading-relaxed">
            “✨ JavaScript lover ⚡ Code. Build. Learn. Repeat 💻 Lifelong
            learner”
          </p>
        </div>

        {}
        <div className="hidden lg:block order-1 lg:order-2 animate-fade-in-up">
          <CoderProfileCard />
        </div>
      </div>
    </section>
  );
}
