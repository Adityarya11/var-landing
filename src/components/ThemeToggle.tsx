"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const [isDark, setIsDark] = useState(true); // Default to dark per design system

    useEffect(() => {
        setIsMounted(true);
        // Check if user previously set a preference
        const storedTheme = localStorage.getItem("var-theme");
        if (storedTheme === "light") {
            setIsDark(false);
            document.documentElement.classList.add("light-mode");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.add("light-mode");
            localStorage.setItem("var-theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.remove("light-mode");
            localStorage.setItem("var-theme", "dark");
            setIsDark(true);
        }
    };

    // Prevent hydration mismatch by not rendering the icon until mounted
    if (!isMounted) return <div className="w-10 h-10 fixed top-6 right-6 z-50"></div>;

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Color Mode"
            className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-[#232325] border border-[#2e2e30] text-[#a09890] hover:text-[#c97d3a] hover:border-[#c97d3a]/50 transition-all shadow-lg"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}