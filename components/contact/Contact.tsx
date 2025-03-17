import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS

const  ContactTop = () => {
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
          Contact us
        </h1>
      </div>

      </section>
  );
};

export default  ContactTop;