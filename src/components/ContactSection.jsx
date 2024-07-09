import React, { useState } from "react";
import contact from "../images/contact.jpg";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = process.env.YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL;

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

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
            <img src={contact} alt="" className="w-full " />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.subject}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
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
