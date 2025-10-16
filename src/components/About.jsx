import CoderProfileCard from "./ui/CoderProfileCard";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-start justify-start px-6 lg:px-16 py-25"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
        <div className="flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffbd59] mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-white/85 sm:text-lg leading-relaxed max-w-3xl">
            <p>
              I'm a <span className="text-[#ffbd59]">Full-Stack Engineer</span>{" "}
              with 4+ years of hands-on experience building and optimizing web
              applications.
            </p>

            <p>
              Having worked with several companies, I’ve gained a solid
              understanding of both frontend and backend development. <br></br>
              I’m always up for challenges that push my skills further.
            </p>

            <p>
              In my free time, you’ll find me learning new technologies or
              contributing to open-source projects to keep growing and sharing
              knowledge.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 my-2 sm:my-4">
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
        <div className="hidden lg:block order-1 lg:order-2">
          <CoderProfileCard />
        </div>
      </div>
    </section>
  );
}
