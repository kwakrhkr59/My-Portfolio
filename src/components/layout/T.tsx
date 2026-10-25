"use client";

import { useLang } from "./LanguageProvider";

// 서버 컴포넌트에서 사전 문구를 쓰기 위한 컴포넌트. 예: <T k="detail.overview" />
export function T({ k }: { k: string }) {
  const { t } = useLang();
  const value = k
    .split(".")
    .reduce<unknown>(
      (acc, key) => (acc as Record<string, unknown> | undefined)?.[key],
      t,
    );
  return <>{typeof value === "string" ? value : k}</>;
}
