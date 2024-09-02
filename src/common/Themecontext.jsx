import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, settheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(
    function () {
      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  function toggleTheme() {
    console.log("state switched");
    settheme((state) => {
      state === "light" ? "dark" : "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("theme");
  return context;
}

export { ThemeProvider, useTheme };
