import React from "react";
import clinicImage from "../images/clinicimage.jpg";

function Hero() {
  return (
    <section
      className="flex flex-col items-center py-24 relative"
      style={{
        backgroundImage: `url(${clinicImage})`, // Change to your clinic photo path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      <h1 className="text-3xl text-cyan-400 font-bold relative z-10">
        Welcome to Gjura Dental Clinic
      </h1>
      <p className="text-gray-300 mt-2 relative z-10">
        Your Smile, Our Commitment
      </p>
    </section>
  );
}

export default Hero;
