import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Emmanuella Linktree Tutorial",
  description: "This is the linktree clone tutorial",
  ogImage:
    "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        {children}
      </body>
    </html>
  );
}
