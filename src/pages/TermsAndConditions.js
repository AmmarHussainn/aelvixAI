import React from 'react';
import { ArrowLeft, Shield, FileText, Users, Lock } from 'lucide-react';

const TermsAndConditions = () => {
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
              Terms & <span className="font-black bg-gradient-to-r from-[#2775EA] to-[#77DCBC] bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Please read these terms carefully before using our AI voice agent services. 
              These terms govern your use of our platform and services.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <FileText size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Legal Agreement</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={16} className="text-[#77DCBC]" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Lock size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Data Protected</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Enterprise Ready</span>
              </div>
            </div>
            
            <p className="text-sm text-white/60">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 border-b border-gray-100">
              <h2 className="text-xl font-medium mb-4">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <a href="#acceptance" className="text-blue-600 hover:text-blue-800 transition-colors">1. Acceptance of Terms</a>
                <a href="#services" className="text-blue-600 hover:text-blue-800 transition-colors">2. Description of Services</a>
                <a href="#user-obligations" className="text-blue-600 hover:text-blue-800 transition-colors">3. User Obligations</a>
                <a href="#privacy" className="text-blue-600 hover:text-blue-800 transition-colors">4. Privacy & Data Protection</a>
                <a href="#intellectual-property" className="text-blue-600 hover:text-blue-800 transition-colors">5. Intellectual Property</a>
                <a href="#payment" className="text-blue-600 hover:text-blue-800 transition-colors">6. Payment Terms</a>
                <a href="#limitation" className="text-blue-600 hover:text-blue-800 transition-colors">7. Limitation of Liability</a>
                <a href="#termination" className="text-blue-600 hover:text-blue-800 transition-colors">8. Termination</a>
                <a href="#compliance" className="text-blue-600 hover:text-blue-800 transition-colors">9. Compliance & Regulations</a>
                <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">10. Contact Information</a>
              </div>
            </div>

            {/* Terms Content */}
            <div className="p-8 space-y-12">
              
              {/* Section 1 */}
              <section id="acceptance">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">1. Acceptance of Terms</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing or using our AI voice agent services ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). 
                    If you do not agree to these Terms, please do not use our Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms apply to all users, including enterprises, businesses, and individuals who access or use our Services. 
                    We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="services">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">2. Description of Services</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Services include AI-powered voice agents that provide automated customer support, appointment scheduling, 
                    call routing, and other communication services. Our Services are designed for enterprise use and include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>24/7 automated call handling and routing</li>
                    <li>Appointment scheduling and calendar integration</li>
                    <li>Customer support and FAQ automation</li>
                    <li>CRM and telephony platform integrations</li>
                    <li>Real-time analytics and reporting</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. 
                    Maintenance windows and updates may occasionally affect service availability.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="user-obligations">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">3. User Obligations</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">As a user of our Services, you agree to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Provide accurate and complete information during registration and use</li>
                    <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
                    <li>Not attempt to reverse engineer, modify, or create derivative works of our Services</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for all activities that occur under your account and for ensuring that 
                    your use of our Services complies with applicable laws and regulations.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="privacy">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">4. Privacy & Data Protection</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are committed to protecting your privacy and maintaining the security of your data. 
                    Our Services are designed to be GDPR and HIPAA compliant where applicable.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect and process data necessary to provide our Services, including call recordings, 
                    customer interactions, and usage analytics. All data is encrypted in transit and at rest.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For detailed information about how we collect, use, and protect your data, 
                    please refer to our Privacy Policy, which is incorporated by reference into these Terms.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="intellectual-property">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">5. Intellectual Property</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All intellectual property rights in the Services, including but not limited to software, 
                    algorithms, trademarks, and content, are owned by us or our licensors.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You are granted a limited, non-exclusive, non-transferable license to use the Services 
                    during the term of your agreement with us, subject to these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You retain ownership of any data you provide to the Services, but grant us a license 
                    to process such data as necessary to provide the Services.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="payment">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">6. Payment Terms</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Payment terms are specified in your service agreement. Generally, payments are due monthly 
                    or annually as agreed upon during the subscription process.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>All fees are non-refundable unless otherwise specified</li>
                    <li>Late payments may result in service suspension</li>
                    <li>Pricing may change with 30 days' written notice</li>
                    <li>Enterprise customers may negotiate custom payment terms</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for all taxes associated with your use of the Services.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="limitation">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">7. Limitation of Liability</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the maximum extent permitted by law, we shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our total liability for any claims arising out of or relating to these Terms or the Services 
                    shall not exceed the amount you paid to us in the twelve months preceding the claim.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, 
                    so some of the above limitations may not apply to you.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="termination">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">8. Termination</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Either party may terminate the agreement with 30 days' written notice. 
                    We may terminate your access immediately if you breach these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Upon termination, your right to use the Services will cease immediately. 
                    We will provide you with a reasonable opportunity to export your data.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sections relating to intellectual property, limitation of liability, and dispute resolution 
                    will survive termination of these Terms.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="compliance">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">9. Compliance & Regulations</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Services are designed to comply with applicable regulations including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>General Data Protection Regulation (GDPR)</li>
                    <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                    <li>Telephone Consumer Protection Act (TCPA)</li>
                    <li>California Consumer Privacy Act (CCPA)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for ensuring your use of the Services complies with all applicable 
                    laws and regulations in your jurisdiction.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="contact">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">10. Contact Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms or our Services, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">General Inquiries</h4>
                        <p className="text-gray-700 text-sm">Email: legal@company.com</p>
                        <p className="text-gray-700 text-sm">Phone: +1 (555) 123-4567</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Legal Department</h4>
                        <p className="text-gray-700 text-sm">Email: legal@company.com</p>
                        <p className="text-gray-700 text-sm">Response Time: 2-3 business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-black py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-white/80 mb-6">
            Our legal team is here to help clarify any questions about these terms and conditions.
          </p>
          <a 
            href="mailto:legal@company.com" 
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-medium rounded-full hover:shadow-lg transition-all duration-200"
          >
            Contact Legal Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;