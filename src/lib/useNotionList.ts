"use client";

import { useEffect, useState } from "react";

// 홈 섹션처럼 클라이언트에서 Notion API 라우트를 불러오는 경우 쓰는 공통 훅.
export function useNotionList<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`${endpoint} ${res.status}`);
        return res.json();
      })
      .then((json) => !cancelled && setData(json))
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError(true);
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return { data, loading, error };
}
