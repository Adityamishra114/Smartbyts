import React from "react";
import "./HoverBox.css"; // Assuming you want to use external CSS

const HoverBox = () => {
  return (
    <div className="hover-box">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(../../)" }}
      ></div>
      <div className="hover-inner">
        <div className="content">
          <h3>
            <a href="contact-us.php">TRUSTED SERVICES</a>
          </h3>
          <div className="text">
            Purchasing a High-Quality, Professionally Refurbished Laptops.
          </div>
          <div className="link">
            <a href="contact-us.php">
              <span className="txt">Contact Us</span>
              <span className="icon flaticon-arrows-11"></span>
            </a>
          </div>
        </div>
        <div className="content">
          <h3>
            <a href="contact-us.php">TRUSTED SERVICES</a>
          </h3>
          <div className="text">
            Purchasing a High-Quality, Professionally Refurbished Laptops.
          </div>
          <div className="link">
            <a href="contact-us.php">
              <span className="txt">Contact Us</span>
              <span className="icon flaticon-arrows-11"></span>
            </a>
          </div>
        </div>
        <div className="content">
          <h3>
            <a href="contact-us.php">TRUSTED SERVICES</a>
          </h3>
          <div className="text">
            Purchasing a High-Quality, Professionally Refurbished Laptops.
          </div>
          <div className="link">
            <a href="contact-us.php">
              <span className="txt">Contact Us</span>
              <span className="icon flaticon-arrows-11"></span>
            </a>
          </div>
        </div>
        <div className="content">
          <h3>
            <a href="contact-us.php">TRUSTED SERVICES</a>
          </h3>
          <div className="text">
            Purchasing a High-Quality, Professionally Refurbished Laptops.
          </div>
          <div className="link">
            <a href="contact-us.php">
              <span className="txt">Contact Us</span>
              <span className="icon flaticon-arrows-11"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverBox;
