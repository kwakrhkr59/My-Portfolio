import { NextResponse } from "next/server";
import { fetchNotionAwards } from "@/lib/fetchAwards";

export async function GET() {
  const res = await fetchNotionAwards();
  return NextResponse.json(res);
}
