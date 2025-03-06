import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaTools, FaBuilding, FaUmbrellaBeach, FaHotel } from "react-icons/fa";

const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS
//   }, []);

  return (
    <section
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      className="min-h-screen w-screen flex items-center justify-center bg-primary "
    >
      {/* Welcome Section */}
      <div className="slides min-h-screen flex flex-col md:flex-row max-w-[600px] items-center justify-center flex-1 xs:flex-col-reverse text-white py-10">
        <div className="flex flex-col gap-6 items-start mx-6">
          <h1 className="text-lg">Welcome to Everdesign</h1>
          <p className="text-4xl font-bold">
            EVERDESIGN GROUP 
          </p>
        </div>
      </div>

 {/* Services Section */}
      <div className="services min-h-screen w-screen flex md:flex-row items-center justify-center flex-1 xs:flex-col-reverse text-white py-10 relative overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src="/images/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Content Overlay */}
  

<div className="flex flex-col gap-4 items-start max-w-[600px] ">
  <ul className="space-y-4 w-full">
    {/* Heading with Icon */}
    <li className="flex items-center gap-3 bg-primary p-6 ">
      <FaTools className="text-white text-xl" /> 
      <span>Design & Construction</span>
    </li>

    {/* List Items */}
    <li className="flex items-center gap-3 bg-primary p-4 ">
      <FaBuilding className="text-white text-xl" />
      <span className="text-lg font-semibold text-white">Real Estate</span>
    </li>
    <li className="flex items-center gap-3 bg-primary p-4 ">
      <FaUmbrellaBeach className="text-white text-xl" />
      <span className="text-lg font-semibold text-white">Tourism</span>
    </li>
    <li className="flex items-center gap-3 bg-primary p-4 ">
      <FaHotel className="text-white text-xl" />
      <span className="text-lg font-semibold text-white">Hospitality</span>
    </li>
  </ul>
</div>
</div>
    </section>
  );
};

export default Home;