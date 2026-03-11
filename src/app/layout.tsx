import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Fresh Studio | Marketing i dizajn agencija - Garantirani rezultati",
  description:
    "Marketing i dizajn agencija koja jamči rezultate. Više rasta, više prometa, više klijenata. 100% jamstvo povrata novca u prvih 90 dana.",
  keywords: [
    "marketing agencija",
    "digitalni marketing",
    "web dizajn",
    "SEO",
    "Hrvatska",
    "Koprivnica",
    "Fresh Studio",
  ],
  authors: [{ name: "Fresh Studio" }],
  openGraph: {
    title: "Fresh Studio | Marketing i dizajn agencija",
    description:
      "Marketing usmjeren na prodaju, ne na nagrade. Garantirani rezultati ili vraćamo novac.",
    url: "https://freshstudio.hr",
    siteName: "Fresh Studio",
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Studio | Marketing i dizajn agencija",
    description:
      "Marketing usmjeren na prodaju, ne na nagrade. Garantirani rezultati ili vraćamo novac.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://freshstudio.hr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
