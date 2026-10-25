"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { dictionaries, Dictionary, Lang } from "@/lib/i18n/dictionary";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("ko");

  // 언어 결정 순서: 1) 토글로 직접 고른 값 2) 브라우저 언어(한국어가 아니면 영어) 3) 기본값 한국어
  // 자동 감지한 값은 저장하지 않는다. 그래야 이후 브라우저 언어를 바꿨을 때 따라간다.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("lang");
    } catch {
      // 저장소를 쓸 수 없는 환경(시크릿 모드 등)이면 감지 결과만 사용한다.
    }
    if (stored === "ko" || stored === "en") {
      setLangState(stored);
      return;
    }
    const browserLang = (
      navigator.languages?.[0] ||
      navigator.language ||
      ""
    ).toLowerCase();
    if (browserLang && !browserLang.startsWith("ko")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // 탭 제목은 서버가 한국어로 내려 주므로, 언어나 페이지가 바뀔 때 현재 언어에 맞게 다시 맞춘다.
  // 프로젝트 상세(/projects/slug)는 상세 페이지가 직접 정한다.
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/projects/")) return;
    const key = pathname === "/" ? "home" : pathname.split("/")[1];
    const title = (dictionaries[lang].meta as Record<string, string>)[key];
    if (title) document.title = title;
  }, [pathname, lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      // 저장하지 못해도 현재 화면의 언어는 바뀐다.
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
};
