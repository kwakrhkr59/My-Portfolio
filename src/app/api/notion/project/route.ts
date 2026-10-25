import { NextResponse } from "next/server";
import { fetchNotionProjectsAll } from "@/lib/fetchProject";

// Notion 수정 사항이 재배포 없이 반영되도록 5분마다 갱신한다.
export const revalidate = 300;

export async function GET() {
  const res = await fetchNotionProjectsAll();
  return NextResponse.json(res);
}
