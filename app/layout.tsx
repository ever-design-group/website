import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Construction and Architecture Company in Rwanda | Ever Design Group",
  description:
    "Ever Design Group is a top construction and architecture company in Rwanda,construction services Rwanda,building contractors Kigali,project management construction,commercial building contractors, offering modern building design, engineering, and green construction solutions g,first construction in kigaliEver Design Group Rwanda,construction company Rwanda,architectural firm Rwanda,construction company Kigali,architect Kigali,builders Kigali,building contractors Kigali,architectural design services Rwanda,residential construction Kigali,commercial building contractors Kigali,project management construction Rwanda,engineering services Rwanda,home design and construction Kigali,villa construction Rwanda,modern building design Kigali,renovation contractor Rwanda,interior design Kigali,sustainable construction Rwanda,green construction solutions Kigali,eco friendly builders Rwanda,high-quality building materials Rwanda,innovative architectural design Rwanda,turnkey construction services Kigali,construction companies near me,contractors near me Kigali,builders in Kigali,local architect Rwanda,best construction company Kigali,trusted contractors Rwanda,reliable builders Kigali,affordable construction services Rwanda,how to find a good contractor in Kigali,cost to build a house in Rwanda,green building techniques for commercial spaces Rwanda,affordable home builders Kigali,modern house plans Rwanda,best architecture firms for residential projects in Kigali",
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
          content="construction company Rwanda,top construction company in rwanda,first construction company in rwanda, fair contruction company, NPD contruction company , fair construction,horizon construction,epos company , construction company in kigali ,architecture Rwanda, green building Rwanda, modern architecture Kigali, Ever Design Group, affordable housing Rwanda, sustainable buildings Rwanda, interior design Rwanda, best builders Rwanda"
        />
        {/* ✅ Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1B8Q9RRT0K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1B8Q9RRT0K');
          `}
        </Script>
      </head>
      <body className={`${outfit.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
