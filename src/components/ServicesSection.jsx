import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faVideo,
  faCode,
  faHeadset,
  faPalette,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  return (
    <section id="services" class="advertisers-service-sec pt-5 pb-5">
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
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3>IT Support</h3>
              <p>
                Reliable and efficient IT support to keep your business
                operations running smoothly.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <h3>Website Design & Development</h3>
              <p>
                Creating visually appealing and user-friendly websites that
                boost your online presence.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3>Web App Development</h3>
              <p>
                Developing robust and scalable web applications customized to
                your business requirements.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>CRM Software Solutions</h3>
              <p>
                Implementing effective CRM systems to manage and grow your
                customer relationships.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>Sale of IT Equipment</h3>
              <p>
                Supplying high-quality IT equipment to meet your technological
                needs.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="service-card">
              <div class="icon-wrapper">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <h3>CCTV </h3>
              <p>
                Providing advanced CCTV solutions to ensure the security and
                safety of your premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
