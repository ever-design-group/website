import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google';

const outfit =  Outfit({ subsets: ['latin'] });

export const metadata = {
  icons:{
    icon:"/icons/logo2.svg",
    apple:"/icons/logo2.svg"
  },
  title: 'www.EverdesignGroup.rw ',
  description: 'Find your dream rental/sale property',
  keywords: 'rental, find rentals, find properties',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${outfit.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
