"use client";
import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy — TechGuar</title>
        <meta name="description" content="TechGuar Refund &amp; Policies." />
      </Head>

      <Navigation />

      <main className="bg-black text-white pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Refund Policy</h1>
            <p className="text-lg text-gray-300 mb-6">Last updated: December 2025</p>

            <section className="mb-6">
              <p className="text-gray-300 leading-relaxed">
                Techguar refund policy will be nil if:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
                <li>The primary design concept has been approved.</li>
                <li>The cancellation has been made due to reasons non-related to the company.</li>
                <li>The company has not been contacted for more than 2 weeks of the project.</li>
                <li>The company’s policies, or policy, have been violated.</li>
                <li>Another company or designer has been approached for the same project.</li>
                <li>The creative brief lacks the required information.</li>
                <li>A complete design change has been demanded.</li>
                <li>The claim has crossed the given ‘request for refund’ time span.</li>
                <li>The business is closing or changing its name or business.</li>
                <li>Reasons such as ‘change of mind,’ ‘disagreement with partner’, or other reasons that do not pertain to the service will not be subject to refund under any circumstances.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Bundle & Service Exceptions</h2>
              <p className="text-gray-300 leading-relaxed">
                If a client subscribes to a service bundle and is dissatisfied with a particular service, the refund will only be applicable to that particular service and not the entire bundle. The client will not be entitled to any refunds after 15 days of the date of purchase.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                Services including but not limited to Social Media, SEO, Domain Registration, and Web Hosting are not entitled to refunds under any circumstances.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Websites & Design</h2>
              <p className="text-gray-300 leading-relaxed">
                In case of websites, refunds will not be entertained once the client has approved the design and the website is sent for development. Money-back guarantee will only be applicable if the initial designs are completely rejected by the client.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                If the client requests additional design concepts and/or amendments/modifications and then requests a refund, TechGuar will be entitled to deduct 33% of the total billing amount for costs incurred in delivery of services, including processing fees and management/service charges.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                Note: TechGuar holds all rights to reject any project or cancel the contract whenever it deems necessary. After the refund, you will not have any rights to use the designs for any purpose; they will be the sole property of TechGuar.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Claim Your Refund</h2>
              <p className="text-gray-300 leading-relaxed">
                To claim your refund, follow the steps below:
              </p>
              <ol className="list-decimal pl-6 mt-3 text-gray-300 space-y-2">
                <li>Dial our number: +61 3 9010 5684.</li>
                <li>Once we receive your refund request, we will respond at our earliest and complete the required analysis.</li>
                <li>After analysis, we will initiate the refund process if applicable.</li>
              </ol>
              <p className="text-gray-300 mt-3">After you have received your refund, you will not have any rights to any designs submitted by TechGuar. The information will be submitted to the Copyright Acquisition of the Government Copyright Agencies to maintain legality.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Quality Assurance & Delivery</h2>
              <p className="text-gray-300 leading-relaxed">At TechGuar, we are dedicated to delivering high-quality, well-researched, and professionally crafted designs that meet your unique requirements.</p>
              <p className="text-gray-300 leading-relaxed mt-3">100% Satisfaction Guarantee: We believe in exceeding expectations and ensuring complete client satisfaction. Our unlimited revisions policy is designed to refine and perfect your design until you are fully satisfied.</p>
              <p className="text-gray-300 leading-relaxed mt-3">Delivery Policy: The complete order will be sent to the mentioned account on the date stated on Order Confirmation and a confirmation email will also be sent. Minimum turnaround time is 2 business days; for urgent orders contact customer support.</p>
              <p className="text-gray-300 leading-relaxed mt-3">Revision Policy: The allotted number of revisions is based on your selected package. Revisions requested after finalization will be treated as a new order and charged separately.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Customer Support</h2>
              <p className="text-gray-300 leading-relaxed">Our customer support is available 24/7 to answer your concerns and queries.</p>
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
