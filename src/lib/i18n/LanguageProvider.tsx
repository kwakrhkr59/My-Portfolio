"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { dictionaries, Dictionary, Lang } from "./dictionary";

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

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "ko" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("lang", next);
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

// 서버 컴포넌트에서 사전 문구를 쓰기 위한 헬퍼. 예: <T k="detail.overview" />
export function T({ k }: { k: string }) {
  const { t } = useLang();
  const value = k
    .split(".")
    .reduce<unknown>(
      (acc, key) => (acc as Record<string, unknown> | undefined)?.[key],
      t,
    );
  return <>{typeof value === "string" ? value : k}</>;
}

export const fill = (template: string, n: number) =>
  template.replace("{n}", String(n));
