import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold">Privacy Policy</h2>
        <p className="mt-4 text-sm md:text-base">
          [Your privacy policy content goes here]
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
