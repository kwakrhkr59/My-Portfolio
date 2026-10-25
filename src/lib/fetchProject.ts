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
  getDate,
  getCheckbox,
  getNumber,
  compact,
} from "@/lib/notionParsers";
import { Project, ProjectShort } from "@/types/project";
import {
  PageObjectResponse,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints";

const toProject = (page: PageObjectResponse): Project => {
  const props = page.properties;

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
    start: getDate(props["Start"]),
    end: getDate(props["End"]),
    team: getMultiSelect(props["Team"]),
    type: getSelectName(props["Type"]) || "",
    priority: getSelectName(props["Priority"]) || "",
    status: getStatusName(props["Status"]) || "",
    created_at: page.created_time as string,
    homeSummary: getRichText(props["Home_summary"]) || "",
    featured: getCheckbox(props["Featured"]),
    order: getNumber(props["Order"]) ?? 999,
    en: compact({
      title: getRichText(props["Title_en"]),
      summary: getRichText(props["Summary_en"]),
      details: getRichText(props["Details_en"]),
      goal: getRichText(props["Goal_en"]),
      features: getLines(props["Features_en"]),
      challenges: getRichText(props["Challenges_en"]),
      results: getRichText(props["Results_en"]),
      homeSummary: getRichText(props["Home_summary_en"]),
    }),
  };
};

const isPage = (page: { object: string }): page is PageObjectResponse =>
  page.object === "page" && "properties" in page;

export async function fetchNotionProjectsAll(): Promise<Project[]> {
  const response = await notion.databases.query({
    database_id: NOTION_PROJECT_ID,
    sorts: [{ property: "Start", direction: "descending" }],
  });

  return response.results.filter(isPage).map(toProject);
}

export async function fetchNotionProjectBySlug(
  slug: string,
): Promise<Project | null> {
  const response = await notion.databases.query({
    database_id: NOTION_PROJECT_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
    page_size: 1,
  });

  const page = response.results[0];
  return page && isPage(page) ? toProject(page) : null;
}

export const parseProject = (
  projectPage: GetPageResponse,
): ProjectShort | null => {
  if (!projectPage || !isPage(projectPage)) {
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
