"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHydrated, useInViewWithHydration } from "@/hooks/useinView";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const isHydrated = useHydrated();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch(
        "https://profile-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFeedback({
          type: "success",
          message: "✅ Message sent successfully!",
        });
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        setFeedback({
          type: "error",
          message: "❌ Failed to send message. Try again!",
        });
      }
    } catch (err) {
      setFeedback({
        type: "error",
        message: "⚠️ Network error! Please try again.",
      });
    }

    setLoading(false);
  };

  // 👇 Framer Motion Animation Logic
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInViewWithHydration(ref, { margin: "-100px", once: false });

  useEffect(() => {
    if (isHydrated && inView) {
      controls.start({ opacity: 1, y: 0 });
    } else if (isHydrated) {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls, isHydrated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: isHydrated ? 0 : 1, y: isHydrated ? 40 : 0 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md mx-auto p-4 rounded-lg bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-500 rounded-lg border border-blue-500 hover:border-blue-800 appearance-none focus:outline-0 focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="fullname"
            className="absolute text-sm text-gray-600 duration-500 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-500 rounded-lg border border-blue-500 hover:border-blue-800 appearance-none focus:outline-0 focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-600 duration-500 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email Address
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-500 rounded-lg border border-blue-500 hover:border-blue-800 appearance-none focus:outline-0 focus:ring-0 focus:border-blue-600 peer h-24 resize-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="absolute text-sm text-gray-600 duration-500 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Your Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full p-3 rounded-lg text-white font-medium ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } transition-colors`}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {feedback && (
        <p
          className={`mt-4 p-2 rounded text-sm text-center ${
            feedback.type === "success"
              ? "text-blue-700 bg-green-100"
              : "text-red-700 bg-red-100"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </motion.div>
  );
}
