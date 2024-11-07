import React, { useState } from "react";
import logo from "../images/logo.jpg"; // Update the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark text-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Gjura Dental Clinic Logo"
            className="w-16 h-16 mr-2" // Adjust width and height as needed
          />
          <h1 className="text-2xl font-bold text-secondary">
            Gjura Dental Clinic
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0`}
        >
          <li className="hover:text-xl">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-xl">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-xl">
            <a href="#contactform">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
