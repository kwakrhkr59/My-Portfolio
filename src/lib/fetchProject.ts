import { notion, NOTION_PROJECT_ID } from "./notion";
import { Project } from "@/types/project";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function fetchNotionProjectsAll(): Promise<Project[]> {
  const response = await notion.databases.query({
    database_id: NOTION_PROJECT_ID,
    sorts: [{ property: "Period", direction: "descending" }],
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

      const getStatusName = (prop: any): string | undefined =>
        prop?.type === "status" ? prop.status?.name : undefined;

      const getUrl = (prop: any): string | undefined =>
        prop?.type === "url" ? prop.url || undefined : undefined;

      const getFiles = (prop: any): string[] =>
        prop?.type === "files"
          ? (prop.files
              .map(
                (f: { file?: { url: string }; external?: { url: string } }) =>
                  f.external?.url || f.file?.url || ""
              )
              .filter(Boolean) as string[])
          : [];

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
      };
    });
}
export async function fetchNotionProjectBySlug(
  slug: string
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

  const getStatusName = (prop: any): string | undefined =>
    prop?.type === "status" ? prop.status?.name : undefined;

  const getUrl = (prop: any): string | undefined =>
    prop?.type === "url" ? prop.url || undefined : undefined;

  const getFiles = (prop: any): string[] =>
    prop?.type === "files"
      ? (prop.files
          .map(
            (f: { file?: { url: string }; external?: { url: string } }) =>
              f.external?.url || f.file?.url || ""
          )
          .filter(Boolean) as string[])
      : [];

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
  };
}
