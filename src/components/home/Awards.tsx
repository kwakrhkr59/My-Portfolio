"use client";

import { Award as AwardIcon } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function Awards() {
  const { t } = useLang();
  const Icon = AwardIcon;

  return (
    <section
      id="awards"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.sections.awards.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto break-keep">
            {t.sections.awards.desc}
          </p>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          {t.home.awards.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6 mb-4 md:mb-0">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base mt-1 md:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">
                  {item.org}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
