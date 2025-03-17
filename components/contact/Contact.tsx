"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { PropagateLoader } from 'react-spinners';
import { toast } from "react-toastify";
import ContactOne from "./ContactOne";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <section
      id="contact-us"
      className=" flex flex-col w-full  py-5 items-center justify-center lg:px-[119px] gap-[82px] xs:gap-8 pb-3"
    >
      <div className="flex lg:flex-row flex-col">
        <ContactDetails />
        <ContactOne />
      </div>
    </section>
  );
};

export default Contact;
