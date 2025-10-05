"use clients";

import Link from "next/link";
import {
  FaCode,
  FaFlask,
  FaClock,
  FaUsers,
  FaStar,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectsPageCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.title.toLowerCase().includes("research")
    ? FaFlask
    : FaCode;

  // 랜덤 그라디언트 색상 (프로젝트 ID 기반으로 일관성 유지)
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
  ];

  const gradientIndex = project.id.charCodeAt(0) % gradients.length;
  const selectedGradient = gradients[gradientIndex];

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-800 cursor-pointer">
        {/* 그라디언트 헤더 */}
        <div className={`h-32 bg-gradient-to-r ${selectedGradient} relative`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Icon className="text-white text-xl" />
            </div>
          </div>

          {/* 타입 배지 */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              {project.type || "Project"}
            </span>
          </div>
        </div>

        {/* 컨텐츠 영역 */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* 프로젝트 목표 */}
          {project.goal && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start">
                <FaLightbulb className="text-blue-500 mt-1 mr-2 text-sm flex-shrink-0" />
                <p className="text-blue-800 dark:text-blue-300 text-xs line-clamp-2 font-medium">
                  {project.goal}
                </p>
              </div>
            </div>
          )}

          {/* 주요 기능들 */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <FaCheckCircle className="mr-1 text-green-500" />
                Key Features
              </h4>
              <div className="space-y-1">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="line-clamp-1">{feature}</span>
                  </div>
                ))}
                {project.features.length > 3 && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 pl-3">
                    +{project.features.length - 3} more features
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 프로젝트 성과 */}
          {project.results && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-start">
                <FaChartLine className="text-green-500 mt-1 mr-2 text-sm flex-shrink-0" />
                <p className="text-green-800 dark:text-green-300 text-xs line-clamp-2">
                  {project.results}
                </p>
              </div>
            </div>
          )}

          {/* 메타 정보 */}
          <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              {project.period && (
                <div className="flex items-center">
                  <FaClock className="mr-1" />
                  <span>{project.period}</span>
                </div>
              )}

              {project.team && project.team.length > 0 && (
                <div className="flex items-center">
                  <FaUsers className="mr-1" />
                  <span>
                    {project.team.length === 1
                      ? "Solo"
                      : `${project.team.length} members`}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                Featured
              </span>
            </div>
          </div>

          {/* 기술 스택 */}
          {project.stack && project.stack.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* 도전 과제 (간략하게) */}
          {project.challenges && (
            <div className="mb-4 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-md">
              <p className="text-orange-800 dark:text-orange-300 text-xs line-clamp-1">
                <span className="font-semibold">Challenge:</span>{" "}
                {project.challenges}
              </p>
            </div>
          )}

          {/* CTA 버튼 */}
          <div className="relative z-10">
            <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-xl font-medium text-sm hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-600 dark:group-hover:to-pink-600 dark:group-hover:text-white">
              Explore Project
            </button>
          </div>
        </div>

        {/* 호버 오버레이 효과 */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>
      </div>
    </Link>
  );
};

export default ProjectsPageCard;
