import { notion, NOTION_AWARDS_ID } from "./notion";
import { Award } from "@/data/award";

export async function fetchNotionAwards(): Promise<Award[]> {
  const queryDatabase = notion.databases.query.bind(notion.databases);
  const response = await queryDatabase({
    database_id: NOTION_AWARDS_ID,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results.map((page) => {
    const props = page.properties;
    const yearDate = props.Year?.date?.start;

    return {
      id: page.id,
      title: props.Title.title[0]?.plain_text || "Untitled",
      year: yearDate ? new Date(yearDate).getFullYear() : 0,
      organization: props.Organization.rich_text[0]?.plain_text || "",
      description: props.Description.rich_text[0]?.plain_text || "",
    };
  });
}
