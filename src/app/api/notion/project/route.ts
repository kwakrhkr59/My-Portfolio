import { NextResponse } from "next/server";
import { fetchNotionProjects } from "@/lib/fetchProject";

export async function GET() {
  const res = await fetchNotionProjects();
  return NextResponse.json(res);
}
