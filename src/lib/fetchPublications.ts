import { notion, NOTION_PUBLICATION_ID } from "./notion";
import {
  getPlainText,
  getMultiSelect,
  getSelectName,
  getUrl,
  getNumber,
  getRichText,
  getCheckbox,
  compact,
} from "@/lib/notionParsers";
import { Paper } from "@/types/publications";

import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionPapers(): Promise<Paper[]> {
  const response = await notion.databases.query({
    database_id: NOTION_PUBLICATION_ID,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results
    .filter(
      (
        page: QueryDatabaseResponse["results"][number],
      ): page is PageObjectResponse =>
        "properties" in page && page.object === "page",
    )

    .map((page: PageObjectResponse) => {
      const props = page.properties;

      return {
        id: page.id,
        title: getPlainText(props["Title"], "title") || "Untitled",
        role: getSelectName(props["Role"]) || "",
        authors: getMultiSelect(props["Authors"]),
        journal: getPlainText(props["Journal"], "rich_text") || "",
        year: getNumber(props["Year"]) || 0,
        abstract: getRichText(props["Abstract"]) || "",
        keywords: getMultiSelect(props["Keywords"]),
        doi: getUrl(props["DOI"]),
        github: getUrl(props["GitHub"]),
        website: getUrl(props["Website"]),
        citations: getNumber(props["Citations"]),
        status: getSelectName(props["Status"]) as Paper["status"],
        impact: getRichText(props["Impact"]),
        methodology: getRichText(props["Methodology"]),
        homeSummary: getRichText(props["Home_summary"]) || "",
        featured: getCheckbox(props["Featured"]),
        order: getNumber(props["Order"]) ?? 999,
        en: compact({
          title: getRichText(props["Title_en"]),
          abstract: getRichText(props["Abstract_en"]),
          impact: getRichText(props["Impact_en"]),
          methodology: getRichText(props["Methodology_en"]),
          journal: getRichText(props["Journal_en"]),
          homeSummary: getRichText(props["Home_summary_en"]),
        }),
      };
    });
}
