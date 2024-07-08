import React from "react";
import AboutUs from "./components/AboutUs.jsx";
import Header from "./components/Header.jsx";
import HomeSection from "./components/HomeSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <HomeSection />
        <AboutUs />
        <ServicesSection />
        <ContactSection />
        <Footer/>
      </div>
    </>
  );
};

export default App;
