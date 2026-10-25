const EN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatMonth = (iso: string, lang: "ko" | "en") => {
  const [year, month] = iso.split("-");
  return lang === "en"
    ? `${EN_MONTHS[Number(month) - 1]} ${year}`
    : `${year}.${month}`;
};

// 기간은 월 단위까지만 보여 준다. 시작일이 없으면 Notion 의 Period 텍스트를 그대로 쓴다.
// 종료일이 비어 있으면 진행 중으로 본다.
export function formatPeriod(
  start: string | null | undefined,
  end: string | null | undefined,
  lang: "ko" | "en",
  fallback = "",
): string {
  if (!start) return fallback;
  const to = end ? formatMonth(end, lang) : lang === "en" ? "Present" : "현재";
  return lang === "en"
    ? `${formatMonth(start, lang)} – ${to}`
    : `${formatMonth(start, lang)} ~ ${to}`;
}
