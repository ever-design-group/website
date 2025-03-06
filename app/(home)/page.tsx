"use client";
import Team from '@/components/aboutus/team';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);

  return (
    <main className="">
      <Team />
    </main>
  );
};

export default Page;