import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xjkvgjen", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage(
          "Message sent successfully! Thank you for reaching out."
        );
        // Reset form fields after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMessage(
          "There was a problem sending your message. Please try again later."
        );
      }
    } catch (error) {
      setStatusMessage("There was a network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-gray-800 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center text-yellow-400">{statusMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
