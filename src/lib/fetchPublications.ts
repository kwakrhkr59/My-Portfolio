import { notion, NOTION_PUBLICATION_ID } from "./notion";
import {
  getPlainText,
  getMultiSelect,
  getSelectName,
  getUrl,
  getNumber,
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
        page: QueryDatabaseResponse["results"][number]
      ): page is PageObjectResponse =>
        "properties" in page && page.object === "page"
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
        abstract: getPlainText(props["Abstract"], "rich_text") || "",
        keywords: getMultiSelect(props["Keywords"]),
        doi: getUrl(props["DOI"]),
        github: getUrl(props["GitHub"]),
        website: getUrl(props["Website"]),
        citations: getNumber(props["Citations"]),
        status: getSelectName(props["Status"]) as Paper["status"],
        impact: getPlainText(props["Impact"], "rich_text"),
        methodology: getPlainText(props["Methodology"], "rich_text"),
        field: getSelectName(props["Field"]) || "Other",
      };
    });
}
