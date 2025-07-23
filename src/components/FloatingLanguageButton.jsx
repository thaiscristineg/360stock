import React, { useState } from "react";
import i18n from "i18next";
import { Globe } from "lucide-react";

const LANGUAGES = ["en", "es", "pt"];

const FloatingLanguageButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 min-[901px]:hidden flex flex-col items-center gap-2">
      {open &&
        LANGUAGES.map((lang, index) => {
          const isActive = i18n.language === lang;

          return (
            <button
              key={lang}
              onClick={() => {
                if (!isActive) {
                  i18n.changeLanguage(lang);
                  setOpen(false);
                }
              }}
              className={`
                animate-fade-in-up
                uppercase w-9 h-9 text-xs font-medium rounded-full flex items-center justify-center
                transition-all duration-200
                backdrop-blur-md border shadow-md
                ${
                  isActive
                    ? 'bg-white text-primary font-bold ring-2 ring-primary cursor-default'
                    : 'bg-white/50 text-gray-600 hover:bg-white hover:text-primary'
                }
              `}
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: "both",
              }}
            >
              {lang}
            </button>
          );
        })}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-12 h-12 rounded-full bg-white text-primary backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
      >
        <Globe className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FloatingLanguageButton;
