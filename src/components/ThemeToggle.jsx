import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // fast theme check
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

  const handleThemeChange = (e) => {
    const checked = e.target.checked;
    const newTheme = checked ? "dark" : "light";
    setIsDark(checked);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller hidden"
        checked={isDark}
        onChange={handleThemeChange}
      />

      {/* sun icon */}
      <svg
        className="swap-off h-10 w-6 md:w-9 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17l-.71.71a1 1 0 101.41 1.41l.71-.71A1 1 0 105.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm7-7a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zm6.36 2.64a1 1 0 000-1.41l-.71-.71a1 1 0 10-1.41 1.41l.71.71a1 1 0 001.41 0zM21 11h-1a1 1 0 100 2h1a1 1 0 000-2zm-9 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm4.95-2.05a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41zM12 6.5A5.5 5.5 0 1017.5 12 5.51 5.51 0 0012 6.5zm0 9A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on h-10 w-6 md:w-9 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13a1 1 0 00-1.05-.14 8 8 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;