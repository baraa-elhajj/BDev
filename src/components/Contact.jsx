import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center px-6 lg:px-16 pt-25"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl lg:text-4xl font-bold text-(--font-color-header) mb-5"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-(--font-color-paragraph)/80 text-center mb-10 max-w-md text-md sm:text-lg"
      >
        Feel free to reach out to me through any of the following platforms.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="flex space-x-8"
      >
        <a
          href="mailto:baraa.w.hajj@gmail.com"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg bg-white
          transition duration-300 hover:scale-105"
        >
          <SiGmail className="size-5 sm:size-6 text-[#EA4335]" />
        </a>

        <a
          href="https://linkedin.com/in/baraa-elhajj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg bg-white
          transition duration-300 hover:scale-105"
        >
          <SiLinkedin className="size-5 sm:size-6 text-[#0077B5]" />
        </a>
        <a
          href="https://github.com/baraa-elhajj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg bg-white
          transition duration-300 hover:scale-105"
        >
          <SiGithub className="size-5 sm:size-6 text-gray-800" />
        </a>

        <a
          href="https://wa.me/96179319246"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg bg-white
          transition duration-300 hover:scale-105"
        >
          <SiWhatsapp className="size-5 sm:size-6 text-[#25D366]" />
        </a>
      </motion.div>
    </section>
  );
}
