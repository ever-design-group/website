import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Construction and Architecture Company in Rwanda | Ever Design Group",
  description:
    "Ever Design Group is a top construction and architecture company in Rwanda, offering modern building design, engineering, and green construction solutions.",
  authors: [{ name: "Ever Design Group" }],
  icons: {
    icon: "/icons/logo2.svg",
    apple: "/icons/logo2.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="construction company Rwanda, architecture Rwanda, green building Rwanda, modern architecture Kigali, Ever Design Group, affordable housing Rwanda, sustainable buildings Rwanda, interior design Rwanda, best builders Rwanda"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MEQHFREZXP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEQHFREZXP');
          `}
        </Script>
      </head>
      <body className={`${outfit.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
