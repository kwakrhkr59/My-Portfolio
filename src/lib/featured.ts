// 홈에는 Notion 에서 Featured 를 체크한 항목만 Order 순서대로 보여 준다.
export const featuredList = <T extends { featured: boolean; order: number }>(
  items: T[],
): T[] => items.filter((i) => i.featured).sort((a, b) => a.order - b.order);
