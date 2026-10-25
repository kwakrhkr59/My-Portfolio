export const getPlainText = (
  prop: any,
  expectedType: string,
): string | undefined => {
  if (prop && prop.type === expectedType) {
    if (expectedType === "title" || expectedType === "rich_text") {
      return prop[expectedType][0]?.plain_text || undefined;
    }
    return prop[expectedType] || undefined;
  }
  return undefined;
};

export const getMultiSelect = (prop: any): string[] =>
  prop?.type === "multi_select"
    ? prop.multi_select.map((s: { name: string }) => s.name)
    : [];

export const getSelectName = (prop: any): string | undefined =>
  prop?.type === "select" ? prop.select?.name : undefined;

export const getStatusName = (prop: any): string | undefined =>
  prop?.type === "status" ? prop.status?.name : undefined;

export const getUrl = (prop: any): string | undefined =>
  prop?.type === "url" ? prop.url || undefined : undefined;

export const getNumber = (prop: any): number | undefined =>
  prop?.type === "number" ? prop.number : undefined;

export const getTextArray = (prop: any): string[] => {
  const text = getPlainText(prop, "rich_text");
  return text ? text.split("\n").filter(Boolean) : [];
};

export const getFiles = (prop: any): string[] =>
  prop?.type === "files"
    ? (prop.files
        .map(
          (f: { file?: { url: string }; external?: { url: string } }) =>
            f.external?.url || f.file?.url || "",
        )
        .filter(Boolean) as string[])
    : [];

// rich_text 는 길이 제한으로 여러 조각으로 나뉘어 저장되므로 전체를 이어 붙인다.
export const getRichText = (prop: any): string | undefined => {
  if (prop?.type !== "rich_text") return undefined;
  const text = prop.rich_text
    .map((t: { plain_text: string }) => t.plain_text)
    .join("");
  return text || undefined;
};

export const getLines = (prop: any): string[] =>
  (getRichText(prop) ?? "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

// 값이 있는 항목만 남긴다 (빈 문자열 / 빈 배열 / undefined 제거).
export const compact = <T extends Record<string, unknown>>(
  obj: T,
): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) =>
      Array.isArray(v) ? v.length > 0 : v !== undefined && v !== "",
    ),
  ) as Partial<T>;

export const getCheckbox = (prop: any): boolean =>
  prop?.type === "checkbox" ? prop.checkbox : false;

// Notion date 속성의 시작/끝을 "YYYY-MM-DD" 문자열로 돌려준다.
export const getDate = (prop: any): string | null =>
  prop?.type === "date" ? (prop.date?.start ?? null) : null;
