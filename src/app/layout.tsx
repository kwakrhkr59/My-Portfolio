import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
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
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            {/* <ThemeToggleButton /> */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
