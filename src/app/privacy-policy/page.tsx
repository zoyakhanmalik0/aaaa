"use client";
import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — TechGuar</title>
        <meta name="description" content="TechGuar Privacy Policy - how we collect, use and protect your information." />
      </Head>

      <Navigation />

      <main className="bg-black text-white pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-300 mb-6">Last updated: December 2025</p>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">About the Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                At TechGuar, your privacy is our top priority. We treat your personal information with the same respect and care as we would our own. While we collect certain information from our clients, its solely to enhance our customer service experience. We are committed to safeguarding your data and acknowledge our responsibility in maintaining and using your information securely. We DO NOT rent or sell any information provided to us online.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Personal Information Collected</h2>
              <p className="text-gray-300 leading-relaxed">
                TechGuar collects the following personal information: name, email address or mailing address, phone number, and credit card information. This information is gathered when you place an order or save your details with us. We may also use your email or mailing address to respond to comments, queries, or other communications.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                Additionally, TechGuar keeps records of products that have previously interested you, along with your purchase history, to better understand your preferences and enhance your shopping experience.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Use of Collected Data</h2>
              <p className="text-gray-300 leading-relaxed">
                The information collected from our clients is used in several ways to improve their experience with TechGuar. We use your saved information to process your orders efficiently. You may receive email notifications to confirm your order, and our customer service team may contact you via phone, email, or mailing address if we need to clarify any details about your order.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                As a valued client, you may also receive updates about our website, new services, or special offers. Additionally, we analyze information about your interests and purchases to enhance our site design and improve your shopping experience.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Third Party Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                Your personal information is safe with TechGuar. We do not release personal information to third parties outside of our domains. Under no circumstances will we sell or provide your personal information to external third parties.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Security of Personal Information</h2>
              <p className="text-gray-300 leading-relaxed">
                At TechGuar, the security of your personal information is our priority. We use Secure Sockets Layer (SSL) technology to protect your data during transmission. SSL encrypts the information you provide, ensuring that your personal details remain confidential and secure.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Choices</h2>
              <p className="text-gray-300 leading-relaxed">
                You can choose not to provide certain information, but this may limit the services we can offer. If you no longer wish to receive marketing communications from us, you can opt out by following the unsubscribe link in our emails or by contacting us at contact@techguar.com.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-300 mt-3 space-y-1">
                <li>Email: <a className="text-red-500 underline" href="mailto:contact@techguar.com">contact@techguar.com</a></li>
                <li>Phone: <span className="">+447861402051</span></li>
                <li>Address: 14 West Street Wakefield WF2 8UA England</li>
              </ul>
            </section>

            <div className="mt-8">
              <Link href="/" className="inline-block text-red-500 hover:underline">Return to home</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
