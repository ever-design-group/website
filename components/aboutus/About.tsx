import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section
      id="about-us"
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      className="min-h-screen w-screen md:flex-row items-center flex-1 gap-[5px] xs:flex-col-reverse"
    >
      {/* About Section with Overlay Text */}
      <div className="about relative">
        <h1 className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          About Our Company
        </h1>
      </div>

      {/* Content Section */}
      <div className="lg:px-[10px] min-h-screen w-screen flex flex-col md:flex-row items-center justify-center flex-1 gap-[5px] xs:flex-col-reverse">
        <div className="max-w-[600px] flex flex-col gap-6 items-start mx-6 px-10">
          <div className="back">
            <h1 className="text-base text-slate-500">WELCOME TO EVERDESIGN GROUP</h1>
            <h1 className="text-4xl font-bold">We are one of the largest construction company</h1>
          </div>

          <p className="text-4 text-slate-500">
          Ever Design Group is a leading architectural and investment firm in Rwanda,  known for its innovative design and strategic expansion into the hospitEver Design is an architectural firm with a diverse portfolio of work in and around Kigali, with a focus on residential housing. Our creative team are problem solvers in all phases of our clients' projects.ality sector.  The company excels in offering comprehensive solutions, including design,  construction, and management of villa projects, catering to both residential  and commercial clients.
          </p>
          <Link href="#contact-u" passHref>
            <button className="bg-secondary py-3 px-12 text-white rounded-xl hover:opacity-60 text-sm font-semibold">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex xs:flex-col w-full max-w-[600px]">
          <Image
            src="/images/aboutc.jpg"
            alt="About Us Image"
            layout="responsive"
            width={1000}
            height={1500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;