'use client';
import Link from 'next/link';
import { useEffect, useState } from "react";

interface PackageInfo {
  title: string;
  tagline: string;
  description: string;
  color: string;
}

const packageData: Record<string, PackageInfo> = {
  bronze: {
    title: "Bronze League",
    tagline: "Perfect for Startups",
    description: "We help new businesses establish their digital presence with essential branding and web solutions to get you started",
    color: "from-amber-600 to-orange-600"
  },
  silver: {
    title: "Silver League",
    tagline: "Growing Your Brand",
    description: "Designed for growing businesses that need advanced features, better performance, and dedicated support to scale",
    color: "from-gray-400 to-gray-600"
  },
  gold: {
    title: "Gold League",
    tagline: "Premium Excellence",
    description: "Our premium solution for established businesses that demand top-tier features, comprehensive integrations, and white-glove service",
    color: "from-yellow-500 to-yellow-600"
  }
};

export default function PricingPlan() {
  const [activePackage, setActivePackage] = useState<string>("bronze");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const pkg = packageData[activePackage];

  return (
    <section className="w-full bg-black text-white py-20">

      {/* Header */}
      <div className="container mx-auto px-6 mb-20 text-center lg:text-left">
        <h4 className="text-red-500 font-bold tracking-widest mb-4">ABOUT PACKAGES</h4>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {pkg.title}: <span className="text-red-500">{pkg.tagline}</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {pkg.description}
        </p>

        
        <div
              data-aos="fade-right"
              className="mt-4 flex justify-center lg:justify-start gap-4 group"
            >
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all min-w-[140px]">
                  Contact Us
                </button>
              </Link>
              <span className="w-14 h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right text-22 !text-black rounded-full"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div onClick={() => setActivePackage("bronze")} className="cursor-pointer">
            <PricingCard
              title="Bronze League"
              price="$449"
              description="Perfect for startups"
              isActive={activePackage === "bronze"}
              features={[
                "Logo Design","5 Logo Concepts","3 Designers","Business Card",
                "5 Page Website","3 Banner Designs","Facebook Page",
                "100% Ownership Rights","Money Back Guarantee"
              ]}
            />
          </div>

          <div onClick={() => setActivePackage("silver")} className="cursor-pointer">
            <PricingCard
              title="Silver League"
              price="$999"
              description="Best for growing brands"
              isActive={activePackage === "silver"}
              features={[
                "10 Logo Concepts","CMS Website","Mobile Responsive",
                "5 Banner Designs","Google Sitemap","Stock Images",
                "Twitter Page","Account Manager","Money Back Guarantee"
              ]}
            />
          </div>

          <div onClick={() => setActivePackage("gold")} className="cursor-pointer">
            <PricingCard
              title="Gold League"
              price="$1399"
              description="Premium business solution"
              isActive={activePackage === "gold"}
              features={[
                "Unlimited Logo","CMS Website","15 Pages",
                "Payment Integration","Lead Forms","SEO Submission",
                "Social Media Designs","Ownership Rights","Money Back Guarantee"
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, description, features, isActive }: any) {
  return (
    <div className={`bg-[#111] rounded-[32px] p-8 hover:scale-[1.02] transition shadow-xl ${
      isActive ? "ring-2 ring-red-500 scale-[1.02]" : ""
    }`}>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div>
          <h3 className="text-3xl font-bold mb-1">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="text-red-500 text-5xl font-bold">
          {price}
          <span className="text-sm text-gray-400"> /mo</span>
        </div>
      </div>

      <div className="h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-[#222] grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {features.map((f:any,i:any)=>(
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <button
  className="w-full rounded-full py-4 font-bold transition hover:-translate-y-1"
  style={{ backgroundColor: "#ef4444", color: "white" }}
  onMouseOver={e => (e.currentTarget.style.backgroundColor = "#dc2626")}
  onMouseOut={e => (e.currentTarget.style.backgroundColor = "#ef4444")}
>
  Get Started
</button>


    </div>
  );
}
