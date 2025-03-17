import Image from "next/image";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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

  return (
    <section
      className={`${
        scrolled ? "drop-shadow" : ""
      } w-screen  flex lg:px-[119px] items-center justify-between bg-primary fixed bgpr z-50 px-6 xs:h-[90px]`}
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
                `group hover:text-primary-2 hover:text-secondary`,
                {
                  "text-primary-2": isActive,
                }
              )}
            >
              {item.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-2"></span>
            </Link>
          );
        })}
        <div className="ml-9 flex gap-3">
          <button className="py-1 px-2 my-6 text-white border rounded-md border-white hover:opacity-60 text-sm font-semibold">
            <Link href="https://arch.everdesigngroup.rw//">Real Estate</Link>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="flex items-center flex-row-reverse md:hidden">
        <button
          className="inline-flex items-center justify-center p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-inset"
          onClick={handleToggle}
          aria-label="Toggle menu"
          aria-expanded={isClicked}
        >
          {isClicked ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
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
                    `group hover:text-primary-2 text-[22px] font-bold`,
                    {
                      "text-primary-2": isActive,
                    }
                  )}
                >
                  {item.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-2"></span>
                </Link>
              );
            })}
           <div className="ml-9 flex gap-3 mt-2">
          <button className="py-2 px-6 text-white border rounded-md border-white hover:opacity-60 text-sm font-semibold">
            <Link href="https://arch.everdesigngroup.rw/">Real Estate</Link>
          </button>
        </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;