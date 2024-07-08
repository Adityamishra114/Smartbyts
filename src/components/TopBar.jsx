import React from "react";
import SmartLogo from "../images/Smartbyts1.png";
const TopBar = () => {
  return (
    <div id="top-bar" className="top-bar visibility-all">
      <div className="container mx-auto">
        <div className="bg-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2">
                <div className="flex items-center text-white">
                  <i className="icofont-envelope"></i>
                  <p className="ml-2">
                    Email:{" "}
                    <a href="mailto:info@example.com" className="text-white">
                      info@example.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center mt-2 text-white">
                  <i className="icofont-phone"></i>
                  <p className="ml-2">
                    Phone:{" "}
                    <a href="tel:50530722233" className="text-white">
                      +505 307 222-33
                    </a>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:text-right">
                <ul className="flex justify-center md:justify-end space-x-4">
                  <li>
                    <a href="#" className="text-white">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
