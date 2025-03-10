"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null); // Reset feedback message

    try {
      const response = await fetch(
        "https://profile-backend-ashen.vercel.app/api/contact", // Fixed URL
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
        setFormData({ fullname: "", email: "", message: "" }); // Reset form
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

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border rounded h-24 resize-none"
          required
        />

        <button
          type="submit"
          className={`w-full p-2 rounded text-white ${
            loading ? "bg-gray-500" : "bg-mainColor hover:bg-green-700"
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {/* ✅ Show feedback message BELOW the form */}
      {feedback && (
        <p
          className={`mt-4 p-2 rounded text-sm text-center ${
            feedback.type === "success"
              ? "text-green-700 bg-green-100"
              : "text-red-700 bg-red-100"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </div>
  );
}
