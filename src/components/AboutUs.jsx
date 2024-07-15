import React from "react";
import aboutLogo from "../images/Office1.jpg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="about-area mt-8 lg:mt-15 bg-gray-100 py-8 lg:py-16"
    >
      <div className="container mx-auto px-0 lg:px-0">
        <div className="flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full md:w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="about-image-wrapper">
              <img
                src={aboutLogo}
                alt="About image"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-full lg:w-1/2 lg:px-4 px-4 lg:mt-5 sm:mt-0  -mt-5 ">
            <div className="about-content">
              <div className="about-content-text">
                <h5 className="text-2xl sm:text-3xl mt-5 font-medium text-gray-800">
                  Who We Are
                </h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At SmartByts, we are a team of dedicated IT professionals
                  passionate about technology and innovation. We are committed
                  to transforming the way businesses operate by providing
                  state-of-the-art IT solutions tailored to meet the unique
                  needs of our clients.
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-2">
                  Our Commitment
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
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
