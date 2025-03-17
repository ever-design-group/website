"use client";

import Top from '@/components/projects/project';
import React, { useEffect } from 'react';
import Projects from '@/components/projects/Projects';
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
     <Projects />
    </main>
  );
};

export default Page;