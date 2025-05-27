"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Optional: use lucide icons

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-12 h-6 rounded-[12px] p-1 transition-colors duration-300 cursor-pointer ${
        isDark ? "bg-[#facc15]" : "bg-[#FFE6B5]"
      }`}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span
        className={`absolute inset-y-0 left-0 flex items-center justify-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-6 bg-gray-700" : "translate-x-0 bg-[#FFAA04]"
        }`}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </span>
    </button>
  );
}
