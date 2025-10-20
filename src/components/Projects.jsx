import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import bdev from "../assets/images/projects/bdev.png";
import reactlab from "../assets/images/projects/reactlab.png";
import todoapp from "../assets/images/projects/todoapp.png";
import weatherly from "../assets/images/projects/weatherly.png";

const projects = [
  {
    name: "Weatherly",
    description:
      "Weatherly fetches real-time weather data and displays temperature and weather details in a cool card design. Built using React, Next.js and Tailwind CSS.",
    imageSrc: `${weatherly}`,
    githubLink: "https://github.com/baraa-elhajj/Weatherly",
    demoLink: "https://weatherly-lb.vercel.app/",
  },
  {
    name: "Todo-App",
    description:
      "A Todo manager application built with React, Supabase, Chakra UI, and React Context API. This project demonstrates clean state management, database integration, and a modular architecture.",
    imageSrc: `${todoapp}`,
    githubLink: "https://github.com/baraa-elhajj/Todo-App",
    demoLink: "https://todoapp-lb.vercel.app/",
  },
  {
    name: "BDev",
    description:
      "Built modern and responsive personal website using React, Tailwind CSS, and Sera UI.",
    imageSrc: `${bdev}`,
    githubLink: "https://github.com/baraa-elhajj/BDev",
    demoLink: "",
  },
  {
    name: "React Lab",
    description:
      "A simple playground of mini React apps. It's a modular project designed to explore, test, and showcase a variety of React features, libraries, and patterns — all in one place.",
    imageSrc: `${reactlab}`,
    githubLink: "https://github.com/baraa-elhajj/React-Lab",
    demoLink: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center text-center lg:text-left lg:items-start px-6 lg:px-16 py-25"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-bold text-[#ffbd59] mb-5"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="space-y-4 text-white/85 text-md sm:text-lg leading-relaxed max-w-3xl mb-8"
      >
        <p>Check out some of my latest projects:</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-transparent border border-[#ffbd59] text-white/85 p-6 max-w-md 
            rounded-lg shadow-lg hover:scale-101 transition-transform duration-300"
          >
            <img
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-48 object-contain rounded-lg"
            />
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-md sm:text-2xl font-semibold">
                {project.name}
              </h3>
              <p className="mb-4 text-xs sm:text-base text-white/80">
                {project.description}
              </p>
              <div className="mt-4 flex justify-center sm:justify-start gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm px-1.5 py-1 sm:px-4 sm:py-2
                    flex items-center gap-2 text-[#36353d] bg-[#ffbd59]  
                    rounded-lg font-semibold hover:bg-[#ffbd59]/80 transition-colors"
                  >
                    Source Code
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 sm:w-4 sm:h-4 mb-0.5"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm
                    flex items-center gap-2 text-white bg-transparent border border-[#ffbd59] px-4 py-2 
                    rounded-lg font-semibold hover:bg-[#ffbd59] hover:text-[#36353d] transition-colors"
                  >
                    Demo
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mb-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
