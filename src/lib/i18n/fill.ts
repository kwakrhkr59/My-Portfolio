// "{n}명" 같은 템플릿의 {n} 을 숫자로 채운다.
export const fill = (template: string, n: number) =>
  template.replace("{n}", String(n));
