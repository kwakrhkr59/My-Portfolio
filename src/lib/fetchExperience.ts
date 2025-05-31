import { notion, NOTION_EXPERIENCE_ID } from "./notion";
import { Experience } from "@/data/experience";

export async function fetchNotionExperience(): Promise<Experience[]> {
  const queryDatabase = notion.databases.query.bind(notion.databases);
  const response = await queryDatabase({
    database_id: NOTION_EXPERIENCE_ID,
  });

  return response.results.map((page) => {
    const props = page.properties;

    return {
      id: page.id,
      title: props.Title.title[0]?.plain_text || "Untitled",
      period: props.Period.rich_text[0]?.plain_text || "",
      organization: props.Organization.rich_text[0]?.plain_text || "",
      description: props.Description.rich_text[0]?.plain_text || "",
    };
  });
}
