import React from "react";
import clinicimage from "../images/clinicimage.jpg";

const Hero = () => {
  return (
    <section
      className="h-[400px] md:h-[500px] flex items-center justify-center px-4 text-center text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${clinicimage})`,
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-60"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Gjura Dental Clinic
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Providing quality dental care with compassion
        </p>
      </div>
    </section>
  );
};

export default Hero;
