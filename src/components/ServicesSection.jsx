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
            <h2 className="text-gray-600 text-center">Our Services</h2>
            <h5 className="text-3xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900">
              We offer a diverse range of IT services, including:
            </h5>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 -mx-4">
          <div class="book">
            <p className="text-sm">
              Reliable and efficient IT support to keep your business operations
              running smoothly.
            </p>
            <div class="cover">
              <p>IT Support</p>
            </div>
          </div>
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <p>Hover Me</p>
            </div>
          </div>
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <p>Hover Me</p>
            </div>
          </div>
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <p>Hover Me</p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap -mx-4">
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
              <h4 className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                IT Support:
              </h4>
              <p className="text-xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-900 py-4 text-center">
                Reliable and efficient IT support to keep your business
                operations running smoothly.
              </p>
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
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
