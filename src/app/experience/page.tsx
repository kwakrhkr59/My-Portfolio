import {
  FolderOpen,
  Calendar,
  MapPin,
  Award,
  Code,
  Target,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ExternalLink,
  Building,
  Rocket,
  BookOpen,
} from "lucide-react";
import { Experience } from "@/types/experience";
import { fetchNotionExperience } from "@/lib/fetchExperience";

function ExperienceItem({ experience }: { experience: Experience }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Bootcamp":
        return "from-blue-500 to-cyan-500";
      case "Research":
        return "from-purple-500 to-pink-500";
      case "Internship":
        return "from-green-500 to-teal-500";
      case "Project":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const typeGradient = getTypeColor(experience.type);

  const Icon = (() => {
    switch (experience.type) {
      case "Bootcamp":
        return Rocket;
      case "Research":
        return BookOpen;
      case "Internship":
        return Building;
      case "Project":
        return Code;
      default:
        return FolderOpen;
    }
  })();

  const displayedResponsibilities = experience.details.responsibilities;
  const displayedAchievements = experience.details.achievements;
  const displayedFeatures = experience.details.features;
  const displayedSkills = experience.details.skills;
  const displayedProjects = experience.details.projects;

  return (
    <div className="relative mb-16 md:mb-24 last:mb-0">
      <div className="mt-8 md:mt-24 bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
        <div className="mb-6 text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md mx-auto mb-4">
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div
            className={`inline-block px-4 py-1 bg-gradient-to-r ${typeGradient} text-white text-sm font-semibold rounded-full mb-3 shadow-md`}
          >
            {experience.type}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {experience.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            <div className="flex items-center gap-1">
              <Building className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">{experience.organization}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-green-500" />
              <span>{experience.period}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Summary
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
            {experience.description}
          </p>
        </div>
        {displayedResponsibilities.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {displayedResponsibilities.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-base"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {displayedAchievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {displayedAchievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-base"
                >
                  <TrendingUp className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {displayedFeatures.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
              Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {displayedFeatures.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-md font-medium border border-gray-200 dark:border-slate-700 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {displayedSkills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
              Skills Developed
            </h4>
            <div className="flex flex-wrap gap-2">
              {displayedSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        {displayedProjects && displayedProjects.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-500" />
              Major Projects
            </h4>
            <ul className="space-y-2">
              {displayedProjects.map((project, idx) => (
                <li
                  key={idx}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-3 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-slate-700"
                >
                  <span className="font-semibold">{project.title}: </span>
                  <span>{project.summary}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {(experience.links?.website ||
          experience.links?.certificate ||
          experience.links?.portfolio) && (
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {experience.links?.website && (
              <a
                href={experience.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                Website
              </a>
            )}
            {experience.links?.certificate && (
              <a
                href={experience.links.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
              >
                <Award className="w-4 h-4" />
                Certificate
              </a>
            )}
            {experience.links?.portfolio && (
              <a
                href={experience.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
              >
                <FolderOpen className="w-4 h-4" />
                Portfolio
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default async function ExperiencePage() {
  const experiences = await fetchNotionExperience();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Professional Experience
          </h1>
          <p className="text-lg md:text-2xl text-gray-60G00 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Detailed journey through my professional experiences, research
            contributions, and key achievements.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
