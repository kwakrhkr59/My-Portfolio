"use client";

import { ReactNode } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggleButton from "@/components/layout/ThemeToggleButton";

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      <Footer />
    </div>
  );
}
