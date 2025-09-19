import React, { useState } from 'react';
import { ArrowLeft, Cookie, Settings, Eye, BarChart3, Shield, Globe } from 'lucide-react';

const CookiesPolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // In a real application, this would save preferences to cookies/localStorage
    alert('Cookie preferences saved successfully!');
  };

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
              Cookies <span className="font-black bg-gradient-to-r from-[#2775EA] to-[#77DCBC] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Learn about how we use cookies and similar technologies to improve your experience 
              with our AI voice agent platform and provide personalized services.
            </p>
            
            {/* Cookie Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Cookie size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Essential Cookies</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Settings size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Your Control</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Eye size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Transparent</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={16} className="text-[#77DCBC]" />
                <span className="text-sm">Secure</span>
              </div>
            </div>
            
            <p className="text-sm text-white/60">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Preferences Section */}
      <section className="py-8 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Manage Your Cookie Preferences
            </h2>
            <p className="text-gray-700 mb-6 text-sm">
              Choose which types of cookies you're comfortable with. You can change these preferences at any time.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  key: 'necessary',
                  title: 'Necessary Cookies',
                  description: 'Essential for the website to function properly. These cannot be disabled.',
                  icon: Shield,
                  required: true
                },
                {
                  key: 'functional',
                  title: 'Functional Cookies',
                  description: 'Enable enhanced functionality and personalization features.',
                  icon: Settings,
                  required: false
                },
                {
                  key: 'analytics',
                  title: 'Analytics Cookies',
                  description: 'Help us understand how visitors interact with our website.',
                  icon: BarChart3,
                  required: false
                },
                {
                  key: 'marketing',
                  title: 'Marketing Cookies',
                  description: 'Used to track visitors across websites for advertising purposes.',
                  icon: Globe,
                  required: false
                }
              ].map((cookie) => (
                <div key={cookie.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <cookie.icon className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{cookie.title}</h3>
                      <p className="text-sm text-gray-600">{cookie.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {cookie.required && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Required</span>
                    )}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences[cookie.key]}
                        onChange={() => handlePreferenceChange(cookie.key)}
                        disabled={cookie.required}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 mt-6">
              <button 
                onClick={savePreferences}
                className="px-6 py-2 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-medium rounded-full hover:shadow-lg transition-all duration-200"
              >
                Save Preferences
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors duration-200">
                Accept All
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors duration-200">
                Reject All
              </button>
            </div>
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
                <a href="#what-are-cookies" className="text-blue-600 hover:text-blue-800 transition-colors">1. What Are Cookies?</a>
                <a href="#how-we-use-cookies" className="text-blue-600 hover:text-blue-800 transition-colors">2. How We Use Cookies</a>
                <a href="#types-of-cookies" className="text-blue-600 hover:text-blue-800 transition-colors">3. Types of Cookies We Use</a>
                <a href="#third-party-cookies" className="text-blue-600 hover:text-blue-800 transition-colors">4. Third-Party Cookies</a>
                <a href="#cookie-management" className="text-blue-600 hover:text-blue-800 transition-colors">5. Managing Cookies</a>
                <a href="#cookie-retention" className="text-blue-600 hover:text-blue-800 transition-colors">6. Cookie Retention</a>
                <a href="#updates" className="text-blue-600 hover:text-blue-800 transition-colors">7. Policy Updates</a>
                <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">8. Contact Information</a>
              </div>
            </div>

            {/* Cookie Policy Content */}
            <div className="p-8 space-y-12">
              
              {/* Section 1 */}
              <section id="what-are-cookies">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">1. What Are Cookies?</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies contain information that is transferred to your device's hard drive. They help us improve our website 
                    and deliver a better, more personalized service by enabling us to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Estimate our audience size and usage patterns</li>
                    <li>Store information about your preferences and customize our website accordingly</li>
                    <li>Speed up your searches and navigation</li>
                    <li>Recognize you when you return to our website</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> Cookies do not contain personally identifiable information about you unless you have provided such information to our website.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="how-we-use-cookies">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">2. How We Use Cookies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies for various purposes to enhance your experience with our AI voice agent platform:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Shield size={16} className="text-green-600" />
                        Security & Authentication
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Secure user sessions</li>
                        <li>• Prevent unauthorized access</li>
                        <li>• Maintain login status</li>
                        <li>• Detect fraudulent activity</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Settings size={16} className="text-blue-600" />
                        Functionality
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Remember your preferences</li>
                        <li>• Customize dashboard layouts</li>
                        <li>• Store language settings</li>
                        <li>• Maintain form data</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <BarChart3 size={16} className="text-purple-600" />
                        Analytics & Performance
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Track website usage</li>
                        <li>• Monitor performance</li>
                        <li>• Analyze user behavior</li>
                        <li>• Improve our services</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                        <Globe size={16} className="text-orange-600" />
                        Marketing & Advertising
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Deliver relevant content</li>
                        <li>• Measure campaign effectiveness</li>
                        <li>• Personalize advertisements</li>
                        <li>• Retargeting campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="types-of-cookies">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">3. Types of Cookies We Use</h2>
                <div className="prose prose-gray max-w-none">
                  <div className="space-y-6">
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Strictly Necessary Cookies
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        These cookies are essential for you to browse the website and use its features. Without these cookies, 
                        services you have asked for cannot be provided.
                      </p>
                      <div className="bg-green-50 p-3 rounded text-sm">
                        <strong className="text-green-800">Examples:</strong>
                        <span className="text-green-700"> Session cookies, authentication cookies, load balancing cookies</span>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-blue-600" />
                        Functional Cookies
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                      </p>
                      <div className="bg-blue-50 p-3 rounded text-sm">
                        <strong className="text-blue-800">Examples:</strong>
                        <span className="text-blue-700"> Language preferences, region settings, accessibility options</span>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                        Performance/Analytics Cookies
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        These cookies collect information about how visitors use our website, helping us improve performance and user experience.
                      </p>
                      <div className="bg-purple-50 p-3 rounded text-sm">
                        <strong className="text-purple-800">Examples:</strong>
                        <span className="text-purple-700"> Google Analytics, Hotjar, performance monitoring cookies</span>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-orange-600" />
                        Targeting/Advertising Cookies
                      </h3>
                      <p className="text-gray-700 text-sm mb-3">
                        These cookies are used to deliver advertisements more relevant to you and your interests.
                      </p>
                      <div className="bg-orange-50 p-3 rounded text-sm">
                        <strong className="text-orange-800">Examples:</strong>
                        <span className="text-orange-700"> Google Ads, Facebook Pixel, LinkedIn Insight Tag</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="third-party-cookies">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">4. Third-Party Cookies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We work with trusted third-party services that may set cookies on your device. These services help us provide 
                    better functionality and understand how our website is used.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Service</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Purpose</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Privacy Policy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Google Analytics</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Website usage analytics</td>
                          <td className="px-4 py-3 text-sm">
                            <a href="/" className="text-blue-600 hover:text-blue-800">View Policy</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Calendly</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Appointment scheduling</td>
                          <td className="px-4 py-3 text-sm">
                            <a href="/" className="text-blue-600 hover:text-blue-800">View Policy</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Stripe</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Payment processing</td>
                          <td className="px-4 py-3 text-sm">
                            <a href="/" className="text-blue-600 hover:text-blue-800">View Policy</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-900">Intercom</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Customer support chat</td>
                          <td className="px-4 py-3 text-sm">
                            <a href="/" className="text-blue-600 hover:text-blue-800">View Policy</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="cookie-management">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">5. Managing Cookies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have several options for managing cookies on our website:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Our Cookie Settings</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Use our cookie preference center (above) to enable or disable specific types of cookies.
                      </p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Manage Preferences ↑
                      </button>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Browser Settings</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Configure cookie settings directly in your browser. Most browsers allow you to block or delete cookies.
                      </p>
                      <div className="space-y-1 text-sm">
                        <a href="/" className="text-blue-600 hover:text-blue-800 block">Chrome Settings</a>
                        <a href="/" className="text-blue-600 hover:text-blue-800 block">Firefox Settings</a>
                        <a href="/" className="text-blue-600 hover:text-blue-800 block">Safari Settings</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Please Note:</strong> Disabling certain cookies may affect the functionality of our website. 
                      Some features may not work properly if necessary cookies are blocked.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="cookie-retention">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">6. Cookie Retention</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Different cookies have different lifespans based on their purpose:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Session Cookies</h4>
                        <p className="text-gray-700 text-sm">Deleted when you close your browser</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Persistent Cookies</h4>
                        <p className="text-gray-700 text-sm">Remain on your device for a set period (typically 30 days to 2 years)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                        <p className="text-gray-700 text-sm">Typically stored for 24 months for trend analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="updates">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">7. Policy Updates</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When we make significant changes, we will:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>Update the "Last Updated" date at the top of this policy</li>
                    <li>Notify you through our website or email</li>
                    <li>Provide a summary of key changes</li>
                    <li>Allow you to review and update your cookie preferences</li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section id="contact">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">8. Contact Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Privacy Team</h4>
                        <p className="text-gray-700 text-sm mb-1">Email: support@aelvixai.com</p>
                        <p className="text-gray-700 text-sm mb-1">Phone: +1 (555) 123-4567</p>
                        <p className="text-gray-700 text-sm">Response Time: 1-2 business days</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Technical Support</h4>
                        <p className="text-gray-700 text-sm mb-1">Email: support@aelvixai.com</p>
                        <p className="text-gray-700 text-sm mb-1">For cookie-related technical issues</p>
                        <p className="text-gray-700 text-sm">Available 24/7</p>
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
            Take Control of Your Cookie Preferences
          </h2>
          <p className="text-white/80 mb-6">
            We believe in transparency and giving you control over your data. 
            Manage your cookie preferences or contact us with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-medium rounded-full hover:shadow-lg transition-all duration-200">
              Manage Cookie Preferences
            </button>
            <a 
              href="mailto:support@aelvixai.com" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;