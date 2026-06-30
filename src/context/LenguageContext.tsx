"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "es" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("es");

  function toggleLanguage() {
    setLanguage((current) => (current === "es" ? "en" : "es"));
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage debe utilizarse dentro de LanguageProvider."
    );
  }

  return context;
}