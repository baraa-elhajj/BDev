import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-20 cursor-pointer fixed hidden lg:flex bottom-6 right-3.5 p-3 rounded-full shadow-lg
        bg-(--font-color-header) text-(--font-color-reverse-paragraph) hover:bg-(--font-color-header)/80 
        transition-all duration-300 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} 
        focus:outline-none`}
    >
      <FaArrowUpLong className="size-5" />
    </button>
  );
}
