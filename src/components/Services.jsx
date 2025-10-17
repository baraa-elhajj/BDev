import React from "react";
import { Database, Server, Code, Component, LayoutGrid } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "I can create responsive and modern web interfaces using React, Next.js, TailwindCSS, and more.",
    badges: ["React", "Next.js", "TailwindCSS", "ChakraUI", "SeraUI"],
    icon: <LayoutGrid size={25} />,
  },
  {
    title: "Full-Stack Development",
    description:
      "I design and build web applications using MERN stack with proper architecture and state management.",
    badges: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCSS"],
    icon: <Code size={25} />,
  },
  {
    title: "Deployment & Hosting",
    description:
      "I usually use Heroku or Vercel for deployment and hosting. I may use Google for hosting depending on the needs and required services.",
    badges: ["Vercel", "Heroku"],
    icon: <Server size={25} />,
  },
  {
    title: "Database & Backend Management",
    description:
      "I manage and use both relational and NoSQL databases. I do REST API integration using Node.js or Supabase for serverless solutions.",
    badges: ["Supabase", "PostgreSQL", "Node.js", "REST API"],
    icon: <Database size={25} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center text-center lg:text-left lg:items-start px-6 lg:px-16 py-25"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffbd59] mb-10">
        My Services
      </h2>

      <div className="space-y-4 text-white/85 text-md sm:text-lg leading-relaxed max-w-3xl mb-8">
        <p>
          I provide a range of development services leveraging modern
          technologies and frameworks.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-transparent border border-[#ffbd59] text-white/85 p-6 max-w-md rounded-lg shadow-lg 
            hover:scale-101 transition-transform duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{service.icon}</div>
              <h3 className="text-md sm:text-2xl font-semibold">
                {service.title}
              </h3>
            </div>
            <p className="mb-4 text-xs sm:text-base text-white/80">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-transparent border border-[#ffbd59] text-[#ffbd59] 
                  px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs sm:text-sm
                  rounded-lg font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
