import { PageShell, PageHeader } from "@/components/layout/PageShell";
import PaperList from "@/components/publication/PaperList";
import { fetchNotionPapers } from "@/lib/fetchPublications";

export default async function PublicationsPage() {
  const papers = await fetchNotionPapers();

  return (
    <PageShell>
      <PageHeader page="publication" />
      <PaperList papers={papers} />
    </PageShell>
  );
}
