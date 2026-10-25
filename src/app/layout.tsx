import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "곽현정 | AI & 풀스택 개발자",
    template: "%s | 곽현정",
  },
  description: "AI 및 풀스택 개발자 곽현정의 웹사이트입니다.",
  openGraph: {
    title: "곽현정 | AI & 풀스택 개발자",
    description: "AI 및 풀스택 개발자 곽현정의 웹사이트입니다.",
    siteName: "곽현정",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
