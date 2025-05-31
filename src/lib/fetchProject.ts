import { notion, NOTION_PROJECT_ID } from "./notion";

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  details: string | null;
  goal: string | null;
  period: string | null;
  priority: string | null;
  status: string | null;
  link: string | null;
  github: string | null;
  stack: string[];
  type: string | undefined;
  createdAt?: string;
  features: string[];
  team: string[];
  results: string | null;
  challenges: string | null;
  images: string[];
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
      title: props["Title"]?.title?.[0]?.plain_text ?? "",
      slug: props["Slug"]?.rich_text?.[0]?.plain_text ?? "",
      summary: props["Summary"]?.rich_text?.[0]?.plain_text ?? null,
      details: props["Details"]?.rich_text?.[0]?.plain_text ?? null,
      goal: props["Goal"]?.rich_text?.[0]?.plain_text ?? null,
      features:
        props["Features"]?.multi_select?.map((f: { name: string }) => f.name) ||
        [],
      challenges: props["Challenges"]?.rich_text?.[0]?.plain_text ?? null,
      results: props["Results"]?.rich_text?.[0]?.plain_text ?? null,
      images:
        props["Images"]?.type === "files"
          ? props["Images"]?.files?.map(
              (f: { file?: { url: string }; external?: { url: string } }) =>
                f.external?.url || f.file?.url
            ) || []
          : [],
      github: props["GitHub"]?.url || null,
      link: props["Link"]?.url || null,
      stack:
        props["Stack"]?.multi_select?.map((s: { name: string }) => s.name) ||
        [],
      period: props["Period"]?.rich_text?.[0]?.plain_text ?? null,
      team:
        props["Team"]?.multi_select?.map((p: { name: string }) => p.name) || [],
      type: props["Type"]?.select?.name || undefined,
      priority: props["Priority"]?.select?.name || undefined,
      status: props["Status"]?.status?.name || undefined,
      createdAt: page.created_time,
    };
  });
}
