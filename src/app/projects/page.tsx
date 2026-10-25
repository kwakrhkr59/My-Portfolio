import { fetchNotionProjectsAll } from "@/lib/fetchProject";
import { Github } from "lucide-react";
import { PageShell, PageHeader } from "@/components/layout/PageShell";
import ProjectList from "@/components/projects/ProjectList";

export default async function ProjectsPage() {
  const projects = await fetchNotionProjectsAll();

  return (
    <PageShell>
      <PageHeader
        title="My Projects"
        description="Explore my collection of projects showcasing various technologies and creative solutions."
      />

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
