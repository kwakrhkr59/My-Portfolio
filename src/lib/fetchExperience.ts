import { notion, NOTION_EXPERIENCE_ID } from "./notion";
import {
  getPlainText,
  getMultiSelect,
  getSelectName,
  getUrl,
  getTextArray,
  getRichText,
  getLines,
  getDate,
  getCheckbox,
  getNumber,
  compact,
} from "@/lib/notionParsers";
import {
  Experience,
  ExperienceDetails,
  ExperienceLinks,
} from "@/types/experience";
import { ProjectShort } from "@/types/project";
import { parseProject } from "./fetchProject";
import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionExperience(): Promise<Experience[]> {
  const response = await notion.databases.query({
    database_id: NOTION_EXPERIENCE_ID,
    sorts: [{ property: "Start", direction: "descending" }],
  });

  const experiences = await Promise.all(
    response.results
      .filter(
        (
          page: QueryDatabaseResponse["results"][number],
        ): page is PageObjectResponse =>
          page.object === "page" && "properties" in page,
      )
      .map(async (page: PageObjectResponse) => {
        const props = page.properties as any;

        const projectIds: string[] =
          props["Projects"]?.type === "relation"
            ? props["Projects"].relation.map((r: { id: string }) => r.id)
            : [];

        const projectPages = await Promise.all(
          projectIds.map((id) => notion.pages.retrieve({ page_id: id })),
        );
        const parsedProjects = projectPages
          .map(parseProject)
          .filter(Boolean) as ProjectShort[];

        const details: ExperienceDetails = {
          overview: getPlainText(props["Overview"], "rich_text") || "",
          details: getTextArray(props["Detailed Overview"]),
          responsibilities: getTextArray(props["Responsibilities"]),
          achievements: getTextArray(props["Achievements"]),
          features: getMultiSelect(props["Features"]),
          skills: getMultiSelect(props["Skills"]),
          projects: parsedProjects,
          collaboration: getPlainText(props["Collaboration"], "rich_text"),
          impact: getPlainText(props["Impact"], "rich_text"),
          mentorship: getPlainText(props["Mentorship"], "rich_text"),
        };

        const links: ExperienceLinks = {
          website: getUrl(props["Website"]),
          certificate: getUrl(props["Certificate"]),
          portfolio: getUrl(props["Portfolio"]),
        };

        return {
          id: page.id,
          title: getPlainText(props["Title"], "title") || "Untitled",
          organization: getPlainText(props["Organization"], "rich_text") || "",
          period: getPlainText(props["Period"], "rich_text") || "",
          start: getDate(props["Start"]),
          end: getDate(props["End"]),
          location: getPlainText(props["Location"], "rich_text"),
          type: getSelectName(props["Type"]) || "Work",
          description: getPlainText(props["Description"], "rich_text") || "",
          details: details,
          links: links,
          homeSummary: getRichText(props["Home_summary"]) || "",
          featured: getCheckbox(props["Featured"]),
          order: getNumber(props["Order"]) ?? 999,
          en: compact({
            title: getRichText(props["Title_en"]),
            organization: getRichText(props["Organization_en"]),
            location: getRichText(props["Location_en"]),
            description: getRichText(props["Description_en"]),
            homeSummary: getRichText(props["Home_summary_en"]),
            details: compact({
              details: getLines(props["Detailed Overview_en"]),
              responsibilities: getLines(props["Responsibilities_en"]),
              achievements: getLines(props["Achievements_en"]),
              features: getLines(props["Features_en"]),
            }),
          }),
        };
      }),
  );

  return experiences.filter(Boolean);
}
