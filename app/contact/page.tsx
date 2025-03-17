"use client";

import Top from '@/components/contact/ContactTop';
import React, { useEffect } from 'react';
import ContactUsPage from '@/components/contact/ContactUs';
import Link from 'next/link'; // Import the Link component

const Page = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);

  return (
    <main className="">
     <Top />
     <ContactUsPage />
    </main>
  );
};

export default Page;