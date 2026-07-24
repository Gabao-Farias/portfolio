import { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutContext from "./layoutContext";

const inter = Inter({ subsets: ["latin"] });

const SITE_TITLE =
  "Gabriel Taborda Farias | Full-Stack Developer — React, React Native & TypeScript";
const SITE_DESCRIPTION =
  "Frontend-focused full-stack developer specializing in React, React Native, and TypeScript, with backend experience in Node.js, NestJS, Vue, and Python. Fintech-focused, remote, open to US & EU contract roles.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://gabao-farias.github.io/portfolio/"),
  keywords: [
    "Gabriel Taborda Farias",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Full-Stack Developer",
    "Frontend Developer",
    "Fintech",
    "Remote developer",
  ],
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    url: "/",
    images: "/opengraph-image.png",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    images: "/twitter-image.png",
    description: SITE_DESCRIPTION,
    site: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContext>{children}</LayoutContext>
      </body>
    </html>
  );
}
