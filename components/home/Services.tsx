"use client";
import { services } from "@/constants/cardsData";
import Image from "next/image";
import Link from "next/link";
import React from "react"; // Removed useEffect since AOS is not used
import ServicesCard from "../ui/ServicesCard";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen w-screen pt-10 lg:py-[50px] flex flex-col items-center justify-center bg-primary lg:px-[50px] mb-[100px] px-4"
    >
      {/* Section Title */}
      <h1 className="text-lg text-secondary py-12"> Our Services</h1>
      <h1 className="font-bold mb-[20px] text-4xl text-white">
        Providing quality services
      </h1>

      {/* Service Cards Grid */}
      <div className="sm:grid sm:grid-cols-3 gap-5 flex flex-col max-w-[1440px]">
        {services.map((service: any, i: number) => (
          <ServicesCard
            img={service.img}
            title={service.title}
            description={service.description}
            link={service.link}
            count={i}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;