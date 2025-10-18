import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center px-6 lg:px-16 py-25"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#ffbd59] mb-5">
        Get in Touch
      </h2>
      <p className="text-white/80 text-center mb-10 max-w-md">
        Feel free to reach out to me through any of the following platforms.
      </p>

      <div className="flex space-x-8">
        <a
          href="mailto:baraa.w.hajj@gmail.com"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg transition hover:scale-110 bg-[#f7f5f2]"
        >
          <SiGmail className="size-5 sm:size-6 text-[#EA4335]" />
        </a>

        <a
          href="https://linkedin.com/in/baraa-elhajj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg transition hover:scale-110 bg-[#f7f5f2]"
        >
          <SiLinkedin className="size-5 sm:size-6 text-[#0077B5]" />
        </a>
        <a
          href="https://github.com/baraa-elhajj"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg transition hover:scale-110 bg-[#f7f5f2]"
        >
          <SiGithub className="size-5 sm:size-6 text-gray-800" />
        </a>

        <a
          href="https://wa.me/96179319246"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full shadow-md hover:shadow-lg transition hover:scale-110 bg-[#f7f5f2]"
        >
          <SiWhatsapp className="size-5 sm:size-6 text-[#25D366]" />
        </a>
      </div>
    </section>
  );
}
