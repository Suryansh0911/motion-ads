import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motion | Advertiser workspace",
  description: "Plan and manage mobile outdoor advertising campaigns in Pune. Browser-local React demo.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
