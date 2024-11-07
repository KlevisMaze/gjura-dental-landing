import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Import specific icons

function ContactForm() {
  return (
    <section className="px-8 py-12 bg-gray-800">
      <h2 className="text-2xl font-semibold text-cyan-400 text-center">
        Contact Us
      </h2>
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Contact Form Section (Left) */}

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-400 text-center">
            Contact Form
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-300">Message</label>
              <textarea className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300"></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map and Clinic Info Section (Right) */}
        <div className="flex-1">
          <h4 className="text-2xl font-semibold text-cyan-400 text-center">
            Direction
          </h4>
          {/* Google Map or Static Image */}
          <div className="h-64 bg-gray-500 rounded-md mb-4">
            {/* Replace with actual map */}
            <p className="text-center text-white pt-24">Map Section</p>
          </div>

          {/* Clinic Contact Info */}
          <div className="text-center text-gray-300">
            <h3 className="text-xl font-semibold text-cyan-400">Our Clinic</h3>
            {/* <p>Teodor Keko Pallati Eglis, Tirana 1061, Albania</p>
            <p>Phone: +355 69 664 6230</p>
            <p>Email: info@gjuradentalcom</p>
            <p>Hours: Mon - Fri: 9 AM - 6 PM</p> */}
            <p className="flex items-center mt-4">
              <FaPhone className="mr-2 text-cyan-400" />
              Call Us: +355 69 664 6230
            </p>
            <p className="flex items-center mt-4">
              <FaEnvelope className="mr-2 text-cyan-400" />
              Email: info@gjuradentalcom
            </p>
            <p className="flex items-center mt-4">
              <FaMapMarkerAlt className="mr-2 text-cyan-400" />
              Address: Rruga Teodor Keko Pallati Eglis, Tirana 1061, Albania
            </p>
            <p className="flex items-center mt-4">
              <FaClock className="mr-2 text-cyan-400" />
              Hours: Mon - Fri: 9 AM - 6 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
