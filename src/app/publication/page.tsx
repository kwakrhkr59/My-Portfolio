import { PageShell, PageHeader } from "@/components/layout/PageShell";
import PaperList from "@/components/publication/PaperList";
import { fetchNotionPapers } from "@/lib/fetchPublications";

export const metadata = { title: "연구" };

// Notion 수정 사항이 재배포 없이 반영되도록 5분마다 갱신한다.
export const revalidate = 300;

export default async function PublicationsPage() {
  const papers = await fetchNotionPapers();

  return (
    <PageShell>
      <PageHeader page="publication" />
      <PaperList papers={papers} />
    </PageShell>
  );
}
