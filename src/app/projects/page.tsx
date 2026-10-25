import { fetchNotionProjectsAll } from "@/lib/fetchProject";
import { Project } from "@/types/project";
import { Github, FolderOpen, Search, Filter } from "lucide-react";
import { PageShell, PageHeader } from "@/components/layout/PageShell";
import ProjectList from "@/components/projects/ProjectList";

function ProjectStats({ projects }: { projects: Project[] }) {
  const totalProjects = projects.length;
  const recentProjects = projects.filter((project) => {
    const createdAt = project.created_at
      ? new Date(project.created_at)
      : new Date(0);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return createdAt > thirtyDaysAgo;
  }).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <StatCard
        title="Total Projects"
        value={totalProjects}
        icon={
          <FolderOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        }
        bg="bg-blue-100 dark:bg-blue-900/30"
      />
      <StatCard
        title="Recent Projects"
        value={recentProjects}
        icon={<Search className="w-6 h-6 text-green-600 dark:text-green-400" />}
        bg="bg-green-100 dark:bg-green-900/30"
      />
      <StatCard
        title="Last 30 Days"
        value={recentProjects}
        icon={
          <Filter className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        }
        bg="bg-purple-100 dark:bg-purple-900/30"
      />
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  bg,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        <div
          className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  const projects = await fetchNotionProjectsAll();

  return (
    <PageShell>
      <PageHeader
        title="My Projects"
        description="Explore my collection of projects showcasing various technologies and creative solutions."
      />

      <ProjectStats projects={projects} />

      <ProjectList projects={projects} />

      <div className="text-center">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Github className="w-8 h-8 text-white dark:text-gray-900" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Want to see more?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check out all my projects and contributions on GitHub
          </p>
          <a
            href="https://github.com/kwakrhkr59"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </PageShell>
  );
}
