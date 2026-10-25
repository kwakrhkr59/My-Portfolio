import { PageShell, PageHeader } from "@/components/layout/PageShell";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { fetchNotionExperience } from "@/lib/fetchExperience";

export default async function ExperiencePage() {
  const experiences = await fetchNotionExperience();

  return (
    <PageShell>
      <PageHeader page="experience" />

      <ExperienceTimeline experiences={experiences} />
    </PageShell>
  );
}
