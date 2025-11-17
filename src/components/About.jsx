import { motion } from "framer-motion";
import CoderProfileCard from "./ui/CoderProfileCard";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-start justify-start px-6 lg:px-16 pt-25"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
        <div className="flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-(--font-color-header) mb-3"
          >
            About Me
          </motion.h2>

          <div className="space-y-4 text-(--font-color-paragraph)/85 sm:text-lg leading-relaxed max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              I'm a{" "}
              <span className="text-(--font-color-header)">
                Full-Stack Engineer
              </span>{" "}
              with 4+ years of hands-on experience building and optimizing web
              applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Having worked with several companies, I’ve gained a solid
              understanding of both frontend and backend development. <br></br>
              I’m always up for challenges that push my skills further.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              In my free time, you’ll find me learning new technologies or
              contributing to open-source projects to keep growing and sharing
              knowledge.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 my-2 sm:my-4"
          >
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 border border-(--font-color-header) rounded-lg 
            text-(--font-color-paragraph) text-sm sm:text-base hover:bg-(--font-color-header) hover:text-(--font-color-reverse-paragraph) 
            transition-all duration-300 cursor-default"
            >
              MERN Stack
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 border border-(--font-color-header) rounded-lg 
            text-(--font-color-paragraph) text-sm sm:text-base hover:bg-(--font-color-header) hover:text-(--font-color-reverse-paragraph) 
            transition-all duration-300 cursor-default"
            >
              Clean Coder
            </span>
            <span
              className="px-3 sm:px-4 py-1 sm:py-2 border border-(--font-color-header) rounded-lg 
            text-(--font-color-paragraph) text-sm sm:text-base hover:bg-(--font-color-header) hover:text-(--font-color-reverse-paragraph) 
            transition-all duration-300 cursor-default"
            >
              Problem Solver
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="italic text-(--font-color-paragraph) text-xs sm:text-sm lg:text-sm max-w-lg leading-relaxed"
          >
            “✨ JavaScript lover ⚡ Code. Build. Learn. Repeat 💻 Lifelong
            learner”
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block order-1 lg:order-2"
        >
          <CoderProfileCard />
        </motion.div>
      </div>
    </section>
  );
}
