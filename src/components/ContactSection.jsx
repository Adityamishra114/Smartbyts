import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-area bg-gray-100 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="section-title text-center">
            <h5 className="text-gray-600">Get In Touch</h5>
            <h2 className="text-3xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900">
              Contact Us
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="contact-information">
              <div className="contact-info-title mb-6">
                <h3 className="text-2xl lg:text-3xl md:text-2xl sm:text-xl font-semibold text-gray-900">
                  Contact Info
                </h3>
              </div>
              <div className="contact-details">
                <h6 className="text-lg font-semibold text-gray-900">Phone:</h6>
                <p className="text-gray-700">+333 555 454</p>
                <p className="text-gray-700">+001 503 777 505</p>
              </div>
              <div className="contact-details mt-4">
                <h6 className="text-lg font-semibold text-gray-900">Email:</h6>
                <p className="text-gray-700">info@example.com</p>
                <p className="text-gray-700">contact@example.com</p>
              </div>
              <div className="contact-details mt-4">
                <h6 className="text-lg font-semibold text-gray-900">
                  Address:
                </h6>
                <p className="text-gray-700">
                  Beechwood Avenue - NY 55311, New York
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <form
              id="contact-form"
              action="mail.php"
              method="POST"
              className="contact-form"
            >
              <div className="controls">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full lg:w-1/2 px-2 mb-4">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-2 mb-4">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <div className="form-group">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        required
                        className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                        className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <button
                      type="submit"
                      className="button px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
