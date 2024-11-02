import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-8 py-6 bg-gray-900 text-center text-gray-500">
      <p>&copy; 2024 Gjura Dental Clinic. All rights reserved.</p>
      <p className="mt-4">
        <Link to="/privacy-policy" target="_blank" className="text-cyan-400">Privacy Policy</Link>
      </p>
    </footer>
  );
}

export default Footer;
