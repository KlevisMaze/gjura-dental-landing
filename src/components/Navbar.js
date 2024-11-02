import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 shadow-md">
      <img src={logo} alt="Logo" className="w-32 mb-4 relative z-10" />
      <div className="space-x-6">
        <Link
          to="/"
          className="text-white hover:bg-gray-800 hover:text-white py-2 px-4 rounded transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:bg-gray-800 hover:text-white py-2 px-4 rounded transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:bg-gray-800 hover:text-white py-2 px-4 rounded transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
