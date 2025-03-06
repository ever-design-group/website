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
      className="w-screen items-center flex-1  xs:flex-col-reverse"
    >
         <div className="flex xs:flex-col w-full">
                  <Image
                    src="/images/Meet.jpg"
                    alt="About Us Image"
                    layout="responsive"
                    width={1000}
                    height={1500}
                  />
                </div>
    
    </section>
  );
};

export default Team;