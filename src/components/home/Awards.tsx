"use client";

import { Award } from "lucide-react";

const awardsData = [
  {
    title: "1st Place, Artificial Intelligence University Programming Contest",
    organization: "Ewha Womans University, College of Artificial Intelligence",
    year: "2024",
    description: "2024 이화여자대학교 인공지능대학 프로그래밍 경진대회 대상",
    icon: Award,
  },
  {
    title: "1st Place, E-PPER Programming Contest",
    organization: "Ewha Womans University, Division of Software Science",
    year: "2024",
    description: "2024 이화여자대학교 소프트웨어학부 프로그래밍 대회 1등",
    icon: Award,
  },
  {
    title: "President's Award, KIISC Conference",
    organization:
      "Korean Institute of Information Security and Cryptology (KIISC)",
    year: "2023",
    description: "KIISC 영남지부 학술대회에서 우수한 연구 성과로 학회장상 수상",
    icon: Award,
  },
];

const Awards = () => {
  return (
    <section
      id="awards"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic contributions.
          </p>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6 mb-4 md:mb-0">
                <award.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {award.title}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base mt-1 md:mt-0">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">
                  {award.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
