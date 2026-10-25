type Localizable = { en?: object };

// 영어를 선택했고 `en` 에 값이 있으면 해당 필드만 덮어쓴다. 없으면 한국어 원문 그대로.
// `details` 처럼 중첩 객체는 한 단계까지 병합한다.
export function localize<T extends Localizable>(item: T, lang: "ko" | "en"): T {
  if (lang !== "en" || !item.en) return item;
  const merged: Record<string, unknown> = { ...item };
  for (const [key, value] of Object.entries(item.en)) {
    const base = merged[key];
    const isObject = (v: unknown) =>
      typeof v === "object" && v !== null && !Array.isArray(v);
    merged[key] =
      isObject(base) && isObject(value)
        ? { ...(base as object), ...(value as object) }
        : value;
  }
  return merged as T;
}
