import Link from "next/link";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Calendar,
  Users,
  Code,
  FlaskConical,
  Lightbulb,
  ListTodo,
  Trophy,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { fetchNotionProjectBySlug } from "@/lib/fetchProject";

type Params = {
  slug: string;
};

interface Props {
  params: Params;
}

export default async function ProjectDetail(props: any) {
  const params = await props.params;
  const project = await fetchNotionProjectBySlug(params.slug);
  console.log(project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700">
        <p>Project not found or an error occurred.</p>
      </div>
    );
  }

  const Icon =
    project.type && project.type.includes("Research") ? FlaskConical : Code;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                href="/projects"
                className="flex items-center text-gray-900 hover:text-indigo-600 transition-colors duration-200"
              >
                <ArrowLeft className="mr-2" />
                <span>Back to Projects</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  title="GitHub Repository"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  title="Visit Project"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <Icon className="text-2xl" />
            </div>
            <span className="text-lg font-medium bg-white/20 px-4 py-1 rounded-full">
              {project.type || "Project"}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-sm">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center bg-black/10 px-4 py-2 rounded-full">
              <Calendar className="mr-2" />
              <span>{project.period || "Unknown period"}</span>
            </div>
            {project.team && project.team.length > 0 && (
              <div className="flex items-center bg-black/10 px-4 py-2 rounded-full">
                <Users className="mr-2" />
                <span>{project.team.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {project.images && project.images.length > 0 && (
        <div className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
              <Image
                src={project.images[0]}
                alt={`${project.title} screenshot 1`}
                className="w-full h-full object-cover object-center"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.details ||
                  project.summary ||
                  "No description available."}
              </p>
            </div>

            {project.goal && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <Lightbulb className="mr-3 text-yellow-500" />
                  Project Goal
                </h2>
                <p className="text-gray-700 leading-relaxed">{project.goal}</p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <ListTodo className="mr-3 text-indigo-500" />
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1 mr-3">
                        <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <Wrench className="mr-3 text-gray-600" />
                  Challenges & Solutions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.results && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center pb-4 border-b border-gray-100">
                  <Trophy className="mr-3 text-amber-500" />
                  Results & Achievements
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {project.stack && project.stack.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <Wrench className="mr-2 text-indigo-500" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.team && project.team.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <Users className="mr-2 text-indigo-500" />
                  Team
                </h3>
                <ul className="space-y-3">
                  {project.team.map((member: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 text-indigo-700">
                        {member.charAt(0)}
                      </div>
                      <span className="text-gray-700">{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Links</h3>
              <div className="space-y-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-2 px-4 text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="mr-3" />
                    <span>Visit Project</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-2 px-4 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Github className="mr-3" />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">
                Have Questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Feel free to reach out if you have any questions about this
                project.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-center transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
