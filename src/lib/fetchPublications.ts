import { notion, NOTION_PUBLICATION_ID } from "./notion";
import { Paper } from "@/data/publications";

export async function fetchNotionPapers(): Promise<Paper[]> {
  const queryDatabase = notion.databases.query.bind(notion.databases);
  const response = await queryDatabase({
    database_id: NOTION_PUBLICATION_ID,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results.map((page) => {
    const props = page.properties;

    return {
      id: page.id,
      title: props.Title.title[0]?.plain_text || "Untitled",
      role: props.Role?.select?.name || "",
      authors: props.Authors.multi_select?.map((a: any) => a.name) || [],
      journal: props.Journal?.rich_text[0]?.plain_text || "",
      year: props.Year?.number || 0,
      abstract: props.Abstract?.rich_text[0]?.plain_text || "",
      keywords: props.Keywords?.multi_select?.map((k: any) => k.name) || [],
      doi: props.DOI?.url || undefined,
      github: props.GitHub?.url || undefined,
      website: props.Website?.url || undefined,
      citations: props.Citations?.number || undefined,
      status: props.Status?.select?.name as Paper["status"],
      impact: props.Impact?.rich_text[0]?.plain_text || undefined,
      methodology: props.Methodology?.rich_text[0]?.plain_text || undefined,
      field: props.Field?.select?.name || "Other",
    };
  });
}
