import React from "react";

const HomeSection = () => {
  return (
    <section id="home" className="home-area mt-40 hero-equal-height section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12">
            <div className="home-content z-index position-relative">
              <h2 className="text-7xl">
                <span className="text-#24a7cc smart">Smart</span>{" "}
                <span className="text-#f28926 byts">Byts</span>: Your One Stop
                IT Solution
              </h2>
              <p className="text-xl mt-5">
              Welcome to SmartByts, your premier provider of innovative technology solutions in the field of Information Technology. Our mission is to empower businesses by delivering comprehensive IT services and solutions that enhance productivity, ensure security, and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
