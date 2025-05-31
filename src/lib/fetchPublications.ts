import { notion, NOTION_PUBLICATION_ID } from "./notion";
import { Paper } from "@/types/publications";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionPapers(): Promise<Paper[]> {
  const response = await notion.databases.query({
    database_id: NOTION_PUBLICATION_ID,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results
    .filter(
      (page): page is PageObjectResponse =>
        "properties" in page && page.object === "page"
    )
    .map((page) => {
      const props = page.properties;

      const getPlainText = (
        prop: any,
        expectedType: string
      ): string | undefined => {
        if (prop && prop.type === expectedType) {
          if (expectedType === "title" || expectedType === "rich_text") {
            return prop[expectedType][0]?.plain_text || undefined;
          }
          return prop[expectedType] || undefined;
        }
        return undefined;
      };

      const getMultiSelect = (prop: any): string[] =>
        prop?.type === "multi_select"
          ? prop.multi_select.map((s: { name: string }) => s.name)
          : [];

      const getSelectName = (prop: any): string | undefined =>
        prop?.type === "select" ? prop.select?.name : undefined;

      const getUrl = (prop: any): string | undefined =>
        prop?.type === "url" ? prop.url || undefined : undefined;

      const getNumber = (prop: any): number | undefined =>
        prop?.type === "number" ? prop.number : undefined;

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
