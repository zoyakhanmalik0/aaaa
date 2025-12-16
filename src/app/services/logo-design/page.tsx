import Link from "next/link";
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";

export default function LogoDesign() {
  return (
    <main className="w-full! bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Logo <span className="text-default">Design</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Logo Design</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <Services />
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,350px] gap-12 lg:gap-8">
          <div className="space-y-12">
            <div className="rounded-4xl overflow-hidden">
              <img src="/media/sec1.b627f3b3.jpg" alt="Logo Design" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl text-white">Why Choose <span className="text-default font-semibold">Us</span></h2>
              <p className="text-gray-300">Choosing the right partner for your logo design is essential. At Techguar, we understand that a logo is more than just an image; it's the face of your brand. Our approach to logo design is to create logos that are not only visually appealing but also resonate deeply with your audience. We blend creativity with strategic thinking to develop logos that stand out and make a lasting impression.</p>
              <p className="text-gray-300">Our team takes the time to understand your vision and values, ensuring that the final design is a true reflection of your brand's identity. Whether you're a new brand or looking to refresh your existing logo, our expertise ensures that your logo will be modern, memorable, and impactful.</p>
              <h2 className="text-4xl lg:text-5xl text-white mt-12">What We <span className="text-default font-semibold">Offer</span></h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-blackfade2 rounded-3xl p-8 border border-gray-800">
                  <h3 className="text-white text-2xl font-bold mb-4 text-default">Custom Logo Design</h3>
                  <p className="leading-relaxed text-gray-300">We create unique logos tailored to your brand's identity, ensuring that your logo stands out and makes a lasting impression. Our designs are crafted to resonate with your target audience and represent your brand values.</p>
                </div>
                <div className="bg-blackfade2 rounded-3xl p-8 border border-gray-800">
                  <h3 className="text-white text-2xl font-bold mb-4 text-default">Rebranding and Logo Refresh</h3>
                  <p className="leading-relaxed text-gray-300">Give your brand a fresh, modern look with our rebranding and logo refresh services. We update your existing logo to reflect contemporary trends while retaining the core elements that define your brand.</p>
                </div>
                <div className="bg-blackfade2 rounded-3xl p-8 border border-gray-800">
                  <h3 className="text-white text-2xl font-bold mb-4 text-default">Versatile Logo Formats</h3>
                  <p className="leading-relaxed text-gray-300">We deliver logos in multiple formats to ensure versatility across various platforms and media. Whether it's for print, digital, or merchandise, your logo will look perfect and maintain its integrity.</p>
                </div>
                <div className="bg-blackfade2 rounded-3xl p-8 border border-gray-800">
                  <h3 className="text-white text-2xl font-bold mb-4 text-default">Logo Concept Development</h3>
                  <p className="leading-relaxed text-gray-300">Our team works closely with you to develop multiple logo concepts, providing a range of options that align with your vision. We refine these concepts based on your feedback to create the perfect logo.</p>
                </div>
              </div>

              <div className="text-center py-12 mt-12">
                <p className="text-2xl md:text-3xl text-white mb-4">We are dedicated to</p>
                <h2 className="text-4xl md:text-5xl font-bold text-default mb-4">designing the finest custom</h2>
                <h2 className="text-4xl md:text-5xl text-white mb-8">solutions.</h2>
                <div className="w-24 h-1 bg-linear-to-r from-transparent via-default to-transparent mx-auto"></div>
              </div>

              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">This is Techguar</p>
                <h2 className="text-2xl md:text-3xl text-white">where your brand's identity is brought to life through expertly crafted logo designs.</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center my-12 bg-blackfade2 rounded-4xl p-8">
                <div>
                  <h3 className="text-5xl font-bold text-default mb-2">500 +</h3>
                  <p className="text-gray-300">Projects</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-default mb-2">12 +</h3>
                  <p className="text-gray-300">Awards</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-default mb-2">9 +</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl text-white mb-8 mt-16">Featured <span className="text-default font-semibold">Packages</span></h2>
              <p className="text-gray-300 text-lg mb-8">Packages Offered By TechGuar</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  {
                    name: "BASIC PACKAGE",
                    price: "$125.00",
                    oldPrice: "$249.00",
                    features: [
                      "Custom, Interactive Design",
                      "Unique Pages/UI",
                      "Custom CMS",
                      "Complete Development",
                      "Automation Tools",
                      "Automated Inventory Module",
                      "Up to 40 Stock Images",
                      "Order Management",
                      "Stock Management",
                      "Satisfaction Guarantee",
                      "Unique Design Guarantee",
                      "Money Back Guarantee"
                    ]
                  },
                  {
                    name: "STARTUP PACKAGE",
                    price: "$175.00",
                    oldPrice: "$349.00",
                    features: [
                      "6 Unique Logo concepts",
                      "Free icon design",
                      "2 Creative Designers",
                      "48 hrs. Turnaround Time",
                      "Unlimited Revisions",
                      "Ownership Rights",
                      "Unique Design Guarantee",
                      "Satisfaction Guarantee",
                      "Free Final Formats",
                      "Moneyback Guarantee",
                      "AI, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF"
                    ]
                  },
                  {
                    name: "PROFESSIONAL PACKAGE",
                    price: "$199.00",
                    oldPrice: "$399.00",
                    features: [
                      "8 Logo concepts",
                      "4 Creative Designers",
                      "24-48 hrs. Turnaround Time",
                      "Unlimited Revision",
                      "Ownership Rights",
                      "Unique Design Guarantee",
                      "Satisfaction Guarantee",
                      "Free Brand Consultation",
                      "Moneyback Guarantee",
                      "Business Card, Letterhead, Envelope Design",
                      "AI, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF"
                    ]
                  },
                  {
                    name: "ELITE PACKAGE",
                    price: "$245.00",
                    oldPrice: "$489.00",
                    features: [
                      "UNLIMITED Logo Design Concepts",
                      "By 8 Award Winning Designers",
                      "24-48 hrs. Turnaround Time",
                      "Unlimited Revisions",
                      "Stationary Design (Letterhead, Envelope, Business Cards)",
                      "Icon Design",
                      "Double Sided Flyer Design / Bi-Fold Brochure",
                      "Free Email Signature",
                      "Free Final Formats",
                      "Ownership Rights",
                      "Unique Design Guarantee",
                      "Satisfaction Guarantee",
                      "Moneyback Guarantee"
                    ]
                  },
                  {
                    name: "BUSINESS PACKAGE",
                    price: "$299.00",
                    oldPrice: "$599.00",
                    features: [
                      "UNLIMITED Logo Design Concepts",
                      "By 8 Award Winning Designers",
                      "24-48 hrs. Turnaround Time",
                      "Unlimited Revisions",
                      "Stationary Design (Letterhead, Envelope, Business Cards)",
                      "Icon Design",
                      "Double Sided Flyer Design / Bi-Fold Brochure",
                      "Free Email Signature",
                      "Free Final Formats",
                      "Ownership Rights",
                      "Unique Design Guarantee",
                      "Satisfaction Guarantee",
                      "Moneyback Guarantee"
                    ]
                  },
                  {
                    name: "GOLD PACKAGE",
                    price: "$425.00",
                    oldPrice: "$849.00",
                    features: [
                      "UNLIMITED Logo Design Concepts",
                      "By 8 Award Winning Designers",
                      "Icon Design",
                      "24-48 hrs. Turnaround Time",
                      "UNLIMITED Revisions",
                      "Stationary Design (Letterhead, Envelope, Business Cards)",
                      "Free Email Signature",
                      "3 Page Custom Website",
                      "2 Stock Photos",
                      "2 Banner Designs",
                      "jQuery Slider",
                      "All Final Files Format",
                      "Ownership Rights",
                      "Satisfaction Guarantee",
                      "Unique Design Guarantee",
                      "Money Back Guarantee"
                    ]
                  }
                ].map((pkg, idx) => (
                  <div key={idx} className="bg-linear-to-br from-[#111] to-[#0a0a0a] rounded-3xl p-8 border border-gray-800 hover:border-red-500 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    </div>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-default">{pkg.price}</span>
                      <span className="text-gray-500 line-through ml-2">{pkg.oldPrice}</span>
                    </div>
                    <ul className="space-y-2 mb-8 max-h-96 overflow-y-auto">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-default mt-1 shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>

              <h2 className="text-4xl lg:text-5xl text-white mb-8 mt-16">Featured <span className="text-default font-semibold">Portfolio</span></h2>
              <p className="text-gray-300 mb-8">Explore Our Logo Portfolio</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="rounded-3xl overflow-hidden h-64 bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image mx-auto text-gray-600 mb-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                      <p className="text-gray-500">Logo Portfolio {item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - CTA Button for Other Services */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="sticky top-24 bg-linear-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Explore More Services</h3>
              <p className="text-sm mb-6 leading-relaxed">Discover our comprehensive suite of design and development services to elevate your brand presence.</p>
              <Link href="/services">
                <button className="w-full bg-white text-red-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 mb-4">
                  All Services
                </button>
              </Link>
              <Link href="/services/graphic-designing">
                <button className="w-full border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300 mb-4 text-sm">
                  Graphic Designing
                </button>
              </Link>
              <Link href="/services/website-development">
                <button className="w-full border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300 mb-4 text-sm">
                  Website Development
                </button>
              </Link>
              <Link href="/services/digital-marketing">
                <button className="w-full border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300 text-sm">
                  Digital Marketing
                </button>
              </Link>
            </div>

            {/* Stats Card */}
            <div className="sticky top-96 bg-blackfade2 rounded-3xl p-6 border border-gray-800">
              <h4 className="font-bold text-white mb-4">Why Choose TechGuar</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-default">500+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-default">12+</p>
                  <p className="text-sm text-gray-400">Awards</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-default">9+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
