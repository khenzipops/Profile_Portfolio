"use client";
import { sendMail } from "@/api/mail.api";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validInput = email && fullname && message;

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const submitEmail = async (event) => {
    event.preventDefault();

    const mail = {
      message: `From: ${fullname} <br/> Email: ${email} <br/><br/> ${message}`,
      recipients: ["kpopera123@gmail.com", "timajokyle24@gmail.com"],
      subject: "Website Inquiry",
    };

    const mailResponse = await sendMail(mail);

    if (mailResponse.status === 200) {
      setEmail("");
      setMessage("");
      setFullname("");

      setSuccessMessage(mailResponse.message);
    } else {
      setErrorMessage("Failed to send mail");
    }
  };

  return (
    <div id="contact" className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-10 border-mainColor border-2">
      <form className="space-y-3">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="fullname">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={handleFullnameChange}
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-mainColor transition duration-300 ease-in-out"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-mainColor transition duration-300 ease-in-out"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full resize-none p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-mainColor transition duration-300 ease-in-out"
            rows="3"></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            onClick={submitEmail}
            disabled={!validInput}
            className="w-1/2 py-2 px-4 bg-mainColor border-black text-white text-sm font-semibold rounded-md transition duration-300 ease-in-out">
            Submit
          </button>
          {successMessage && <p className="text-green-600 text-sm mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 text-sm mt-4">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default Contact;
