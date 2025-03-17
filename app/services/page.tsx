"use client";

import Top from '@/components/services/servicetop';
import React, { useEffect } from 'react';
import Services from '@/components/services/Services';
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
     <Services />
    </main>
  );
};

export default Page;