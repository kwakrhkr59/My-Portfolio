import { notion, NOTION_AWARDS_ID } from "./notion";
import { Award } from "@/types/award";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionAwards(): Promise<Award[]> {
  const queryDatabase = notion.databases.query.bind(notion.databases);
  const response = await queryDatabase({
    database_id: NOTION_AWARDS_ID,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map((page: PageObjectResponse) => {
      const props = page.properties;

      const yearProp = props.Year;
      const yearDate = yearProp?.type === "date" ? yearProp.date?.start : null;

      return {
        id: page.id,
        title:
          props.Title.type === "title"
            ? props.Title.title[0]?.plain_text || "Untitled"
            : "Untitled",
        year: yearDate ? new Date(yearDate).getFullYear() : 0,
        organization:
          props.Organization.type === "rich_text"
            ? props.Organization.rich_text[0]?.plain_text || ""
            : "",
        description:
          props.Description.type === "rich_text"
            ? props.Description.rich_text[0]?.plain_text || ""
            : "",
      };
    });
}
