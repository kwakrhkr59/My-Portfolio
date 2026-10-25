"use client";

import { ChevronDown } from "lucide-react";
import { useLang } from "@/components/layout/LanguageProvider";

const HeroSection = ({ onScroll }: { onScroll: () => void }) => {
  const { t } = useLang();

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white px-4">
      <div className="text-center space-y-10 max-w-5xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            {t.hero.hello}
          </h1>
          <h2 className="text-3xl md:text-5xl font-light animate-fade-in-2s">
            {t.hero.intro}
          </h2>
        </div>
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed animate-fade-in-3s whitespace-pre-line break-keep">
          {t.hero.desc}
        </p>
        <div className="pt-6 animate-fade-in-bounce flex justify-center">
          <button
            onClick={onScroll}
            className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white px-6 py-3 rounded-full shadow-md backdrop-blur-md transition-all duration-300 border border-white border-opacity-30"
          >
            <span className="font-semibold">{t.hero.more}</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
