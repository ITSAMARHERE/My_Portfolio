import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Amar Pal | Software Developer",
  description:
    "Software developer specializing in Next.js, TypeScript and Node.js.",
  openGraph: {
    title: "Amar Pal | Software Developer",
    description:
      "Software developer specializing in Next.js, TypeScript, and Node.js. Experienced in building scalable, high-performance applications.",
    url: "https://amarpalportfolio-blue.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://amarpalportfolio-blue.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Amar Pal | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    { name: "Amar Pal", url: "https://amarpalportfolio-blue.vercel.app/" },
  ],
  keywords: [
    "Amar Pal",
    "Software Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "GCP",
    "MongoDB",
    "Supabase",
    "Tailwind CSS",
    "Web Development",
  ],
  creator: "Amar Pal",
  publisher: "Amar Pal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
