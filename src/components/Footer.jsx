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
                  Welcome to SmartByts, your premier provider of innovative
                  technology solutions in the field of Information Technology.
                </p>
                <ul className="footer-social -ml-9  font-bold  flex space-x-4">
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
              {/* <div className="footer-content">
                <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                <ul className="footer-link -ml-8">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300   no-underline hover:text-white"
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
              </div> */}
            </div>
            <div className="footer-box-item -mt-20 sm:-mt-0">
              <div className="footer-content">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="footer-link  -ml-7">
                  <li>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-lg md:-mt-0 -mt-4  text-white"
                    />
                    <a
                      href="tel:+91-8506850785"
                      className="text-gray-300 ml-2 no-underline hover:text-white"
                    >
                      +91-8506850785
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-lg  text-white"
                    />
                    <a
                      href="mailto:teamsmartbyts@gmail.com"
                      className="text-gray-300  ml-2 no-underline hover:text-white"
                    >
                      teamsmartbyts@gmail.com
                    </a>
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
