import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper"; // 새로 만든 컴포넌트 임포트
import { ReactNode } from "react";

export const metadata = {
  title: "개발자 포트폴리오 | 곽현정",
  description: "AI 및 풀스택 개발자 곽현정의 웹사이트입니다.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
        <ThemeProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
