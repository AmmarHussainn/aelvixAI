import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
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
              Privacy <span className="font-black bg-gradient-to-r from-[#2775EA] to-[#77DCBC] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              We are committed to protecting your privacy and handling your personal information with care. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            
            {/* Privacy Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={16} className="text-[#77DCBC]" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Lock size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Data Encrypted</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Eye size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Transparent</span>
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
                <a href="#overview" className="text-blue-600 hover:text-blue-800 transition-colors">1. Privacy Overview</a>
                <a href="#information-we-collect" className="text-blue-600 hover:text-blue-800 transition-colors">2. Information We Collect</a>
                <a href="#how-we-use" className="text-blue-600 hover:text-blue-800 transition-colors">3. How We Use Information</a>
                <a href="#data-sharing" className="text-blue-600 hover:text-blue-800 transition-colors">4. Data Sharing & Disclosure</a>
                <a href="#data-security" className="text-blue-600 hover:text-blue-800 transition-colors">5. Data Security</a>
                <a href="#data-retention" className="text-blue-600 hover:text-blue-800 transition-colors">6. Data Retention</a>
                <a href="#your-rights" className="text-blue-600 hover:text-blue-800 transition-colors">7. Your Privacy Rights</a>
                <a href="#international-transfers" className="text-blue-600 hover:text-blue-800 transition-colors">8. International Transfers</a>
                <a href="#compliance" className="text-blue-600 hover:text-blue-800 transition-colors">9. Compliance & Regulations</a>
                <a href="#contact-privacy" className="text-blue-600 hover:text-blue-800 transition-colors">10. Contact Us</a>
              </div>
            </div>

            {/* Privacy Content */}
            <div className="p-8 space-y-12">
              
              {/* Section 1 */}
              <section id="overview">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">1. Privacy Overview</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Privacy Policy describes how we collect, use, process, and disclose your information when you use our 
                    AI voice agent services. We are committed to protecting your privacy and ensuring transparency about our data practices.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our services are designed with privacy by design principles, ensuring that data protection is built into 
                    every aspect of our AI voice agents. We comply with applicable privacy laws including GDPR, CCPA, and HIPAA where applicable.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Key Principle:</strong> We collect only the data necessary to provide our services and never sell your personal information to third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="information-we-collect">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">2. Information We Collect</h2>
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Information You Provide</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Account information (name, email, phone number, company details)</li>
                    <li>Payment and billing information</li>
                    <li>Configuration settings for AI voice agents</li>
                    <li>Support and communication records</li>
                    <li>Custom scripts and conversation flows</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-3">Information We Collect Automatically</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Call recordings and transcriptions (when enabled)</li>
                    <li>Usage analytics and performance metrics</li>
                    <li>Device and browser information</li>
                    <li>IP addresses and location data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-3">Information from Third Parties</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>CRM and telephony system integrations</li>
                    <li>Calendar and scheduling platform data</li>
                    <li>Customer data provided by your organization</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="how-we-use">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">3. How We Use Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Users size={16} className="text-blue-600" />
                        Service Provision
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Operate AI voice agents</li>
                        <li>• Process customer calls</li>
                        <li>• Provide support services</li>
                        <li>• Maintain service quality</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Database size={16} className="text-blue-600" />
                        Analytics & Improvement
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Analyze usage patterns</li>
                        <li>• Improve AI performance</li>
                        <li>• Generate insights</li>
                        <li>• Optimize workflows</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    We process personal data based on legitimate interests, contractual necessity, legal obligations, 
                    and with your consent where required by law.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="data-sharing">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">4. Data Sharing & Disclosure</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, rent, or trade your personal information. We may share information in the following limited circumstances:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded">
                      <h4 className="font-medium text-green-900 mb-2">Service Providers</h4>
                      <p className="text-green-800 text-sm">
                        Third-party vendors who help us operate our services (cloud providers, payment processors) 
                        under strict confidentiality agreements.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded">
                      <h4 className="font-medium text-blue-900 mb-2">Legal Requirements</h4>
                      <p className="text-blue-800 text-sm">
                        When required by law, regulation, legal process, or to protect our rights and safety.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded">
                      <h4 className="font-medium text-purple-900 mb-2">Business Transfers</h4>
                      <p className="text-purple-800 text-sm">
                        In connection with mergers, acquisitions, or sale of assets, with appropriate privacy protections.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="data-security">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">5. Data Security</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement comprehensive security measures to protect your information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Encryption</h4>
                      <p className="text-sm text-gray-700">End-to-end encryption for all data in transit and at rest</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Access Controls</h4>
                      <p className="text-sm text-gray-700">Role-based access with multi-factor authentication</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900 mb-1">Monitoring</h4>
                      <p className="text-sm text-gray-700">24/7 security monitoring and incident response</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    We conduct regular security audits and maintain industry-standard certifications including SOC 2 Type II.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="data-retention">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">6. Data Retention</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We retain personal information only as long as necessary to provide our services and comply with legal obligations:
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Account Data</h4>
                        <p className="text-gray-700 text-sm mb-2">Retained during active subscription plus 3 years</p>
                        
                        <h4 className="font-medium text-gray-900 mb-2">Call Recordings</h4>
                        <p className="text-gray-700 text-sm">Configurable retention period (30 days to 7 years)</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Usage Analytics</h4>
                        <p className="text-gray-700 text-sm mb-2">Retained for 2 years for service improvement</p>
                        
                        <h4 className="font-medium text-gray-900 mb-2">Support Records</h4>
                        <p className="text-gray-700 text-sm">Retained for 3 years after case closure</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    You can request deletion of your data at any time, subject to legal and contractual obligations.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="your-rights">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">7. Your Privacy Rights</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">GDPR Rights (EU)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Access your data</li>
                        <li>• Rectify inaccurate data</li>
                        <li>• Erase your data</li>
                        <li>• Restrict processing</li>
                        <li>• Data portability</li>
                        <li>• Object to processing</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">CCPA Rights (California)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Know what data is collected</li>
                        <li>• Delete personal information</li>
                        <li>• Opt-out of sales</li>
                        <li>• Non-discrimination</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Exercise Your Rights:</strong> Contact our privacy team at support@aelvixai.com to exercise any of these rights. 
                      We will respond within 30 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="international-transfers">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">8. International Transfers</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may transfer your personal information to countries outside your jurisdiction. 
                    We ensure appropriate safeguards are in place:
                  </p>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Transfer Mechanisms</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Standard Contractual Clauses (SCCs)</li>
                        <li>• Adequacy decisions</li>
                        <li>• Binding Corporate Rules</li>
                        <li>• Data Processing Agreements</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    All international transfers comply with applicable data protection laws and include appropriate 
                    security measures to protect your information.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="compliance">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">9. Compliance & Regulations</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our privacy practices comply with multiple regulations and frameworks:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Healthcare Compliance</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">HIPAA (Healthcare)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">HITECH Act</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Privacy Regulations</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">GDPR (EU)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">CCPA (California)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">PIPEDA (Canada)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id="contact-privacy">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">10. Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Privacy Officer</h4>
                        <p className="text-gray-700 text-sm mb-1">Email: support@aelvixai.com</p>
                        <p className="text-gray-700 text-sm mb-1">Phone: +1 (555) 123-4567</p>
                        <p className="text-gray-700 text-sm">Response Time: 2-3 business days</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Data Protection Officer</h4>
                        <p className="text-gray-700 text-sm mb-1">Email: support@aelvixai.com</p>
                        <p className="text-gray-700 text-sm mb-1">For GDPR inquiries</p>
                        <p className="text-gray-700 text-sm">Available in multiple languages</p>
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
            Your Privacy Matters to Us
          </h2>
          <p className="text-white/80 mb-6">
            We're committed to transparency and protecting your personal information. 
            Contact our privacy team with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@aelvixai.com" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-medium rounded-full hover:shadow-lg transition-all duration-200"
            >
              Contact Privacy Team
            </a>
            <a 
              href="#your-rights" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Learn About Your Rights
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;