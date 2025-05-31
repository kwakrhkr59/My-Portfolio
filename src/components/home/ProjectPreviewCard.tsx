"use client";

import Link from "next/link";
import { Project } from "@/types/project";
import { Code } from "lucide-react";

interface ProjectPreviewCardProps {
  project: Project;
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="flex flex-col md:flex-row items-start p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6 mb-4 md:mb-0">
          <Code className="text-indigo-600 text-xl mr-2" />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {(project.stack || []).slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-indigo-600 dark:text-white hover:text-indigo-800 font-medium">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreviewCard;
