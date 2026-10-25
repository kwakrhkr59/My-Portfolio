"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlagKR, FlagUS } from "./FlagIcon";
import { useLang } from "@/lib/i18n/LanguageProvider";

const navLinks: {
  key: "home" | "projects" | "publication" | "experience" | "blog" | "contact";
  path: string;
  external?: boolean;
}[] = [
  { key: "home", path: "/" },
  { key: "projects", path: "/projects" },
  { key: "publication", path: "/publication" },
  { key: "experience", path: "/experience" },
  {
    key: "blog",
    path: "https://blog-501b-21207b.tistory.com/",
    external: true,
  },
  { key: "contact", path: "/contact" },
];

const languages = [
  { code: "ko", Flag: FlagKR, label: "한국어" },
  { code: "en", Flag: FlagUS, label: "English" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const rotatingTexts = t.nav.rotating;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleExternalLinkClick = (e: React.MouseEvent, path: string) => {
    if (!window.confirm(t.nav.externalConfirm)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <Link
              href="/"
              className="flex-shrink-0 text-sm sm:text-base xl:text-lg font-bold whitespace-nowrap text-gray-900 dark:text-white w-52 sm:w-60 xl:w-64 h-7 overflow-hidden relative"
              style={{ height: "1.75rem" }}
            >
              <div
                ref={containerRef}
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${currentTextIndex * 1.75}rem)`,
                }}
              >
                {rotatingTexts.map((text, idx) => (
                  <div
                    key={idx}
                    className="h-7 leading-7 flex items-center"
                    style={{ height: "1.75rem" }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </Link>

            {/* 데스크탑 네비게이션: lg (1024px) 이상에서만 보입니다. */}
            <nav className="hidden lg:flex absolute inset-x-0 justify-center">
              <div className="flex space-x-6 xl:space-x-8">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        pathname === link.path
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      } transition-colors px-1 py-2`}
                      onClick={(e) => handleExternalLinkClick(e, link.path)}
                      title={t.nav.externalTitle}
                    >
                      {t.nav[link.key]}
                      <span className="ml-1">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`${
                        pathname === link.path
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      } transition-colors px-1 py-2`}
                    >
                      {t.nav[link.key]}
                    </Link>
                  ),
                )}
              </div>
            </nav>

            <div className="flex items-center gap-1">
              <div
                role="group"
                aria-label={t.nav.switchLabel}
                className="relative flex items-center h-9 p-1 mr-2 rounded-full bg-gray-400 dark:bg-gray-950"
              >
                <span
                  aria-hidden
                  className={`absolute top-1 bottom-1 left-1 w-10 rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${
                    lang === "en" ? "translate-x-full" : "translate-x-0"
                  }`}
                />
                {languages.map(({ code, Flag, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-label={label}
                    aria-pressed={lang === code}
                    title={label}
                    className={`relative z-10 w-10 h-7 flex items-center justify-center transition-opacity duration-300 ${
                      lang === code
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Flag className="w-6 h-4 rounded-[3px] shadow-sm ring-1 ring-black/20 dark:ring-white/25" />
                  </button>
                ))}
              </div>
              {/* 모바일 메뉴 토글 버튼: lg (1024px) 미만에서만 보입니다. */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={t.nav.menuOpen}
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴: lg (1024px) 미만에서만 보입니다. */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      pathname === link.path
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } block px-3 py-2 rounded-md text-base font-medium`}
                    onClick={(e) => {
                      handleExternalLinkClick(e, link.path);
                      setMobileMenuOpen(false); // 링크 클릭 후 모바일 메뉴 닫기
                    }}
                    title={t.nav.externalTitle}
                  >
                    {t.nav[link.key]}
                    <span className="ml-1">↗</span>
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`${
                      pathname === link.path
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } block px-3 py-2 rounded-md text-base font-medium`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav[link.key]}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
