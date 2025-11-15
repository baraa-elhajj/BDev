import React, { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", text: "English", flag: "🇪🇳" },
    { code: "ar", text: "العربية", flag: "🇦🇷" },
  ];

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    setOpen(false);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    document.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [currentLang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="cursor-pointer px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium 
        rounded-lg border border-[#36353d] text-[#36353d] hover:text-white hover:bg-[#36353d] 
        focus:text-white focus:bg-[#36353d] transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <span className="flex gap-1 items-center">
          <Globe className="h-3 w-3 lg:h-4 lg:w-4" strokeWidth="1.75px" />{" "}
          {currentLang.toLocaleUpperCase()}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-3 mt-3 w-23 bg-[#36353d] border border-[#4a4951] rounded-xl 
        shadow-lg z-10 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`cursor-pointer block w-full text-center px-3 py-2 text-sm transition-colors ${
                  i18n.language === lang.code
                    ? "bg-[#4a4951] text-[#ffbd59]"
                    : "text-white hover:bg-[#4a4951]"
                }`}
              >
                <div className="flex gap-2 items-center justify-start">
                  <span>{lang.flag}</span>
                  <span>{lang.text}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
