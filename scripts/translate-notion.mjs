// Notion 의 한국어 필드를 읽어 비어 있는 `_en` 컬럼을 Claude 로 번역해 채운다.
//
//   node --env-file=.env.local scripts/translate-notion.mjs [--dry-run] [--force] [--db=project,experience,...]
//
// --dry-run : Notion 에 쓰지 않고 번역 결과만 출력
// --force   : 이미 채워진 `_en` 도 다시 번역해 덮어쓴다 (직접 고친 번역이 사라지니 주의)
// --db      : 대상 DB 제한 (project | experience | publication | awards)
import { Client } from "@notionhq/client";

const MODEL = "claude-sonnet-5-5";
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const FORCE = args.includes("--force");
const only = args.find((a) => a.startsWith("--db="))?.slice(5).split(",");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// kind: title | text | lines  (lines 는 multi_select 이거나 줄바꿈으로 구분된 목록)
const DATABASES = {
  project: {
    id: process.env.NOTION_PROJECT_ID,
    style:
      "Write in the third person with the project as the subject: begin descriptive passages with 'This project ...' " +
      "(then 'It', or the app / extension / system name, to avoid repetition) rather than starting sentences with bare verbs.",
    fields: [
      ["Title", "Title_en", "title"],
      ["Summary", "Summary_en", "text"],
      ["Details", "Details_en", "text"],
      ["Goal", "Goal_en", "text"],
      ["Features", "Features_en", "lines"],
      ["Challenges", "Challenges_en", "text"],
      ["Results", "Results_en", "text"],
    ],
  },
  experience: {
    id: process.env.NOTION_EXPERIENCE_ID,
    style: "Use a concise resume style: verb-led sentences without a subject.",
    fields: [
      ["Title", "Title_en", "title"],
      ["Organization", "Organization_en", "text"],
      ["Location", "Location_en", "text"],
      ["Description", "Description_en", "text"],
      ["Detailed Overview", "Detailed Overview_en", "lines"],
      ["Responsibilities", "Responsibilities_en", "lines"],
      ["Achievements", "Achievements_en", "lines"],
      ["Features", "Features_en", "lines"],
    ],
  },
  publication: {
    id: process.env.NOTION_PUBLICATION_ID,
    style: "Use a concise resume style: verb-led sentences without a subject.",
    fields: [
      ["Title", "Title_en", "title"],
      ["Abstract", "Abstract_en", "text"],
      ["Impact", "Impact_en", "text"],
      ["Methodology", "Methodology_en", "text"],
    ],
  },
  awards: {
    id: process.env.NOTION_AWARDS_ID,
    style: "Use a concise resume style: verb-led sentences without a subject.",
    fields: [
      ["Title", "Title_en", "title"],
      ["Organization", "Organization_en", "text"],
      ["Description", "Description_en", "text"],
    ],
  },
};

const join = (arr) => arr.map((t) => t.plain_text).join("");

function read(prop) {
  if (!prop) return "";
  if (prop.type === "title") return join(prop.title);
  if (prop.type === "rich_text") return join(prop.rich_text);
  if (prop.type === "multi_select") return prop.multi_select.map((s) => s.name).join("\n");
  return "";
}

// Notion rich_text 한 조각은 2000자 제한이 있다.
const toRichText = (text) =>
  text.match(/[\s\S]{1,2000}/g)?.map((content) => ({ text: { content } })) ?? [];

const hasKorean = (s) => /[가-힣]/.test(s);

async function translate(sourceByKey, context, style) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      system:
        "You translate content for a Korean developer's personal portfolio website into natural, professional English. " +
        "Rules: keep technology names, library names, product names, people's names and URLs exactly as written; " +
        "write Korean organization, conference and award names in their commonly used official English names (e.g. SK텔레콤 -> SK Telecom); " +
        "the output must not contain any Hangul; " +
        "do not add or remove information; keep the first-person voice if the source uses it; " +
        "never use first-person pronouns (I, my, we, our); " + style + " " +
        "preserve line breaks (each line is a separate list item); if a value is already English, return it unchanged. " +
        'Reply with ONLY a JSON object that has exactly the same keys as the input and string values. No markdown fences.',
      messages: [
        {
          role: "user",
          content: `Context: ${context}\n\nInput JSON:\n${JSON.stringify(sourceByKey, null, 2)}`,
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic API ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = await res.json();
  const text = data.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
  return JSON.parse(json);
}

let translated = 0;
let skipped = 0;

for (const [name, db] of Object.entries(DATABASES)) {
  if (only && !only.includes(name)) continue;
  if (!db.id) {
    console.log(`[${name}] env id missing, skipped`);
    continue;
  }
  const { results } = await notion.databases.query({ database_id: db.id, page_size: 100 });
  console.log(`\n== ${name}: ${results.length} pages`);

  for (const page of results) {
    if (page.object !== "page" || !("properties" in page)) continue;
    const props = page.properties;
    const label = read(props["Title"]) || page.id;

    const todo = {};
    for (const [src, dst] of db.fields.map(([s, d]) => [s, d])) {
      const source = read(props[src]).trim();
      const existing = read(props[dst]).trim();
      if (!source || !hasKorean(source)) continue; // 비었거나 이미 영어
      if (existing && !FORCE) continue;
      todo[src] = source;
    }

    if (!Object.keys(todo).length) {
      skipped++;
      console.log(`- ${label}: nothing to translate`);
      continue;
    }

    const out = await translate(todo, `${name} entry "${label}"`, db.style);
    const properties = {};
    for (const [src, dst] of db.fields.map(([s, d]) => [s, d])) {
      if (typeof out[src] !== "string" || !out[src].trim()) continue;
      properties[dst] = { rich_text: toRichText(out[src].trim()) };
    }

    console.log(`- ${label}: ${Object.keys(properties).length} fields`);
    if (DRY) {
      for (const [k, v] of Object.entries(out)) console.log(`    ${k}: ${String(v).slice(0, 160).replace(/\n/g, " ⏎ ")}`);
    } else {
      await notion.pages.update({ page_id: page.id, properties });
    }
    translated++;
  }
}

console.log(`\n${DRY ? "[dry-run] " : ""}translated pages: ${translated}, unchanged: ${skipped}`);
