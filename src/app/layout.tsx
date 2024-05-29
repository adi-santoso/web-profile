import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADI SANTOSO",
  description: "PROFILE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <AppRouterCacheProvider>
      <body className={inter.className} style={{overflowY:'hidden'}}>{children}</body>
    </AppRouterCacheProvider>
    </html>
  );
}
