import PaperList from "@/components/publication/PaperList";
import { fetchNotionPapers } from "@/lib/fetchPublications";

export default async function PublicationsPage() {
  const papers = await fetchNotionPapers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Academic Publications
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my research contributions in AI and Cyber Security.
          </p>
        </div>

        <PaperList papers={papers} />
      </div>
    </div>
  );
}
