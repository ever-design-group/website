"use client";

import ContactTop from "@/components/contact/ContactTop"; 

import React from 'react';
import ContactUsPage from '@/components/contact/ContactUs';
import Link from 'next/link'; // Import the Link component

const Page = () => {

  return (
    <main className="">
     < ContactTop />
     <ContactUsPage />
    </main>
  );
};

export default Page;