"use client";

import Service from '@/components/services/Service';
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
     <Service />
     <Services />
    </main>
  );
};

export default Page;