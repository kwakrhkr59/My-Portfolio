import { NextResponse } from "next/server";
import { fetchNotionExperience } from "@/lib/fetchExperience";

export async function GET() {
  const res = await fetchNotionExperience();
  return NextResponse.json(res);
}
