"use client";

import { FolderOpen } from "lucide-react";
import { Experience } from "@/types/experience";
import { useLang } from "@/components/layout/LanguageProvider";
import { localize } from "@/lib/i18n/localize";
import { formatPeriod } from "@/lib/i18n/format";
import { featuredList } from "@/lib/featured";
import { useNotionList } from "@/lib/useNotionList";
import HomeListSection from "./HomeListSection";

export default function Experiences() {
  const { lang } = useLang();
  const { data, loading } = useNotionList<Experience>("/api/notion/experience");

  const items = featuredList(data)
    .map((exp) => localize(exp, lang))
    .map((exp) => ({
      id: exp.id,
      title: exp.title,
      meta: formatPeriod(exp.start, exp.end, lang, exp.period),
      subtitle: exp.organization,
      description: exp.homeSummary || exp.description,
    }));

  return (
    <HomeListSection
      id="experience"
      section="experience"
      icon={FolderOpen}
      items={items}
      loading={loading}
    />
  );
}
