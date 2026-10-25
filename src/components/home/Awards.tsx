"use client";

import { Award as AwardIcon } from "lucide-react";
import { Award } from "@/types/award";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { localize } from "@/lib/i18n/localize";
import { featuredList } from "@/lib/featured";
import { useNotionList } from "@/lib/useNotionList";
import HomeListSection from "./HomeListSection";

export default function Awards() {
  const { lang } = useLang();
  const { data, loading } = useNotionList<Award>("/api/notion/awards");

  const items = featuredList(data)
    .map((award) => localize(award, lang))
    .map((award) => ({
      id: award.id,
      title: award.title,
      meta: String(award.year),
      subtitle: award.organization,
      description: award.description,
    }));

  return (
    <HomeListSection
      id="awards"
      section="awards"
      icon={AwardIcon}
      items={items}
      loading={loading}
    />
  );
}
