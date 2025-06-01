"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "홈", path: "/" },
  { name: "프로젝트", path: "/projects" },
  { name: "연구", path: "/publication" },
  { name: "경력", path: "/experience" },
  {
    name: "블로그",
    path: "https://blog-501b-21207b.tistory.com/",
    external: true,
  },
  { name: "연락처", path: "/contact" },
];

const rotatingTexts = ["AI & Fullstack 개발자", "곽현정 포트폴리오"];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
    const confirmMessage = "외부 링크로 이동하시겠습니까?";
    if (!window.confirm(confirmMessage)) {
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
              className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white w-60 h-7 overflow-hidden relative"
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
              <div className="flex space-x-8">
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
                      title="외부 링크로 이동합니다."
                    >
                      {link.name}
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
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </nav>

            <div className="flex items-center">
              {/* 모바일 메뉴 토글 버튼: lg (1024px) 미만에서만 보입니다. */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="모바일 메뉴 열기"
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
                    title="외부 링크로 이동합니다."
                  >
                    {link.name}
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
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
