import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logoLight from "../images/smart1.png";
import logoDark from "../images/Smartbyts1.png";

const NavigationBar = () => {
  const [menu, setMenu] = useState("home");
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

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      scroll.scrollTo(hash);
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ${
        isScrolled ? "bg-white shadow-lg top-0" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                onClick={() => setMenu("home")}
                className="h-24 mt-4"
                src={isScrolled ? logoDark : logoLight}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/#home"
                onClick={() => setMenu("home")}
                className={`${
                  menu === "home" ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Home
              </Link>
              <Link
                to="/#about"
                onClick={() => setMenu("about")}
                className={`${
                  menu === "about" ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                About
              </Link>
              <Link
                to="/#services"
                onClick={() => setMenu("services")}
                className={`${
                  menu === "services" ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Services
              </Link>
              <Link
                to="/#contact"
                onClick={() => setMenu("contact")}
                className={`${
                  menu === "contact" ? "text-gray-700" : "text-black"
                } hover:text-gray-700 px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
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
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/#home"
                onClick={() => {
                  setMenu("home");
                  toggleMobileMenu();
                }}
                className={`${
                  menu === "home" ? "text-gray-700" : "text-black"
                } block px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Home
              </Link>
              <Link
                to="/#about"
                onClick={() => {
                  setMenu("about");
                  toggleMobileMenu();
                }}
                className={`${
                  menu === "about" ? "text-gray-700" : "text-black"
                } block px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                About
              </Link>
              <Link
                to="/#services"
                onClick={() => {
                  setMenu("services");
                  toggleMobileMenu();
                }}
                className={`${
                  menu === "services" ? "text-gray-700" : "text-black"
                } block px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Services
              </Link>
              <Link
                to="/#contact"
                onClick={() => {
                  setMenu("contact");
                  toggleMobileMenu();
                }}
                className={`${
                  menu === "contact" ? "text-gray-700" : "text-black"
                } block px-3 py-2 rounded-md text-xl no-underline font-bold cursor-pointer`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
