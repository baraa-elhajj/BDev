import React, { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef(null);

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
        className="cursor-pointer px-1 py-1.5 rounded-lg border border-[#36353d] text-[#36353d] hover:text-white hover:bg-[#36353d] transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <span className="flex gap-1 items-center">
          <Globe className="w-4.5 h-4.5" strokeWidth="1.75px" />{" "}
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
            className="absolute -right-2 mt-3 w-30 bg-[#36353d] border border-[#4a4951] rounded-xl 
        shadow-lg z-10 overflow-hidden"
          >
            <button
              onClick={() => changeLanguage("en")}
              className={`cursor-pointer block w-full text-left px-4 py-2 text-sm transition-colors ${
                i18n.language === "en"
                  ? "bg-[#4a4951] text-[#ffbd59]"
                  : "text-white hover:bg-[#4a4951]"
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className={`cursor-pointer block w-full text-left px-4 py-2 text-sm transition-colors ${
                i18n.language === "ar"
                  ? "bg-[#4a4951] text-[#ffbd59]"
                  : "text-white hover:bg-[#4a4951]"
              }`}
            >
              🇸🇦 العربية
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
