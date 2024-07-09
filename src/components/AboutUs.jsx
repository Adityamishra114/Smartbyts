import React from "react";
import aboutLogo from "../images/Office1.jpg";
const AboutUs = () => {
  return (
    <section id="about" className="about-area bg-gray-100 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap  items-center">
          <div className="lg:w-1/2 md:w-full sm:w-full -mt-6">
            <div className="about-image-wrapper">
              <img src={aboutLogo} alt="About image" className="w-full -mt-20 " />
            </div>
          </div>
          <div className="lg:w-1/2 md:w-full sm:w-full mt-6 p-5  lg:mt-0 md:mt-0 sm:mt-0">
            <div className="about-content">
              <div className="about-content-text">
                <h5 className="text-3xl mt-5 font-medium text-gray-800">
                  Who We Are
                </h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At SmartByts, we are a team of dedicated IT professionals
                  passionate about technology and innovation. We are committed
                  to transforming the way businesses operate by providing
                  state-of-the-art IT solutions tailored to meet the unique
                  needs of our clients.
                </p>
                <h3 className="text-2xl lg:text-3xl md:text-2xl sm:text-xl font-medium text-gray-900 mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At SmartByts, your success is our priority. We believe in
                  building lasting relationships with our clients based on
                  trust, transparency, and exceptional service. Our goal is to
                  be your go-to partner for all your IT needs, providing you
                  with the expertise and support necessary to excel in today’s
                  competitive environment. Experience the difference that
                  innovative technology solutions can make for your business.
                  Partner with SmartByts and take the first step towards a
                  brighter, more efficient future.
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
