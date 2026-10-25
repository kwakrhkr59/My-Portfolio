import { PageShell, PageHeader } from "@/components/layout/PageShell";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { fetchNotionExperience } from "@/lib/fetchExperience";

export default async function ExperiencePage() {
  const experiences = await fetchNotionExperience();

  return (
    <PageShell>
      <PageHeader
        title="Professional Experience"
        description="Detailed journey through my professional experiences, research contributions, and key achievements."
      />

      <ExperienceTimeline experiences={experiences} />
    </PageShell>
  );
}
