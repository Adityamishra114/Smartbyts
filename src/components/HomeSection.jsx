import React from "react";

const HomeSection = () => {
  return (
    <section id="home " className=" ">
      <div className="container ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto ">
            <div className="home-content z-index">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl -mt-12 md:mt-0 text-center md:text-left">
                <span className="text-#24a7cc smart">Smart</span>
                <span className="text-#f28926 byts">Byts:</span>Your One Stop IT
                Solution
              </h2>
              <p className="hometext text-lg md:text-xl lg:text-2xl mt-4 text-center md:text-left">
                Welcome to SmartByts, your premier provider of innovative
                technology solutions in the field of Information Technology. Our
                mission is to empower businesses by delivering comprehensive IT
                services and solutions that enhance productivity, ensure
                security, and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
