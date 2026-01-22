"use client";
import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TermsOfServices() {
  return (
    <>
      <Head>
        <title>Terms & Conditions — TechGuar</title>
        <meta name="description" content="TechGuar Terms and Conditions." />
      </Head>

      <Navigation />

      <main className="bg-black text-white pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Terms &amp; Conditions</h1>
            <p className="text-lg text-gray-300 mb-6">Please read these terms carefully before placing an order.</p>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Techguar strongly recommends that all visitors to our website review our terms and conditions before placing an order with us. By engaging with our services and finalizing a contract, you acknowledge that you have read, understood, and agreed to our terms and conditions.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Site Contents Usage</h2>
              <p className="text-gray-300 leading-relaxed">
                The following topics are covered in our policies: Site Contents Usage, Testimonials, Electronic Communications, Copyright/Trademarks, Copyright Complaints, Refund Policy, Claim Your Refund, Quality Assurance Policy, Account Area, Delivery Policy, Revision Policy, Record Maintenance, Notice and Procedure for Making Claims of Copyright Violation, Applicable Law, Disputes, Site Policies, Modification &amp; Severability, Bill of Rights, and Site Content Usage.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Use of the Site</h2>
              <p className="text-gray-300 leading-relaxed">
                Your access to our website is entirely voluntary. By using our site, you agree to our Privacy Policy and Terms of Use, including limitations on damages, dispute resolution, and compliance with applicable laws. If you have questions about our policies, contact customer support.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                Our policies may change from time to time; we recommend reviewing this page before making a purchase or using our services to stay informed about your rights and obligations.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Analytics &amp; Performance</h2>
              <p className="text-gray-300 leading-relaxed">
                Techguar gathers website navigation data to analyze visitor behavior and improve user experience (UX). This includes technical performance metrics such as page load speeds, connection times, and most-visited sections. We use this information to optimize our platform.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All materials on this website—including images, graphics, text, icons, designs, and multimedia content—are protected by copyright, trademarks, and intellectual property laws. These assets are owned, controlled, or licensed by Techguar and cannot be reproduced, distributed, or modified for commercial purposes without prior authorization.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Testimonials</h2>
              <p className="text-gray-300 leading-relaxed">
                By submitting testimonials, feedback, suggestions, or other content ("Comments") you agree that such Comments become Techguar's exclusive property. We retain full rights to use Comments for any purpose without obligation to compensate or maintain confidentiality.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Electronic Communications</h2>
              <p className="text-gray-300 leading-relaxed">
                When you interact with our Site or contact us by email, you consent to receive electronic communications. Such communications satisfy any legal requirement for written notice.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Copyright Complaints</h2>
              <p className="text-gray-300 leading-relaxed">
                If you believe any content on our site infringes your copyright, please follow our Notice and Procedure for Making Claims of Copyright Violation so we can review and take appropriate action.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Other Policies</h2>
              <p className="text-gray-300 leading-relaxed">
                This Terms page works in conjunction with our Privacy Policy, Refund Policy, Delivery Policy, Revision Policy, and other site policies. Where applicable, those policies will govern specific areas such as refunds, delivery timelines, and revisions.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Governing Law &amp; Disputes</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms are governed by applicable laws. Any dispute arising from or relating to these terms shall be handled under the applicable legal framework and dispute resolution mechanisms described in our policies.
              </p>
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
