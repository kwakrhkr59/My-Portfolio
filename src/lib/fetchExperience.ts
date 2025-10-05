import { notion, NOTION_EXPERIENCE_ID } from "./notion";
import { Experience } from "@/types/experience";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionExperience(): Promise<Experience[]> {
  const queryDatabase = notion.databases.query.bind(notion.databases);
  const response = await queryDatabase({
    database_id: NOTION_EXPERIENCE_ID,
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const props = page.properties;

      const title =
        props.Title.type === "title"
          ? props.Title.title[0]?.plain_text || "Untitled"
          : "Untitled";

      const period =
        props.Period.type === "rich_text"
          ? props.Period.rich_text[0]?.plain_text || ""
          : "";

      const organization =
        props.Organization.type === "rich_text"
          ? props.Organization.rich_text[0]?.plain_text || ""
          : "";

      const description =
        props.Description.type === "rich_text"
          ? props.Description.rich_text[0]?.plain_text || ""
          : "";

      return {
        id: page.id,
        title,
        period,
        organization,
        description,
      };
    });
}
