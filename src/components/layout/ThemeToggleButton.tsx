"use client";

import React from "react";

interface ThemeToggleButtonProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeToggleButton({
  theme,
  toggleTheme,
}: ThemeToggleButtonProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow-md z-50 hover:scale-105 transition-transform"
      aria-label={`${theme === "light" ? "다크" : "라이트"} 모드로 전환`}
      style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
