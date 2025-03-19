"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Error sending email:", err);
          setError("Failed to send message. Try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
         {success &&   <p className="bg-green text-white text-center font-bold p-4 mb-5 rounded w-full max-w-md animate-fade">
    {success}  </p>}
{error && <p className="bg-red text-white text-center font-bold p-4 mb-5 rounded w-full max-w-md animate-fade">{error}</p>}
    <form onSubmit={sendEmail} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
    <h1 className="text-3xl text-black font-bold mb-8 text-center">Contact Me</h1>
      <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border text-black border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            rows="5"
            required
          />
        </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>

<div className="mt-10 text-center">
<p className="text-gray-700  text-xl font-patrick">Or reach out directly at:</p>
<p className="font-semibold font-patrick text-blue-800">junekrotich@gmail.com</p>
<p className="font-semibold font-patrick text-blue-800">+254 745 383 037</p>
</div>
</div>
  );
};

export default ContactForm;
