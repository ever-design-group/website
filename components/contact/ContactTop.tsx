import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ContactTop = () => { // Ensure the component name starts with an uppercase letter
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section
      id="about-us"
      data-aos="fade"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      className="min-h-screen w-screen flex items-center justify-center bg-gray-800" // Added background color
    >
      {/* About Section with Overlay Text */}
      <div className="about relative w-full h-full">
        <h1 className="text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Contact us
        </h1>
      </div>
    </section>
  );
};

export default ContactTop; // Ensure the export matches the component name