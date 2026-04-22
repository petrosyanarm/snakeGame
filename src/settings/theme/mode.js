import { buttons } from "../../ui/buttons.js";

export function themeMode() {
  let currentTheme = localStorage.getItem("theme") || "light";
  let selectedTheme = currentTheme;
  applyTheme(currentTheme);
  buttons.themeToggle.addEventListener("click", () => {
    selectedTheme = selectedTheme === "dark" ? "light" : "dark";
  });

  return {
    getSelectedTheme: () => selectedTheme,
    setCurrentTheme: (theme) => (currentTheme = theme),
  };
}

export function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("light", theme === "light");
}
