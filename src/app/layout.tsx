import { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutContext from "./layoutContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabão | Portfolio",
  description: "Gabão's Portfolio.",
  metadataBase: new URL("https://gabao-farias.github.io/portfolio/"),
  openGraph: {
    type: "website",
    title: "Gabão's Portfolio",
    url: "/",
    images: "/opengraph-image.png",
    description: "Gabão's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabão's Portfolio",
    images: "/twitter-image.png",
    description: "Gabão's Portfolio",
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
