import React from 'react';
import './FeaturesSection.css'; // Assuming you want to use external CSS
import bgimg5 from "../images/bgimg.jpg"
const featuresData = [
  {
    delay: '0ms',
    duration: '2000ms',
    imgSrc: {bgimg5},
    title: 'TRUSTED SERVICES',
    text: 'Purchasing a High-Quality, Professionally Refurbished Laptops.',
    link: 'contact-us.php',
  },
  {
    delay: '500ms',
    duration: '2000ms',
    imgSrc: {bgimg5},
    title: 'REMOTE SUPPORT',
    text: 'For any Hardware and Software problems, Please contact our support team through remote software, our team will assist you.',
    link: 'contact-us.php',
  },
  {
    delay: '1000ms',
    duration: '2000ms',
    imgSrc: {bgimg5},
    title: 'PROFESSIONAL REPAIR',
    text: 'Please note that in the professional repair services. We provide a warranty of 90 days on all repair products.',
    link: 'contact-us.php',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container mx-auto">
        <div className="row flex flex-wrap">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="featured-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay={feature.delay}
              data-wow-duration={feature.duration}
              style={{ animationDuration: feature.duration, animationDelay: feature.delay }}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={feature.imgSrc} alt="" />
                  </figure>
                </div>
                <div className="lower-title">
                  <h3>
                    <a href={feature.link}>{feature.title}</a>
                  </h3>
                </div>
                <div className="hover-box">
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${feature.imgSrc})` }}
                  ></div>
                  <div className="hover-inner">
                    <div className="content">
                      <h3>
                        <a href={feature.link}>{feature.title}</a>
                      </h3>
                      <div className="text">{feature.text}</div>
                      <div className="link">
                        <a href={feature.link}>
                          <span className="txt">Contact Us</span>
                          <span className="icon flaticon-arrows-11"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

