// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Doctor from "../components/Doctor";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Doctor />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
