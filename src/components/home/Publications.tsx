"use client";

import { BookOpen } from "lucide-react";
import { Paper } from "@/types/publications";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { localize } from "@/lib/i18n/localize";
import { featuredList } from "@/lib/featured";
import { useNotionList } from "@/lib/useNotionList";
import HomeListSection from "./HomeListSection";

export default function Publications() {
  const { lang } = useLang();
  const { data, loading } = useNotionList<Paper>("/api/notion/publications");

  const items = featuredList(data)
    .map((paper) => localize(paper, lang))
    .map((paper) => ({
      id: paper.id,
      title: paper.title,
      meta: String(paper.year),
      subtitle: paper.journal,
      description: paper.homeSummary || paper.abstract,
    }));

  return (
    <HomeListSection
      id="publication"
      section="publication"
      icon={BookOpen}
      items={items}
      loading={loading}
    />
  );
}
