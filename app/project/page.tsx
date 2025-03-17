"use client";

import Project from '@/components/projects/Project';
import React, { useEffect } from 'react';
import Projects from '@/components/projects/Projects';
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
     <Project />
     <Projects />
    </main>
  );
};

export default Page;