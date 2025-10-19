import { SendHorizontalIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function HireMe() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="hire-me"
      className="flex flex-col items-center justify-center min-h-screen w-full text-white px-4 py-25"
    >
      <h2 className="text-4xl font-bold mb-6 text-[#ffbd59]">Hire Me</h2>
      <p className="text-gray-300 mb-10 max-w-md text-center">
        Interested in working together? Fill out the form below and I’ll get
        back to you as soon as possible.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col w-full max-w-2xl text-white/80 bg-[#2f2f37] p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <textarea
          name="message"
          placeholder="Describe your project . . ."
          required
          rows={6}
          className="mb-4 p-4 rounded-lg bg-[#36353d] border border-[#ffbd59] focus:outline-none 
          focus:ring-1 focus:ring-[#ffbd59] transition-all duration-300 text-xs lg:text-sm"
        />

        <button
          type="submit"
          className=" group flex items-center justify-center cursor-pointer px-4 lg:px-6 py-1.5 lg:py-3 
            text-xs lg:text-sm font-semibold bg-[#ffbd59] text-[#36353d]/95 rounded-md 
            hover:bg-[#ffbd59]/80 transition-colors duration-300"
        >
          Send Message
          <SendHorizontalIcon className="h-3 lg:h-4 w-3 lg:w-4 ml-1.5 duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </section>
  );
}
