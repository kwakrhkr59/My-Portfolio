import Link from "next/link";
import Image from "next/image";
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
  FileText,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { fetchNotionProjectBySlug } from "@/lib/fetchProject";

const gradients = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-purple-500",
  "from-pink-500 to-rose-500",
];

const cardClass =
  "bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700";

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardClass} p-6 md:p-8`}>
      <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}

function SideCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardClass} p-6`}>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

export default async function ProjectDetail(props: any) {
  const params = await props.params;
  const project = await fetchNotionProjectBySlug(params.slug);

  if (!project) {
    return (
      <PageShell>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-6">Project not found or an error occurred.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </PageShell>
    );
  }

  const Icon =
    project.type && project.type.includes("Research") ? FlaskConical : Code;
  const gradient = gradients[project.id.charCodeAt(0) % gradients.length];
  const coverImage = project.images?.[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <section
        className={`relative w-full overflow-hidden bg-gradient-to-r ${gradient}`}
      >
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${project.title} cover`}
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
        ) : (
          <Icon
            aria-hidden
            className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 text-white/20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="relative container mx-auto px-4 min-h-[18rem] md:min-h-[26rem] py-6 md:py-8 flex flex-col justify-between">
          <Link
            href="/projects"
            className="self-start inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="max-w-6xl mx-auto w-full text-white pt-12">
            <span className="inline-block px-4 py-1 mb-4 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-full">
              {project.type || "Project"}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.period || "Unknown period"}</span>
              </div>
              {project.team && project.team.length > 0 && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.team.join(", ")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <SectionCard
                title="Overview"
                icon={<FileText className="w-6 h-6 text-blue-500" />}
              >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.details ||
                    project.summary ||
                    "No description available."}
                </p>
              </SectionCard>

              {project.goal && (
                <SectionCard
                  title="Project Goal"
                  icon={<Lightbulb className="w-6 h-6 text-yellow-500" />}
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.goal}
                  </p>
                </SectionCard>
              )}

              {project.features && project.features.length > 0 && (
                <SectionCard
                  title="Key Features"
                  icon={<ListTodo className="w-6 h-6 text-purple-500" />}
                >
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}

              {project.challenges && (
                <SectionCard
                  title="Challenges & Solutions"
                  icon={<Wrench className="w-6 h-6 text-orange-500" />}
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.challenges}
                  </p>
                </SectionCard>
              )}

              {project.results && (
                <SectionCard
                  title="Results & Achievements"
                  icon={<Trophy className="w-6 h-6 text-green-500" />}
                >
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.results}
                  </p>
                </SectionCard>
              )}
            </div>

            <div className="space-y-8">
              {project.stack && project.stack.length > 0 && (
                <SideCard
                  title="Technologies"
                  icon={<Wrench className="w-5 h-5 text-blue-500" />}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md border border-gray-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SideCard>
              )}

              {project.team && project.team.length > 0 && (
                <SideCard
                  title="Team"
                  icon={<Users className="w-5 h-5 text-purple-500" />}
                >
                  <ul className="space-y-3">
                    {project.team.map((member: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                          {member.charAt(0)}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {member}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SideCard>
              )}

              {(project.link || project.github) && (
                <SideCard title="Links">
                  <div className="space-y-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold text-sm transition-colors shadow-md"
                      >
                        <Github className="w-4 h-4" />
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </SideCard>
              )}

              <div className={`${cardClass} p-6 text-center`}>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  Have Questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Feel free to reach out if you have any questions about this
                  project.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all shadow-md"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
