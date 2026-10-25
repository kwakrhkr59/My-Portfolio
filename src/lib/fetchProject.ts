import { notion, NOTION_PROJECT_ID } from "./notion";
import {
  getPlainText,
  getMultiSelect,
  getSelectName,
  getStatusName,
  getUrl,
  getFiles,
  getRichText,
  getLines,
  compact,
} from "@/lib/notionParsers";
import { Project, ProjectShort } from "@/types/project";
import {
  PageObjectResponse,
  GetPageResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionProjectsAll(): Promise<Project[]> {
  const response = await notion.databases.query({
    database_id: NOTION_PROJECT_ID,
    sorts: [{ property: "Period", direction: "descending" }],
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
      const createdAt = page.created_time as string;

      return {
        id: page.id,
        title: getPlainText(props["Title"], "title") || "",
        slug: getPlainText(props["Slug"], "rich_text") || "",
        summary: getPlainText(props["Summary"], "rich_text") || "",
        details: getPlainText(props["Details"], "rich_text") || "",
        goal: getPlainText(props["Goal"], "rich_text") || "",
        features: getMultiSelect(props["Features"]),
        challenges: getPlainText(props["Challenges"], "rich_text") || "",
        results: getPlainText(props["Results"], "rich_text") || "",
        images: getFiles(props["Images"]),
        github: getUrl(props["GitHub"]) || "",
        link: getUrl(props["Link"]) || "",
        stack: getMultiSelect(props["Stack"]),
        period: getPlainText(props["Period"], "rich_text") || "",
        team: getMultiSelect(props["Team"]),
        type: getSelectName(props["Type"]) || "",
        priority: getSelectName(props["Priority"]) || "",
        status: getStatusName(props["Status"]) || "",
        created_at: createdAt,
        en: compact({
          title: getRichText(props["Title_en"]),
          summary: getRichText(props["Summary_en"]),
          details: getRichText(props["Details_en"]),
          goal: getRichText(props["Goal_en"]),
          features: getLines(props["Features_en"]),
          challenges: getRichText(props["Challenges_en"]),
          results: getRichText(props["Results_en"]),
        }),
      };
    });
}

export async function fetchNotionProjectBySlug(
  slug: string,
): Promise<Project | null> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECT_ID!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
    page_size: 1,
  });

  if (response.results.length === 0) {
    return null;
  }

  const page = response.results[0];

  if (!("properties" in page) || page.object !== "page") {
    return null;
  }
  const props = page.properties;
  const createdAt = page.created_time as string;

  return {
    id: page.id,
    title: getPlainText(props["Title"], "title") || "",
    slug: getPlainText(props["Slug"], "rich_text") || "",
    summary: getPlainText(props["Summary"], "rich_text") || "",
    details: getPlainText(props["Details"], "rich_text") || "",
    goal: getPlainText(props["Goal"], "rich_text") || "",
    features: getMultiSelect(props["Features"]),
    challenges: getPlainText(props["Challenges"], "rich_text") || "",
    results: getPlainText(props["Results"], "rich_text") || "",
    images: getFiles(props["Images"]),
    github: getUrl(props["GitHub"]) || "",
    link: getUrl(props["Link"]) || "",
    stack: getMultiSelect(props["Stack"]),
    period: getPlainText(props["Period"], "rich_text") || "",
    team: getMultiSelect(props["Team"]),
    type: getSelectName(props["Type"]) || "",
    priority: getSelectName(props["Priority"]) || "",
    status: getStatusName(props["Status"]) || "",
    created_at: createdAt,
    en: compact({
      title: getRichText(props["Title_en"]),
      summary: getRichText(props["Summary_en"]),
      details: getRichText(props["Details_en"]),
      goal: getRichText(props["Goal_en"]),
      features: getLines(props["Features_en"]),
      challenges: getRichText(props["Challenges_en"]),
      results: getRichText(props["Results_en"]),
    }),
  };
}

export const parseProject = (
  projectPage: GetPageResponse,
): ProjectShort | null => {
  if (
    !projectPage ||
    !("properties" in projectPage) ||
    projectPage.object !== "page"
  ) {
    return null;
  }

  const props = projectPage.properties;

  return {
    title: getPlainText(props["Title"], "title") || "Untitled Project",
    summary: getPlainText(props["Summary"], "rich_text") || "",
    features: getMultiSelect(props["Features"]),
    outcome: getPlainText(props["Outcome"], "rich_text") || "",
  };
};
