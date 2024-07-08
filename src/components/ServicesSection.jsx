import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="services-area bg-gray-100 section-padding"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="section-title text-center">
            <h5 className="text-gray-600">Choose Your Device</h5>
            <h2 className="text-3xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900">
              Quick Repair Services
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
            <a
              href="#"
              className="single-services-box block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="services-img">
                <img
                  src="assets/img/services/services-1.png"
                  alt="Service Images"
                  className="w-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                iPhone Repair
              </h3>
            </a>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
            <a
              href="#"
              className="single-services-box block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="services-img">
                <img
                  src="assets/img/services/services-2.png"
                  alt="Service Images"
                  className="w-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                Smartphone Repair
              </h3>
            </a>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
            <a
              href="#"
              className="single-services-box block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="services-img">
                <img
                  src="assets/img/services/services-3.png"
                  alt="Service Images"
                  className="w-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                Computer Repair
              </h3>
            </a>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
            <a
              href="#"
              className="single-services-box block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="services-img">
                <img
                  src="assets/img/services/services-4.png"
                  alt="Service Images"
                  className="w-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                Tablet Repair
              </h3>
            </a>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
            <a
              href="#"
              className="single-services-box block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="services-img">
                <img
                  src="assets/img/services/services-5.png"
                  alt="Service Images"
                  className="w-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                Gaming Console
              </h3>
            </a>
          </div>
          <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
            <a
              href="#"
              className="single-services-box block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="services-img">
                <img
                  src="assets/img/services/services-6.png"
                  alt="Service Images"
                  className="w-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                Others Services
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
