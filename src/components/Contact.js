"use client";

function Contact() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Contact Us
      </h2>
      <form className="space-y-3">
        {/* Full Name */}
        <div>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-xs font-medium text-gray-700 mb-1"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
