"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "codex-quick-ref-theme";

function detectInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(() => detectInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="theme-switch" role="group" aria-label="Theme toggle">
      <span>Dark mode</span>
      <label className="theme-switch__control">
        <input
          type="checkbox"
          aria-label="Enable dark mode"
          checked={theme === "dark"}
          onChange={(event) => setTheme(event.target.checked ? "dark" : "light")}
        />
        <span className="theme-switch__slider" />
      </label>
    </div>
  );
}
