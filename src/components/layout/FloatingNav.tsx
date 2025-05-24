import React, { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  BookOpen,
  Award,
  Search,
  GraduationCap,
  Wrench,
} from "lucide-react";

interface FloatingNavProps {
  show: boolean;
}

const navItems = [
  { href: "#about", icon: User, label: "About Me" },
  { href: "#projects", icon: Briefcase, label: "Projects" },
  { href: "#publication", icon: BookOpen, label: "Publication" },
  { href: "#awards", icon: Award, label: "Awards" },
  { href: "#experience", icon: Search, label: "Experience" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#skills", icon: Wrench, label: "Skills" },
];

const FloatingNav: React.FC<FloatingNavProps> = ({ show }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.href, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.href, offset: Math.abs(rect.top) };
      });
      offsets.sort((a, b) => a.offset - b.offset);
      setActiveSection(offsets[0].id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute right-0 top-0 w-12 h-full bg-transparent" />

      <nav
        className={`rounded-l-2xl border transition-all duration-300 ease-in-out shadow-lg
        ${
          isHovered
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-80"
        }
        ${
          isHovered
            ? "bg-white/90 dark:bg-zinc-900/90"
            : "bg-white/30 dark:bg-zinc-800/30"
        }
        backdrop-blur-lg border-zinc-300 dark:border-zinc-700`}
      >
        <ul className="flex flex-col py-4 relative">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.href;

            return (
              <li key={index} className="relative">
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-gray-800 dark:text-gray-200
                    hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-zinc-700/50
                    transition-all duration-200 ${
                      isHovered ? "justify-start space-x-3" : "justify-center"
                    }`}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span
                    className={`whitespace-nowrap transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-x-0 w-auto"
                        : "opacity-0 -translate-x-4 w-0 overflow-hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>

                <span
                  className={`absolute left-0 top-0 h-full w-1 rounded-full transition-all duration-300
                    ${isActive ? "bg-blue-500" : "bg-transparent"}`}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      {!isHovered && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-zinc-400/40 rounded-full" />
      )}
    </div>
  );
};

export default FloatingNav;
