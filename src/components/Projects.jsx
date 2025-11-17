import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import bdev from "../assets/images/projects/bdev.png";
import reactlab from "../assets/images/projects/reactlab.png";
import todoapp from "../assets/images/projects/todo-app.png";
import weatherly from "../assets/images/projects/weatherly.png";
import authin from "../assets/images/projects/auth-in-new.png";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    name: "Auth In",
    description:
      "A cool full-stack authentication system built with MERN stack, featuring user authentication, password reset, and custom emails.",
    imageSrc: `${authin}`,
    githubLink: "https://github.com/baraa-elhajj/auth-in",
    demoLink: "",
  },
  {
    name: "Weatherly",
    description:
      "Weatherly fetches real-time weather data and displays temperature and weather details in a cool card design. Built using React, Next.js and Tailwind CSS.",
    imageSrc: `${weatherly}`,
    githubLink: "https://github.com/baraa-elhajj/Weatherly",
    demoLink: "https://weatherly-lb.vercel.app/",
  },
  {
    name: "Todo App",
    description:
      "A task manager application built with React, Supabase, Chakra UI, and React Context API. This project demonstrates clean state management, database integration, and a modular architecture.",
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
        className="text-3xl sm:text-4xl font-bold text-(--font-color-header) mb-5"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="space-y-4 text-(--font-color-paragraph)/85 text-md sm:text-lg leading-relaxed 
        max-w-3xl mb-8"
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
            className="relative bg-transparent border border-(--font-color-header) text-(--font-color-paragraph)/85 
            p-6 max-w-md rounded-lg shadow-lg hover:scale-101 transition-transform duration-300"
          >
            <img
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-auto object-contain rounded-md"
            />
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-md sm:text-2xl font-semibold">
                {project.name}
              </h3>
              <p className="mb-4 text-xs sm:text-base text-(--font-color-paragraph)/80">
                {project.description}
              </p>
              <div className="mt-4 flex justify-center sm:justify-start gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm px-1.5 py-1 sm:px-4 sm:py-2
                    flex items-center gap-2 text-(--font-color-reverse-paragraph)/90 bg-(--font-color-header)  
                    rounded-lg font-semibold hover:bg-(--font-color-header)/80 transition-colors"
                  >
                    Source Code
                    <SiGithub className="size-3 sm:size-4 text-(--font-color-reverse-paragraph)" />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm
                    flex items-center gap-2 text-(--font-color-paragraph)/90 bg-transparent border border-(--font-color-header) 
                    px-4 py-2 rounded-lg font-semibold hover:bg-(--font-color-header) hover:text-(--font-color-reverse-paragraph)/90 
                    transition-colors"
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
