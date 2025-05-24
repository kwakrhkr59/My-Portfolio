"use client";

import { BookOpen } from "lucide-react";
const papersData = [
  {
    title:
      "DeepCoAST: Unveiling Split Trace Correlation to Counter Traffic Splitting Defenses",
    journel: "IEEE Access",
    year: "2024",
    description: "Triplet을 통한 분할 트래픽 간의 상관관계 분석",
    icon: BookOpen,
  },
  {
    title:
      "딥러닝 기반 분할 데이터 상관관계 탐지를 통한 WF 방어 모델의 취약점 탐색",
    journel: "한국정보보호학회(KIISC) 영남지부 학술대회",
    year: "2023",
    description: "한국정보보호학회 학회장상 수여",
    icon: BookOpen,
  },
];

export default function Publication() {
  return (
    <section
      id="publication"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Publication
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic contributions.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {papersData.map((paper, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6 mb-4 md:mb-0">
                <paper.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {paper.title}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base mt-1 md:mt-0">
                    {paper.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">
                  {paper.journel}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {paper.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
