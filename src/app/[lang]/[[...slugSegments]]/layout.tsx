import type { Metadata } from "next";

import "./globals.css";

import { DEFAULT_LOCALE } from "@/constants";

export type AppRouterParams = {
  lang: string;
  slugSegments: string[];
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  params,
  children,
}: {
  params: AppRouterParams;
  children: React.ReactNode;
}) => {
  return (
    <html lang={params.lang ?? DEFAULT_LOCALE}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
