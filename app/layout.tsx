import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { identity, hero } from "@/lib/portfolio-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${identity.displayName} | Full-Stack and DevOps Portfolio`,
  description: hero.pitch,
  authors: [{ name: identity.displayName }],
  creator: identity.displayName,
  openGraph: {
    title: `${identity.displayName} | Portfolio`,
    description: hero.pitch,
    type: "website",
    images: [
      {
        url: identity.avatar,
        width: 460,
        height: 460,
        alt: `${identity.displayName} GitHub avatar`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#171b24" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.displayName,
    email: identity.email,
    url: identity.github,
    sameAs: [identity.github, identity.linkedin],
    jobTitle: identity.role,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
