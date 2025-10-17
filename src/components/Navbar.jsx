import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="z-20 sticky top-0 w-full">
      <div
        className={`bg-[#ffbd59] border-[#ffbd59] w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 
          transition-all duration-300
        ${
          isScrolled
            ? "bg-[#ffbd59] border-[#ffbd59] md:bg-[#ffbd59]/85 md:border-[#ffbd59]/85 backdrop-blur-lg shadow-lg"
            : "backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          <a href="#home">
            <img
              className="cursor-pointer size-15 sm:size-20 ml-2"
              src="src\assets\images\logo.png"
            />
          </a>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm lg:text-base font-medium text-[#36353d]  
                  hover:text-gray-900 transition-colors relative group"
                >
                  {link.text}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#36353d]  
                  transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              ))}
            </nav>

            {}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <a
                href="/documents/BaraaElHajj-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 
                text-xs lg:text-sm font-medium text-[#36353d] border border-[#36353d] rounded-md 
                hover:bg-[#36353d] hover:text-white transition-colors duration-300"
              >
                <span>Resume</span>
                <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
              </a>
              <button
                className="cursor-pointer px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm 
              font-medium bg-[#36353d] text-white  
              rounded-md hover:bg-gray-800  transition-colors duration-300"
              >
                <a href="#hire-me">Hire Me</a>
              </button>
            </div>
          </div>

          {}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#36353d] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {}
        <div
          className={`bg-[#ffbd59] absolute left-0 w-full md:hidden transition-all duration-300 ease-in-out 
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col space-y-1 py-2 mx-3">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 text-sm sm:text-base font-medium text-[#36353d] 
                  rounded-md transition-colors"
              >
                {link.text}
              </a>
            ))}
            <div className="pt-2 mt-2 flex flex-col space-y-2">
              <a
                href="/documents/BaraaElHajj-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium 
                  border border-[#36353d] rounded-md transition-colors"
              >
                <span>Resume</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium bg-[#36353d] text-white 
                  rounded-md transition-colors"
              >
                <a href="#hire-me">Hire Me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
