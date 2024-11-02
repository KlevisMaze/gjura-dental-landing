import React from "react";

function ContactForm() {
  return (
    <section className="px-8 py-12 bg-gray-800">
      <h2 className="text-2xl font-semibold text-cyan-400 text-center">Contact Us</h2>
      <form className="max-w-md mx-auto mt-8 space-y-4">
        <div>
          <label className="block text-gray-300">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300" />
        </div>
        <div>
          <label className="block text-gray-300">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300" />
        </div>
        <div>
          <label className="block text-gray-300">Message</label>
          <textarea className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300"></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
