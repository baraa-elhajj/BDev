import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SendHorizontalIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function HireMe() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Email sent! Thank you for reaching out.");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
          console.error("Failed to send email: ", error);
        }
      );

    setIsLoading(false);
  };

  return (
    <section
      id="hire-me"
      className="flex flex-col items-center justify-center min-h-screen w-full text-white px-4 py-25"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-6 text-[#ffbd59]"
      >
        Hire Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-gray-300 mb-5 max-w-md text-center"
      >
        Interested in working together? Fill out the form below and I’ll get
        back to you as soon as possible.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl text-white/80 bg-[#2f2f37] p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          autoComplete="off"
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          autoComplete="off"
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          autoComplete="off"
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <textarea
          name="message"
          placeholder="Describe your project..."
          required
          rows={6}
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`group flex items-center justify-center px-4 lg:px-6 py-1.5 lg:py-3 
            text-xs lg:text-sm font-semibold rounded-md
            transition-colors duration-300
            ${
              isLoading
                ? "bg-[#ffbd59]/60 text-[#36353d]/50 cursor-not-allowed"
                : "bg-[#ffbd59] text-[#36353d]/95 hover:bg-[#ffbd59]/80 cursor-pointer"
            }`}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#36353d] animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 1 1-10 10h4a6 6 0 1 0 6-6V2z" />
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Send Message
              <SendHorizontalIcon className="h-3 lg:h-4 w-3 lg:w-4 ml-1.5 duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </motion.form>
    </section>
  );
}
