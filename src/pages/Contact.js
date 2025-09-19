import React, { useState } from 'react';
import { Facebook, Linkedin, Instagram, Twitter, ArrowUpRight } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return (
    <div>
      {/* Contact Hero with Background Image */}
      <section
        className=" h-[550px] bg-black  font-telegraf"
      // style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?office,contact')" }}
      >
        <div className='pt-[300px]'>
          <h2 className="text-3xl md:text-[55px] font-normal text-white w-fit mx-auto ">Get In Touch </h2>
          <span className='flex items-center gap-2 mt-3 mx-auto w-fit'>
            <p className='text-md md:text-lg font-normal text-white'>Home</p>
            <span className='flex gap-1 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M1.00005 13.5C1.00005 13.5 7 9.0811 7 7.5C7 5.9188 1 1.5 1 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                <path d="M1.00005 13.5C1.00005 13.5 7 9.0811 7 7.5C7 5.9188 1 1.5 1 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p className='text-md md:text-lg font-black text-white'>Contact Us</p>

          </span>
        </div>
      </section>


      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto font-telegraf grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">

          {/* Phone */}
          <div className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="./phone.png"
                alt="Phone"
                className="w-[60px] h-[60px] rounded-xl object-contain"
              />
              <h3 className="text-xl md:text-2xl font-normal text-gray-800">Phone</h3>
            </div>
            <div className="flex items-center justify-between mt-8">
              <p className="text-gray-700 text-lg md:text-xl">+1 (234) 4564 4564</p>
              <a
                href="tel:+123445644564"
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="./emailicon.png"
                alt="Email"
                className="w-[60px] h-[60px] rounded-xl object-contain"
              />
              <h3 className="text-xl md:text-2xl font-normal text-gray-800">Email</h3>
            </div>
            <div className="flex items-center justify-between mt-8">
              <p className="text-gray-700 text-lg md:text-xl">support@aelvixai.com</p>
              <a
                href="mailto:support@aelvixai.com"
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="./emailicon.png"
                alt="Address"
                className="w-[60px] h-[60px] rounded-xl object-contain"
              />
              <h3 className="text-xl md:text-2xl font-normal text-gray-800">Address</h3>
            </div>
            <div className="flex items-center justify-between mt-8">
              <p className="text-gray-700 text-lg md:text-xl">123 Street, USA</p>
              <a
                href="https://maps.google.com"
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="./followus.png"
                alt="Follow Us"
                className="w-[60px] h-[60px] rounded-xl object-contain"
              />
              <h3 className="text-xl md:text-2xl font-normal text-gray-800">Follow Us</h3>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-3">
                <a href="/" className="border border-[#0000004D] hover:bg-gray-100 p-2 rounded-md">
                  <Facebook size={18} />
                </a>
                <a href="/" className="border border-[#0000004D] hover:bg-gray-100 p-2 rounded-md">
                  <Linkedin size={18} />
                </a>
                <a href="/" className="border border-[#0000004D] hover:bg-gray-100 p-2 rounded-md">
                  <Instagram size={18} />
                </a>
                <a href="/" className="border border-[#0000004D] hover:bg-gray-100 p-2 rounded-md">
                  <Twitter size={18} />
                </a>
              </div>
              <a
                href="/"
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* Contact Info */}
      <section className="py-12 container mx-auto">
        <div className="max-w-7xl mx-auto  px-4 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">


          <div className="bg-[#F9F9F9] w-full lg:w-[60%]  rounded-2xl p-8 lg:p-10 font-telegraf">
            <h2 className="text-3xl lg:text-5xl font-normal text-gray-900 mb-4">
              Let's Talk!
            </h2>
            <p className="text-gray-600 mb-8">
              Get in touch with us using the enquiry form or contact details below
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. johndoe"
                    className="w-full px-4 py-3 border border-gray-300 bg-[#F9F9F9] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. johndoe@gmail.com"
                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex gap-3 items-center justify-center px-8 py-3 bg-gradient-to-r from-[#2775EA] to-[#77DCBC]  text-white font-medium rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          <img src='/LetsTalk.png' alt='letstalk' className='w-full lg:w-[40%] ' />
        </div>

      </section>


      <section>
        <div className='w-full h-[500px]'>
          <img src='/map.png' alt='map' className='w-full h-full object-cover' />
        </div>
      </section>
    </div>
  );
};

export default Contact;