import React from "react";
import Slider from "react-slick";
import clinicimage from "../images/clinicimage.jpg";
import drssagjura from "../images/drssagjura.jpg";
import logo from "../images/logo.jpg";

const About = () => {
  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="about" className="bg-secondary text-dark p-6 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          About Our Clinic
        </h2>

        {/* Carousel Section */}
        <div className="my-8">
          <Slider {...settings}>
            <div className="flex justify-center items-center">
              <img
                src={clinicimage}
                alt="Clinic 1"
                className=" flex justify-center items-center w-1/4 h-auto object-contain mx-auto rounded-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={drssagjura}
                alt="Clinic 2"
                className=" flex justify-center items-center w-1/4 h-auto object-contain mx-auto rounded-md"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt="Clinic 3"
                className="flex justify-center items-center w-1/4 h-auto object-contain mx-auto rounded-md"
              />
            </div>
          </Slider>
        </div>

        {/* Description Section */}
        <p className="mt-4 text-sm md:text-base text-center px-4">
          Gjura Dental Clinic is dedicated to providing exceptional dental
          services with a focus on patient care and comfort. Our
          state-of-the-art facilities and experienced team ensure that your oral
          health is in the best hands. We strive to create a relaxing
          environment to make your visits as comfortable and pleasant as
          possible.
        </p>
      </div>
    </section>
  );
};

export default About;
