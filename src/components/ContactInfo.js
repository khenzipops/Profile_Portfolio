"use client";
import { Mail } from "lucide-react";
import { GrGithub, GrPhone, GrLinkedinOption } from "react-icons/gr";

export default function ContactInfo() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white h-96">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        CONTACT
      </h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center">
          <GrPhone className="w-6 h-6 text-blue-600 mr-4 m-2" />
          <span>(+63) 935-856-7116</span>
        </li>
        <li className="flex items-center">
          <Mail className="w-6 h-6 text-blue-600 mr-4 m-2" />
          <span>kpopera123@gmail.com</span>
        </li>
        <li className="flex items-center">
          <GrGithub className="w-6 h-6 text-blue-600 mr-4 m-2" />
          <span>https://github.com/khenzipops</span>
        </li>
      </ul>
    </div>
  );
}
