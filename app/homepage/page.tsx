"use client";

import AboutUs from '@/components/home/AboutUs';
import Achievements from '@/components/home/Achievements';
import ContactUsPage from '@/components/home/contactUs';
import HeroPage from '@/components/home/HeroPage';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Partners from '@/components/home/Partners';
import Brand from '@/components/home/brand';
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
      <HeroPage />
      <Partners />
      <AboutUs />
      <Services />
      {/* <Achievements /> */}
      <Projects />
      <Brand />
      <ContactUsPage />
    </main>
  );
};

export default Page;