"use client";
import About  from '@/components/aboutus/About';
import Team from '@/components/aboutus/team';
import Meet from '@/components/aboutus/Meet'
import Values from '@/components/aboutus/Values'
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

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
      <About />
      <Team />
      <Meet />
      <Values />
    </main>
  );
};

export default Page;