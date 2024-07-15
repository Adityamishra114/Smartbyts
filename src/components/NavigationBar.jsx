import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../images/smart1.png";
import logoDark from "../images/Smartbyts1.png";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const hash = location.hash.replace("/", "");
  //   if (hash) {
  //     scroll.scrollTo(hash);
  //   }
  // }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ${
        isScrolled ? "bg-white shadow-lg top-0" : "bg-transparent"
      }`}
    >
      <div className="container navbar1 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm:h-32 h-24">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-12  logo md:h-24 md:mt-4 sm:h-12 "
                src={isScrolled ? logoDark : logoLight}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${
                  isScrolled ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Home
              </a>
              <a
                href="#about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${
                  isScrolled ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                About
              </a>
              <a
                href="#services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${
                  isScrolled ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Services
              </a>
              <a
                href="#contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`${
                  isScrolled ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Contact
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className=" flex sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {/* Hamburger Icon */}
              <svg
                className={`h-6  w-6 ${
                  isScrolled ? "text-slate-600" : "text-black"
                }`} 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-slate-950 rounded-md">
            {/* Changed background color to slate-400 */}
            <div className=" pt-2 -mt-3 pb-3 space-y-1">
              <a
                href="#home"
                onClick={() => toggleMobileMenu()}
                className="block px-3 py-2 rounded-md text-xl font-bold no-underline text-white hover:text-gray-700"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => toggleMobileMenu()}
                className="block px-3 py-2 rounded-md text-xl text-white font-bold no-underline hover:text-gray-700"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => toggleMobileMenu()}
                className="block px-3 py-2 rounded-md text-white text-xl font-bold no-underline hover:text-gray-700"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => toggleMobileMenu()}
                className="block px-3 py-2 rounded-md text-white text-xl font-bold no-underline hover:text-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
