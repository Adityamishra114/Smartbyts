import React from 'react';
import aboutLogo from "../images/Office1.jpg"
const AboutUs = () => {
  return (
    <section id="about" className="about-area bg-gray-100 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap  items-center">
          <div className="lg:w-1/2 md:w-full sm:w-full">
            <div className="about-image-wrapper">
              <img
                src={aboutLogo} 
                alt="About image"
                className="w-full "
              />
            </div>
          </div>
          <div className="lg:w-1/2 md:w-full sm:w-full mt-6 p-5  lg:mt-0 md:mt-0 sm:mt-0">
            <div className="about-content">
              <div className="about-content-text">
                <h5 className="text-3xl font-medium text-gray-800">Who We Are</h5>
                <h2 className="text-3xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Fast Service at Computer &amp; Phone Repair
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className="text-2xl lg:text-3xl md:text-2xl sm:text-xl font-semibold text-gray-900 mb-4">
                  Why Trust Us?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
