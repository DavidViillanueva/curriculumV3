import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Villanueva David",
  description: "Curriculum vitae",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}
