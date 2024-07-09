import React from "react";
import itSupport from "../images/techsupport.png";
const ServicesSection = () => {
  return (
    <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div className="section-title text-center">
            <h2 className="text-gray-600 text-center">Our Services</h2>
            <h5 className="text-3xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900">
              We offer a diverse range of IT services, including:
            </h5>
          </div>
        </div>
        <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <h3>Tracking Lead</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-arrows-down-to-people"></i>
              </div>
              <h3>Advanced Targeting solution</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-globe"></i>
              </div>
              <h3>Global Reach & Quality Traffic</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-money-check-dollar"></i>
              </div>
              <h3>Flexible pricing models</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <i class="fa-regular fa-circle-check"></i>
              </div>
              <h3>Advanced optimization technologies & methodologies</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <i class="fa-solid fa-people-group"></i>
              </div>
              <h3>Dedicated account management team</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
