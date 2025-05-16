import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { MyThemeProvider } from "@/context/ThemeProvider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Jane Developer | Software Engineer",
  description:
    "Professional portfolio of Jane Developer, a Full Stack Software Engineer specializing in modern web technologies.",
  keywords: [
    "software engineer",
    "web developer",
    "full stack",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Jane Developer" }],
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <NextIntlClientProvider>
            <MyThemeProvider>
              <CssBaseline />
              {children}
            </MyThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
