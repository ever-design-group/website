"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import { FaUserTie, FaLightbulb, FaAward ,FaBriefcase ,FaStar } from 'react-icons/fa'; 
import "aos/dist/aos.css"; // Import AOS CSS

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);
  return (
    <section className="min-h-screen w-screen pt-10 lg:py-[50px] flex flex-col items-center justify-center  lg:px-[50px] mb-[100px] px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">OUR VALUES</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professionalism */}
          <div className="text-center card">
            <div className="flex justify-center">
              <FaUserTie className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
            <p className="text-gray-600">
              This is about our corporate responsibility as well as our commitment to our clients.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center card">
            <div className="flex justify-center">
              <FaLightbulb className="text-4xl text-green-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              This is about our corporate responsibility as well as our commitment to our clients.
            </p>
          </div>

          {/* Excellence */}
          <div className="text-center card">
            <div className="flex justify-center">
              <FaStar  className="text-4xl text-yellow-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Our combination of being well experienced and hands-on expertise results in quality work.
            </p>
          </div>
               {/* Professionalism */}
          <div className="text-center card" >
            <div className="flex justify-center">
              <FaBriefcase className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
            <p className="text-gray-600">
              Our strong passion is to impact the architectural and construction scene in Kigali.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center card" >
            <div className="flex justify-center">
              <FaLightbulb className="text-4xl text-green-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              The greatest value of Ever Design is our people. With our strong team, we can handle any project.
            </p>
          </div>

          {/* Excellence */}
          <div className="text-center card">
            <div className="flex justify-center">
              <FaAward className="text-4xl text-yellow-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              To keep project management clear and simple, we developed a 7-point way of working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;