import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <section
      id="about-us"
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      className="min-h-screen w-screen flex flex-col md:flex-row items-center justify-center gap-8 lg:px-10 px-4 py-10 bg-gray-50"
    >
      {/* Image Section */}
      <div className="w-full max-w-[1000px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/office.jpg"
          alt="Office Image"
          layout="responsive"
          width={1000}
          height={1500}
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-[600px] flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-base text-slate-500 uppercase tracking-widest">
            About Us
          </h1>
          <h1 className="text-4xl font-bold text-gray-800">
            We are one of the largest construction companies
          </h1>
        </div>
        <p className="text-lg text-slate-500 leading-relaxed">
          Ever Design Group is a leading architectural and investment firm in
          Rwanda, known for its innovative design and strategic expansion into
          the hospitality sector. The company excels in offering comprehensive
          solutions, including design, construction, and management of villa
          projects, catering to both residential and commercial clients.
        </p>
        <button className="bg-secondary py-3 px-12 text-white rounded-xl hover:opacity-80 transition-opacity duration-300 text-sm font-semibold">
          <Link href="#contact-us">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;