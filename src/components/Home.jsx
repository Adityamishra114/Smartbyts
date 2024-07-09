import React from "react";
import HomeSection from "./HomeSection";
import AboutUs from "./AboutUs";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div>
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
