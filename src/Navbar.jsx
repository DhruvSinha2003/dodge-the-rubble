import React, { useEffect, useState } from "react";
import "./App.css";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  }
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={
            theme === "light"
              ? "/logo_dark_transparent.png"
              : "/logo_light_transparent.png"
          }
          alt="Logo"
        />
      </div>
      <div className="hamburger"></div>
      <div className="theme">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Navbar;
