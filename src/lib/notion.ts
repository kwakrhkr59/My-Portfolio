import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const NOTION_PUBLICATION_ID = process.env.NOTION_PUBLICATION_ID!;
export const NOTION_PROJECT_ID = process.env.NOTION_PROJECT_ID!;
export const NOTION_AWARDS_ID = process.env.NOTION_AWARDS_ID!;
export const NOTION_EXPERIENCE_ID = process.env.NOTION_EXPERIENCE_ID!;
