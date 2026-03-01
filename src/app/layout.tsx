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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "Codex App Quick Reference",
  description:
    "Single-page landscape cheat sheet for Codex app features, commands, settings, and key options.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Codex App Quick Reference",
    description:
      "Single-page landscape cheat sheet for Codex app features, commands, settings, and key options.",
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
    description:
      "Single-page landscape cheat sheet for Codex app features, commands, settings, and key options.",
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
