import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { T } from "@/lib/i18n/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { fetchNotionProjectBySlug } from "@/lib/fetchProject";

export default async function ProjectDetail(props: any) {
  const params = await props.params;
  const project = await fetchNotionProjectBySlug(params.slug);

  if (!project) {
    return (
      <PageShell>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-6">
            <T k="detail.notFound" />
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <T k="detail.back" />
          </Link>
        </div>
      </PageShell>
    );
  }

  return <ProjectDetailView project={project} />;
}
