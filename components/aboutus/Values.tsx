"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { FaUserTie, FaLightbulb, FaAward, FaBriefcase, FaStar } from 'react-icons/fa';
import "aos/dist/aos.css"; // Import AOS CSS

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <section className="min-h-screen w-screen pt-10 lg:py-[50px] flex flex-col items-center justify-center lg:px-[50px] mb-[100px] px-4 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-down">
          OUR VALUES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professionalism */}
          <div
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center">
              <FaUserTie className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
            <p className="text-gray-600">
              This is about our corporate responsibility as well as our commitment to our clients.
            </p>
          </div>

          {/* Innovation */}
          <div
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center">
              <FaLightbulb className="text-4xl text-green-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and cutting-edge solutions to deliver exceptional results.
            </p>
          </div>

          {/* Excellence */}
          <div
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center">
              <FaStar className="text-4xl text-yellow-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Our combination of experience and hands-on expertise ensures quality work.
            </p>
          </div>

          {/* Passion */}
          <div
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex justify-center">
              <FaBriefcase className="text-4xl text-blue-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-600">
              Our strong passion drives us to impact the architectural and construction scene.
            </p>
          </div>

          {/* Teamwork */}
          <div
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex justify-center">
              <FaLightbulb className="text-4xl text-green-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
            <p className="text-gray-600">
              With our strong team, we can handle any project with precision and collaboration.
            </p>
          </div>

          {/* Integrity */}
          <div
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex justify-center">
              <FaAward className="text-4xl text-yellow-500 mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We maintain transparency and honesty in all our dealings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;