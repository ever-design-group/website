"use client"; 

import React from "react";
import ContactTop from "@/components/contact/Contact";
import ContactUsPage from "@/components/contact/ContactUs";
import Link from "next/link"; 

const Page = () => {
  return (
    <main>
      <ContactTop /> 
      <ContactUsPage />
    </main>
  );
};

export default Page;
