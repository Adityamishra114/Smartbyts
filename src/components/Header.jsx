import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <header className="header-navber-area mb-40 ">
      <div className="nav-top-bar topbar text-black py-2 ">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center pt-1  ">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between  md:mb-0">
              <div className="call-to-action flex-wrap gap-2 items-center flex">
                <p className="flex items-center contact">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lg contact  text-white"
                  />
                  {/* <span className="text-lg ml-1 text-white">Email:</span> */}
                  <a
                    href="mailto:teamsmartbyts@gmail.com"
                    className="text-lg contact text-white no-underline ml-1"
                  >
                    teamsmartbyts@gmail.com
                  </a>
                </p>
                <p className="flex items-center phone contact">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-lg contact md:-mt-0 -mt-4 text-white"
                  />
                  {/* <span className="text-lg ml-1 -mt-4 text-white">Phone:</span> */}
                  <a
                    href="tel:+917004289924"
                    className="text-lg contact no-underline md:-mt-0 -mt-4 text-white ml-1"
                  >
                    +91-7004289924
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full  md:w-1/2 text-right">
              <ul className="top-social flex  gap-3 -mt-4 md:-mt-0 -ml-8 justify-start md:justify-end font-normal">
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-xl contact text-white"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-xl contact text-white"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-xl contact text-white"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-xl contact text-white"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <NavigationBar />
    </header>
  );
};

export default Header;
