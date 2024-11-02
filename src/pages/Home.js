import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Doctor from "../components/Doctor";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Doctor />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
