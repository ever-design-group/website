import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      className="w-screen px-2 items-center flex-1 bg-primary xs:flex-col-reverse"
    >
      {/* First Section */}
      <div className="w-screen flex flex-col md:flex-row items-center justify-center flex-1 xs:flex-col-reverse text-white py-10">
        <div className="flex flex-col gap-6 items-start max-w-[600px] mx-6">
          <h1 className="text-4xl font-bold">Theophile IYAMUREMYE</h1>
          <p className="text-lg">
            Growing up with a father who worked in construction, I used to spend all my free time on project sites watching him interpret ideas from start to finish. It motivated me to pursue an architecture career.
          </p>
        </div>
        <div className="flex xs:flex-col w-full max-w-[600px]">
          <Image
            src="/images/img3.svg"
            alt="About Us Image"
            layout="responsive"
            width={1000}
            height={1500}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-screen flex md:flex-row items-center justify-center flex-1 xs:flex-col-reverse text-white py-10">
        <div className="flex xs:flex-col w-full max-w-[600px]">
          <Image
            src="/images/img3.svg"
            alt="About Us Image"
            layout="responsive"
            width={1000}
            height={1500}
          />
        </div>
        <div className="flex flex-col gap-2 items-start max-w-[600px] mx-6">
          <h1 className="text-4xl font-bold">How we started</h1>
          <p className="text-lg">
            After graduating college, I made a big step by opening my own architectural firm, Ever Design. With the help of my team members, we are now a fast-growing company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;