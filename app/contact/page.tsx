"use client";

import ContactTop from '@/components/contact/ContactTop';
import React, { useEffect } from 'react';
import Contact from '@/components/contact/Contact';
import Link from 'next/link'; // Import the Link component

const Page = () => {
  // useEffect(() => {
  //   // Initialize AOS (Animate On Scroll)
  //   import("aos").then((AOS) => {
  //     AOS.init({ duration: 1000 });
  //   });
  // }, []);

  return (
    <main className="">
     <ContactTop />
     <Contact />
    </main>
  );
};

export default Page;