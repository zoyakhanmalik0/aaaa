import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";

export default function CyberSecurity() {
  return (
    <>
      {/* Hero Section */}
      <section className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
          <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
            <span className="text-4xl text-center xl:text-7xl">Cyber <span className="text-default">Security</span></span>
            
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="">
              <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
                <li><Link className="hover:underline" href="/">Home</Link></li>
                <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
                <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Cyber Security</span></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Services/>

      {/* Main Content */}
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <div className="space-y-12">
            {/* Main Image */}
            <div className="rounded-[32px] overflow-hidden">
              <Image src="/media/sec1.45b345b4.jpg" alt="Cyber Security professionals" width={800} height={400} className="w-full object-cover"/>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <p>Our comprehensive Cyber Security Solutions are designed to protect your digital assets, secure your data, and safeguard your business from evolving cyber threats. From vulnerability assessments to advanced threat detection and incident response, we provide end-to-end security services that ensure your business remains resilient against cyber attacks while maintaining compliance with industry regulations.</p>
              
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">Features</span> of Our <span>Cyber Security</span> Solutions</h2>
              
              <p>Our cyber security approach combines cutting-edge technology with expert analysis to create robust defense mechanisms for your organization. We implement multi-layered security protocols, continuous monitoring systems, and proactive threat intelligence to detect and prevent security breaches before they impact your business operations.</p>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4 xl:max-w-lg">
                  <li className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    Comprehensive vulnerability assessments & penetration testing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    24/7 Security Operations Center (SOC) monitoring
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    Advanced endpoint protection & threat detection
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    Data encryption & secure cloud infrastructure
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    Incident response & digital forensics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    Compliance management (GDPR, HIPAA, PCI-DSS)
                  </li>
                </ul>
                <div className="h-full overflow-hidden">
                  <Image src="/media/main.5747116a.jpg" alt="Cyber Security Features" width={400} height={400} className="w-full h-[230px] aspect-square object-cover rounded-xl"/>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="rounded-[32px] overflow-hidden">
              <div className="grid md:grid-cols-1 gap-6">
                <h2 className="text-4xl lg:text-5xl text-white">Our <span className="text-default font-semibold">Process</span> for Cyber Security Implementation</h2>
                <p>Our cyber security implementation follows a structured methodology that begins with understanding your unique risk profile and ends with continuous protection and improvement. We work closely with your team to ensure security measures align with your business objectives while providing maximum protection against cyber threats.</p>
                
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                    <div className="flex items-start justify-between mb-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8 text-default !w-16 !h-16">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">Security Assessment & Risk Analysis</h3>
                    <p className="leading-relaxed">We conduct comprehensive security audits, vulnerability assessments, and risk analysis to identify potential threats and security gaps in your current infrastructure.</p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                    <Image src="/media/step1.32b871b1.jpg" alt="Security Assessment & Risk Analysis" width={400} height={300} className="w-full h-full object-cover"/>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                    <div className="flex items-start justify-between mb-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-8 h-8 text-default !w-16 !h-16">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">Implementation & Protection Deployment</h3>
                    <p className="leading-relaxed">We deploy advanced security solutions including firewalls, intrusion detection systems, endpoint protection, and implement security protocols tailored to your specific needs.</p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-1">
                    <Image src="/media/step2.bf76bec8.jpg" alt="Implementation & Protection Deployment" width={400} height={300} className="w-full h-full object-cover"/>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                    <div className="flex items-start justify-between mb-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-8 h-8 text-default !w-16 !h-16">
                        <rect width="20" height="14" x="2" y="3" rx="2"/>
                        <line x1="8" x2="16" y1="21" y2="21"/>
                        <line x1="12" x2="12" y1="17" y2="21"/>
                      </svg>
                      <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">Continuous Monitoring & Optimization</h3>
                    <p className="leading-relaxed">Our Security Operations Center provides 24/7 monitoring, threat intelligence, and regular security updates to ensure ongoing protection against emerging threats.</p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                    <Image src="/media/step3.ad3d28f7.jpg" alt="Continuous Monitoring & Optimization" width={400} height={300} className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mx-auto !mt-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-12">Lets address your <span className="text-[#86c232]">security questions</span> today!</h2>
              <div className="space-y-4">
                <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                  <h3 className="flex">
                    <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                      <span className="text-white text-xl font-semibold text-left">What types of cyber threats can you protect against?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                </div>
                <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                  <h3 className="flex">
                    <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                      <span className="text-white text-xl font-semibold text-left">How do you handle data privacy and compliance requirements?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                </div>
                <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                  <h3 className="flex">
                    <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                      <span className="text-white text-xl font-semibold text-left">What is your response time for security incidents?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                </div>
                <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                  <h3 className="flex">
                    <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                      <span className="text-white text-xl font-semibold text-left">Do you provide employee security awareness training?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-20 lg:self-start space-y-8">
            {/* Services Category */}
            <div className="bg-[#111] rounded-[32px] p-8">
              <h3 className="text-white text-xl font-medium mb-6">Services Category</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/website-development">
                    <span className="group-hover:text-white transition-colors capitalize">Website Development</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/digital-marketing">
                    <span className="group-hover:text-white transition-colors capitalize">Digital Marketing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/graphic-designing">
                    <span className="group-hover:text-white transition-colors capitalize">Graphic Designing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/social-media-marketing">
                    <span className="group-hover:text-white transition-colors capitalize">Social Media Marketing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/content-writing">
                    <span className="group-hover:text-white transition-colors capitalize">Content Writing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/search-engine-optimization">
                    <span className="group-hover:text-white transition-colors capitalize">Search Engine Optimization</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/software-development">
                    <span className="group-hover:text-white transition-colors capitalize">Software Development</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/cyber-security">
                    <span className="group-hover:text-white transition-colors capitalize">Cyber Security</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/e-commerce">
                    <span className="group-hover:text-white transition-colors capitalize">E-Commerce</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/illustrations">
                    <span className="group-hover:text-white transition-colors capitalize">Illustrations</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/video-animation">
                    <span className="group-hover:text-white transition-colors capitalize">Video Animation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-[32px] p-7 xl:p-20 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert mx-auto mb-5 w-24 h-24 text-default">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M12 8v4"/>
                <path d="M12 16h.01"/>
              </svg>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-default text-xl font-bold">Security Concerns?</h3>
              </div>
              <p className="mb-6">Our security experts will assess your vulnerabilities and provide solutions.</p>
              <button className="w-full bg-default text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-default/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (20) 8855-314
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-32 font-semibold uppercase tracking-wider">Secure Your Business</span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">PROTECT YOUR</h2>
              <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
                <Link className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]" href="/contact">
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    Get Protected
                  </div>
                </Link>
              </div>
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">DIGITAL ASSETS</h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-80 -left-32 z-0">
          <Image src="/media/CTA.61aa7579.png" alt="Astrivix Sphere Image" width={320} height={320} className="w-80 h-80 animate-spin-grow"/>
        </div>
      </section>

      <Footer />
    </>
  );
}