import { NextResponse } from "next/server";
import { fetchNotionProjectsAll } from "@/lib/fetchProject";

export async function GET() {
  const res = await fetchNotionProjectsAll();
  return NextResponse.json(res);
}
