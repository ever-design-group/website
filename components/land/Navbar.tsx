import Image from "next/image";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants/landnavlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  FaPhone,
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"; // Import all required icons

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  const handleLinkClick = () => {
    setIsClicked(false);
  };
  const handleWhatsAppClick = () => {
    const phoneNumber = "+250788846668";
    const message = "Hello, I'd like more information!";
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <section
      className={`${
        scrolled ? "drop-shadow" : ""
      } w-screen sm:h-[80px] flex lg:px-[119px] items-center justify-between bg-primary fixed bgpr z-50 px-6 xs:h-[90px]`}
    >
      <Link href="/" onClick={handleLinkClick}>
        <Image
          src="/icons/logo2.svg"
          alt="Logo"
          width={118.5}
          height={52}
          className=""
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="md:flex sm:gap-4 text-sm text-white font-light items-center hidden md:block gap-5">
        {navLinks.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.label}
              onClick={handleLinkClick}
              className={clsx(
                `group hover:text-primary-2 hover:text-secondary flex items-center gap-2`,
                {
                  "text-primary-2": isActive,
                }
              )}
            >
              {/* Add icons for navigation links */}
              {item.label === "Home" && <FaHome className="text-lg" />}
              {item.label === "About" && <FaUser className="text-lg" />}
              {item.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-2"></span>
            </Link>
          );
        })}

        {/* Phone Number with Icon */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-lg" />
          <span>+250785035071</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/everdesigngroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/ever-design1/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-lg hover:text-blue-700 transition duration-300" />
          </a>
          <a href="https://x.com/everdesigngroup" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="text-lg hover:text-blue-700 transition duration-300" />
          </a>
             <a href="" target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
               <FontAwesomeIcon icon={faWhatsapp} className="text-lg hover:text-blue-700 transition duration-300" />
                </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center flex-row-reverse md:hidden ">
        <button
          className="inline-flex items-center justify-center p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-inset"
          onClick={handleToggle}
          aria-label="Toggle menu"
          aria-expanded={isClicked}
        >
          {isClicked ? (
            <FaTimes className="h-6 w-6" /> // Close icon
          ) : (
            <FaBars className="h-6 w-6" /> // Hamburger icon
          )}
        </button>

        {/* Mobile Menu */}
        {isClicked && (
          <div className="absolute z-20 flex flex-col sm:hidden px-10 py-10 bg-primary text-white right-0 top-[57px] rounded-l-lg w-full items-center transition-all duration-300 ease-in-out navbar">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={handleLinkClick}
                  className={clsx(
                    `group hover:text-primary-2 text-[18px] font-bold flex items-center gap-2`,
                    {
                      "text-primary-2": isActive,
                    }
                  )}
                >
                  {/* Add icons for mobile navigation links */}
                  {item.label === "Home" && <FaHome className="text-lg" />}
                  {item.label === "About" && <FaUser className="text-lg" />}
                  {item.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-2"></span>
                </Link>
              );
            })}

            {/* Phone Number in Mobile Menu */}
            <div className="flex items-center gap-2 mt-4">
              <FaPhone className="text-lg" />
              <span>+250 788 846 668</span>
            </div>

            {/* Social Media Icons in Mobile Menu */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.instagram.com/everdesigngroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-red-500 transition duration-3000" />
               </a>
              <a href="https://www.linkedin.com/company/ever-design1/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg hover:text-red-500 transition duration-300" />
              </a>
              <a href="https://x.com/everdesigngroup" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="text-lg hover:text-red-500 transition duration-300" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
               <FontAwesomeIcon icon={faWhatsapp} className="text-lg hover:text-blue-700 transition duration-300" />
                </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;