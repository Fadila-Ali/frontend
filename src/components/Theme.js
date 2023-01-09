import React from "react";
import "./Theme.css";

const Theme = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "Light";
  const darkTheme = "Dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const toggleTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "Light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "Dark");
      theme = darkTheme;
    }
  };

  return (
    <button className={theme} id="mode" onClick={(e) => toggleTheme(e)}>
      Switch Theme
    </button>
  );
};

export default Theme;
