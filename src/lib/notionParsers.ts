export const getPlainText = (
  prop: any,
  expectedType: string
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
            f.external?.url || f.file?.url || ""
        )
        .filter(Boolean) as string[])
    : [];
