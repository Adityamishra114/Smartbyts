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
    <header className="header-navber-area ">
      <div className="nav-top-bar text-black py-2 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 flex flex-wrap justify-between">
              <div className="call-to-action  ">
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-xl text-white"
                  />
                  <span className="text-xl ml-1 text-white ">Email:</span>

                  <a
                    href="mailto:teamsmartbyts@gmail.com"
                    className="text-xl text-white no-underline"
                  >
                    teamsmartbyts@gmail.com
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xl text-white"
                  />{" "}
                  <span className="text-xl ml-1 text-white">Phone:</span>
                  <a href="tel:+50530722233" className="text-xl no-underline text-white">
                    +505 307 222-33
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <ul className="top-social  flex gap-3 font-normal">
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-xl text-white"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-xl text-white"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-xl text-white"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-xl text-white"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NavigationBar />
      </div>
    </header>
  );
};

export default Header;
