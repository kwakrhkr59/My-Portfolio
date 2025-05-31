import { NextResponse } from "next/server";
import { fetchNotionPapers } from "@/lib/fetchPublications";

export async function GET() {
  const res = await fetchNotionPapers();
  return NextResponse.json(res);
}
