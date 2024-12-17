import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "../Navbar/nav";
import Nav2 from "../Navbar/nav2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-6 bg-pink-600 md:bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <p className="text-lg font-semibold text-white">
            Kingsukh Guest House
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between">
          <Nav />
        </div>

        {/* Button Section */}
        <div className="hidden md:block">
          <a
            href="https://www.apple.com"
            className="bg-pink-600 text-white px-7 py-3 rounded-xl hover:bg-pink-800"
          >
            BOOK
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggle} aria-label="Toggle Menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden mt- -m-0 overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Nav2 />
      </div>
    </div>
  );
};

export default Navbar;