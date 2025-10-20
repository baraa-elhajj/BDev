import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-16 py-16">
      <div className="space-y-6 text-center md:text-left md:w-1/2">
        {/* Mobile */}
        <div className="block md:hidden mb-4">
          <img
            src="src/assets/images/profile.png"
            alt="Profile"
            className="w-40 h-50 rounded-full object-cover mx-auto "
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffbd59] leading-tight"
        >
          Code with purpose. Build with passion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-base sm:text-lg text-white/85 leading-relaxed"
        >
          I build web apps with modern tools like{" "}
          <span className="text-[#ffbd59]/90">React</span>,{" "}
          <span className="text-[#ffbd59]/85">Next.js</span>, and{" "}
          <span className="text-[#ffbd59]/85">MERN</span> stack.<br></br>
          My passion for building and solving problems through code thrives me
          to push boundaries and turn ideas into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex space-x-3 items-center justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold text-white/85 
            border border-[#ffbd59] rounded-md hover:bg-[#ffbd59] hover:text-[#36353d]/95 
            transition-colors duration-300"
          >
            Some of my projects
          </a>
          <button
            className="flex items-center justify-center cursor-pointer px-4 lg:px-6 py-1.5 lg:py-2 
            text-xs lg:text-sm font-semibold bg-[#ffbd59] text-[#36353d]/95 rounded-md 
            hover:bg-[#ffbd59]/80 transition-colors duration-300"
          >
            <a href="#hire-me">Hire Me</a>
            <BriefcaseBusiness className="h-3 lg:h-4 w-3 lg:w-4 ml-1.5 mb-0.5" />
          </button>
        </motion.div>
      </div>

      {/* Desktop  */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex w-1/2 justify-center"
      >
        <img
          src="src/assets/images/profile.png"
          alt="Profile"
          className="w-100 h-100"
        />
      </motion.div>
    </section>
  );
}
