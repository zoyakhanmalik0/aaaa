"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    // Load Bark widget script
    const script = document.createElement("script");
    script.src = "https://www.bark.com/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-black text-white py-16 lg:py-20 text-base relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Border Line - Full width */}
        <div className="border-t border-gray-700 w-full mb-10"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Company Info */}
          <div className="space-y-4 text-center lg:text-left">
            <Image
              src="/media/log.jpg"
              alt="Acciobyte Logo"
              width={300}
              height={200}
              className="mx-auto lg:mx-0"
            />
            <br></br>
            <p className="font-medium">
              402/9 Yarra Street, South Yarra, Victoria, Australia (Remote Services)
            </p>
            <p className="font-medium hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Australia: +61 3 6184 7156
            </p>
            <p className="font-medium hover:text-red-500 transition-colors duration-300 cursor-pointer">
              Canada: +1 365 601 4348
            </p>
            <p className="font-medium hover:text-red-500 transition-colors duration-300 cursor-pointer">
              info@techguar.com
            </p>
          </div>

          {/* Popular Services */}
<div>
  <h1 className="text-2xl font-extrabold mb-7 tracking-wide">
    Popular Services
  </h1>
  <ul className="space-y-3">
    {[
      "Website Design & Development",
      "Custom Website Development",
      "Mobile App Development (Android & iOS)",
      "Digital Marketing",
      "Social Media Marketing",
      "Branding & Logo Design",
      "Illustration & Graphic Design",
      "Video Animation",
      "E-Commerce Solutions",
      "Cyber Security",
      "Point of Sale (POS) Solutions",
    ].map((service, idx) => (
      <li
        key={idx}
        className="hover:text-red-500 transition-colors duration-300 cursor-pointer"
      >
        {service}
      </li>
    ))}
  </ul>
</div>

{/* Useful Links */}
<div>
  <h2 className="text-2xl font-extrabold mb-7 tracking-wide">
    Useful Links
  </h2>
  <ul className="space-y-3">
    {[
      "Home",
      "Project",
      "Services",
      "About Us",
      "Contact Us",
      "Privacy Policy",
      "Terms of Services",
      "Refund Policy",
    ].map((link, idx) => (
      <li key={idx}>
        <Link
          href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
          className="hover:text-red-500 transition-colors duration-300"
        >
          {link}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Newsletter */}
          <div>
             <h2 className="text-2xl font-extrabold mb-7 tracking-wide">
    Subscribe Our Newsletter
  </h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="your_email@example.com"
                className="px-4 py-3 rounded-md text-black bg-white focus:outline-none text-base border border-gray-300"
              />
              <button
  type="submit"
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "black")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "red")}
  style={{
    backgroundColor: "red",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
    transition: "all 0.3s ease",
  }}
>
  Subscribe
</button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          {/* Bark Reviews Widget */}
          <div className="mb-10 flex justify-center">
            <a 
              href="https://www.bark.com/en/au/company/techguar/kEjaO/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bark-widget" 
              data-type="reviews" 
              data-id="kEjaO" 
              data-image="large-dark" 
              data-version="3.0"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/2/24/Bark_Logo_White_on_Blue_Square.png"
                alt="Bark Reviews"
                width={120}
                height={40}
                className="rounded-full object-cover  shadow-md"
              />
            </a>
          </div>

          {/* Middle Border Line - Full width */}
          <div className="border-t border-gray-700 w-full mb-10"></div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © 2025 — TechGuar All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
