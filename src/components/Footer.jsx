import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logoLight from "../images/smart1.png";
const Footer = () => {
  return (
    <footer className="footer-area bg-gray-900 text-gray-100">
      <div className="footer-top-area  py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="footer-box-item">
              <div className="footer-content mb-4">
                <span className="smart text-3xl font-bold">Smart</span>
                <span className="byts text-3xl font-bold">Byts</span>
                <p className="text-gray-300 mt-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim.
                </p>
                <ul className="footer-social  font-bold  flex space-x-4">
                  <li>
                    <a href="#">
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-3xl text-white"
                          />
                        </a>
                      </li>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-3xl text-white"
                          />
                        </a>
                      </li>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-3xl text-white"
                          />
                        </a>
                      </li>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <li>
                        <a href="#">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-3xl text-white"
                          />
                        </a>
                      </li>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-box-item">
              <div className="footer-content">
                <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                <ul className="footer-link">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 no-underline hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 no-underline hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 no-underline hover:text-white"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 no-underline hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-box-item">
              <div className="footer-content">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="footer-link">
                  <li>
                    <i className="fa fa-phone text-gray-300"></i>
                    <a
                      href="tel:503777505"
                      className="text-gray-300 ml-2 no-underline hover:text-white"
                    >
                      +001 503 777 505
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o text-gray-300"></i>{" "}
                    <a
                      href="mailto:teamsmartbyts@gmail.com"
                      className="text-gray-300 ml-2 no-underline hover:text-white"
                    >
                      teamsmartbyts@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-home no-underline text-gray-300"></i> CA
                    560 Bush St &amp; 20th Ave, Canada.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area py-4 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-300">
            <p className="mb-2"> All Right Reserved &copy; Smartbyts 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
