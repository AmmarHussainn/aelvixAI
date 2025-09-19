import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Video } from 'lucide-react';

const CalendlyBooking = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Telegraf, sans-serif' }}>
      {/* Header Section */}
      <section className="bg-black pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <button className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors duration-200">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          {/* Hero Content */}
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
              Book Your <span className="font-black bg-gradient-to-r from-[#2775EA] to-[#77DCBC] bg-clip-text text-transparent">AI Voice Agent</span> Demo
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Discover how our enterprise-grade AI voice agents can transform your business communication. 
              Schedule a personalized 30-minute demo with our team.
            </p>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Calendar size={20} className="text-[#77DCBC]" />
                <span className="text-sm font-medium">30-Minute Demo</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Video size={20} className="text-[#77DCBC]" />
                <span className="text-sm font-medium">Video Call</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock size={20} className="text-[#77DCBC]" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Side - What to Expect */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-normal mb-6">
                  What to Expect in Your <span className="font-black bg-gradient-to-r from-[#2775EA] to-[#77DCBC] bg-clip-text text-transparent">Demo</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2775EA] to-[#77DCBC] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Business Assessment</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We'll discuss your current communication challenges and workflow bottlenecks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2775EA] to-[#77DCBC] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Live AI Demo</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Experience our AI voice agents in action with real-world scenarios tailored to your industry.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2775EA] to-[#77DCBC] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Custom Solution Design</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Get a personalized roadmap for implementing AI voice agents in your organization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2775EA] to-[#77DCBC] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">ROI Analysis</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Receive projected cost savings and efficiency gains specific to your use case.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-4">Trusted by Industry Leaders</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] rounded-full"></div>
                    <span>Healthcare Networks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] rounded-full"></div>
                    <span>Logistics Companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] rounded-full"></div>
                    <span>Professional Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] rounded-full"></div>
                    <span>Solar Installers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Calendly Widget */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-medium text-center">Select Your Preferred Time</h3>
                  <p className="text-gray-600 text-sm text-center mt-2">Choose a time that works best for your schedule</p>
                </div>
                
                {/* Calendly Inline Widget */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/ahmedrazasst/30min" 
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Questions Before Booking?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Our team is here to help. Reach out with any questions about our AI voice agents or demo process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Email Us
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendlyBooking;