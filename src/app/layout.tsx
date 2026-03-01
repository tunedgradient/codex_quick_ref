import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codexquickref.vercel.app";

const metadataDescription =
  "Codex app quick reference covering shortcuts, Local/Worktree/Cloud modes, review workflow, automations, troubleshooting, and print-friendly usage tips.";

export const metadata: Metadata = {
  title: "Codex App Quick Reference",
  description: metadataDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Codex App Quick Reference",
    description: metadataDescription,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/codex-quick-reference-og-cover-x.png",
        width: 1200,
        height: 630,
        alt: "Codex quick reference guide cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex App Quick Reference",
    description: metadataDescription,
    images: ["/codex-quick-reference-og-cover-x.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
