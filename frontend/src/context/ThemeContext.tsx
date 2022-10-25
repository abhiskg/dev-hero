import React, { createContext, useState, useEffect } from "react";

interface ThemeContextProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("dev-hero-theme");
    if (data) {
      const result = JSON.parse(data) as boolean;
      setIsDark(result);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
