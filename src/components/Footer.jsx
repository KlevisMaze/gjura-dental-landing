import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-dark text-primary p-4 text-center md:p-6">
      <div className="container mx-auto">
        <p className="mb-1">
          &copy; 2024 Gjura Dental Clinic. All rights reserved.
        </p>{" "}
        {/* Added margin-bottom to space out the link */}
        <h3>
          <Link
            to="/privacy-policy"
            className="text-cyan-400 hover:text-cyan-500"
          >
            Privacy Policy
          </Link>{" "}
          {/* Added link and hover effect */}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
