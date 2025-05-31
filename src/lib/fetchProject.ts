import { notion, NOTION_PROJECT_ID } from "./notion";
export interface Project {
  id: string;
  title: string | null;
  slug: string | null;
  summary: string | null;
  details: string | null;
  goal: string | null;
  features: string[];
  challenges: string | null;
  results: string | null;
  images: string[];
  github: string | null;
  link: string | null;
  stack: string[];
  period: string | null;
  team: string[];
  type: string | undefined;
  priority: string | undefined;
  status: string | undefined;
  createdTime: string;
}

export async function fetchNotionProjects(): Promise<Project[]> {
  const queryDatabase = notion.databases.query.bind(notion.databases);
  const response = await queryDatabase({
    database_id: NOTION_PROJECT_ID,
    sorts: [{ property: "Period", direction: "descending" }],
  });

  return response.results.map((page) => {
    const props = page.properties;

    return {
      id: page.id,
      title: props["Title"]?.title?.[0]?.plain_text ?? null,
      slug: props["Slug"]?.rich_text?.[0]?.plain_text ?? null,
      summary: props["Summary"]?.rich_text?.[0]?.plain_text ?? null,
      details: props["Details"]?.rich_text?.[0]?.plain_text ?? null,
      goal: props["Goal"]?.rich_text?.[0]?.plain_text ?? null,
      features: props["Features"]?.multi_select?.map((f: any) => f.name) || [],
      challenges: props["Challenges"]?.rich_text?.[0]?.plain_text ?? null,
      results: props["Results"]?.rich_text?.[0]?.plain_text ?? null,
      images:
        props["Images"]?.type === "files"
          ? props["Images"]?.files?.map(
              (f: any) => f.external?.url || f.file?.url
            )
          : [],
      github: props["GitHub"]?.url || null,
      link: props["Link"]?.url || null,
      stack: props["Stack"]?.multi_select?.map((s: any) => s.name) || [],
      period: props["Period"]?.rich_text?.[0]?.plain_text ?? null,
      team: props["Team"]?.multi_select?.map((p: any) => p.name) || [],
      type: props["Type"]?.select?.name || undefined,
      priority: props["Priority"]?.select?.name || undefined,
      status: props["Status"]?.status?.name || undefined,
      createdTime: props["Created time"]?.created_time || "",
    };
  });
}
