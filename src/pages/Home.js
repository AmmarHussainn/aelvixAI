import { ArrowUpRight, Quote } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import bgImage from "../assets/images/videos/hero-1.png";
import bgImage2 from "../assets/images/containers.png";
import AIVoiceAgentSlider from '../components/Slider';

const Home = () => {
  // Hook for scroll-triggered animations
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: trustedRef, inView: trustedInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: enterpriseRef, inView: enterpriseInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: resultsRef, inView: resultsInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: availabilityRef, inView: availabilityInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: deploymentRef, inView: deploymentInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: industryRef, inView: industryInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className='font-telegraf'>
      {/* HERO SECTION */}
      <section ref={heroRef} className='bg-black pt-[200px]'>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className={`text-4xl md:text-[55px] font-normal mb-6 px-6 md:leading-[70px] transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Reinvent Business Communication with <br /> Next-Generation <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>AI Voice Agents</span>
          </h2>
          <p className={`text-sm md:text-xl font-normal px-6 md:leading-[32px] text-center mb-6 transition-all duration-1000 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Revolutionize customer support, automate queries, and streamline communication <br /> with next-gen AI voice agents tailored for your industry.
          </p>
          <button
            type="submit"
            className={`inline-flex gap-3 mb-8 items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-pulse ${heroInView ? 'opacity-100' : 'opacity-0'}`}
          >
            Book a Demo <ArrowUpRight size={24} />
          </button>
          <div>
            <div
              style={{ backgroundImage: `url(${bgImage})` }}
              className={`w-[90%] md:w-[70%] mx-auto h-[400px] bg-cover bg-center rounded-t-[20px] relative transition-all duration-1000 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <img className='md:w-[200px] w-[150px] absolute right-0 bottom-0 animate-float' src='./hero-2.png' alt="Hero secondary" />
              <img className='w-[326px] md:block hidden absolute left-[-15%] top-[-15%] animate-float delay-200' src='./float-1.png' alt="Float 1" />
              <img className='w-[326px] md:block hidden absolute right-[-15%] top-[-15%] animate-float delay-400' src='./float-2.png' alt="Float 2" />
              <img className='w-[326px] md:block hidden absolute left-[-15%] bottom-20 animate-float delay-600' src='./float-3.png' alt="Float 3" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED SECTION */}
      <section ref={trustedRef} className='py-10 md:py-20 bg-white'>
        <div className='px-6 max-w-7xl mx-auto'>
          <p className={`text-xl font-normal px-6 md:leading-[32px] text-center mb-6 transition-all duration-1000 ${trustedInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Trusted by Leading Logistics Innovators
          </p>
          <div className="flex justify-center gap-4 items-center mb-4 flex-wrap">
            {['t-1.png', 't-2.png', 't-3.png', 't-3.png'].map((src, index) => (
              <img
                key={index}
                className={`w-[220px] transition-all duration-1000 delay-${index * 100} ${trustedInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                src={src}
                alt={`Trusted logo ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex justify-center gap-4 items-center mb-6 flex-wrap">
            {['t-4.png', 't-5.png', 't-6.png', 't-7.png'].map((src, index) => (
              <img
                key={index}
                className={`w-[220px] transition-all duration-1000 delay-${index * 100} ${trustedInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                src={src}
                alt={`Trusted logo ${index + 5}`}
              />
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <button
              type="submit"
              className={`inline-flex gap-3 mx-auto items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-pulse ${trustedInView ? 'opacity-100' : 'opacity-0'}`}
            >
              Read Their Stories <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SECTION */}
      <section ref={enterpriseRef} className='py-10 md:py-20 bg-black'>
        <div className='px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-center'>
          <div className='lg:w-[55%]'>
            <h2 className={`text-4xl md:text-[40px] text-white font-normal mb-6 md:leading-[65px] text-left font-telegraf transition-all duration-1000 ${enterpriseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Enterprise-Grade <span className='font-black ml-2 bg-custom-gradient py-0.5 bg-clip-text text-transparent'>AI Call</span> Handling for Modern Workflows
            </h2>
            <p className={`text-sm text-white text-left font-normal md:leading-[25px] mb-6 transition-all duration-1000 delay-200 ${enterpriseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our AI voice agents eliminate repetitive call handling, freeing teams to focus on strategy and growth.
            </p>
            <div>
              {[
                { title: 'Reception & Routing', desc: 'Every call answered, instantly directed, and logged into your systems', src: './phone-c.png' },
                { title: 'Appointment Scheduling', desc: 'Automated, accurate, and always synced with your calendar', src: './phone-c.png' },
                { title: 'Customer Support & Onboarding', desc: 'Resolve FAQs, qualify leads, and create support tickets in real time', src: './phone-c.png' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex p-4 gap-3 items-center bg-[#181818] rounded-[20px] mb-4 transition-all duration-500 delay-${index * 100} 
      ${enterpriseInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} 
      hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffffff22]`}
                >
                  <div>
                    <img className='w-[60px]' src={item.src} alt={item.title} />
                  </div>
                  <div>
                    <p className="text-[24px] text-white text-left font-normal md:leading-[24px] mb-2">{item.title}</p>
                    <p className="text-sm text-white text-left font-normal md:leading-[24px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={`text-sm text-white text-left font-normal md:leading-[25px] mt-6 transition-all duration-1000 delay-300 ${enterpriseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Empower your team to focus on revenue, clients, and innovation, while AI handles the rest
            </p>
          </div>
          <div className={`lg:w-[45%] bg-custom-gradient rounded-[20px] p-[50px] h-fit transition-all duration-1000 ${enterpriseInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img src='./maya.png' alt="Enterprise AI" className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* ENTERPRISE RESULTS SECTION */}
      <section ref={resultsRef} className='py-10 md:py-20 bg-white'>
        <div className='px-6 max-w-7xl mx-auto'>
          <div className='mx-auto'>
            <h2 className={`text-4xl md:text-[55px] font-normal mb-3 px-6 md:leading-[65px] text-center transition-all duration-1000 ${resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Enterprise Results You Can <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>Measure</span>
            </h2>
            <p className={`text-md font-normal px-6 md:leading-[24px] text-center mb-6 transition-all duration-1000 delay-200 ${resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Unlock tangible ROI with reduced costs, faster workflows, and improved customer satisfaction.<br /> Track performance with clear metrics that highlight growth, efficiency, and long-term impact.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              { title: 'Regional Healthcare Network', desc: 'Reduced no-shows by 42% and saved $15K per month with AI scheduling, while boosting customer satisfaction and operational efficiency.', src: './result-1.png' },
              { title: 'Solar Energy Installer', desc: 'Increased qualified appointments by 65%, achieved ROI in just 60 days, driving faster growth and maximizing sales team productivity.', src: './result-2.png' },
            ].map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 100} ${resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <img src={item.src} alt={item.title} className="hover:scale-105 transition-transform duration-300" />
                <p className="text-[32px] font-normal md:leading-[32px] text-left mb-3 mt-5">{item.title}</p>
                <p className="text-[16px] font-normal md:leading-[24px] text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABILITY SECTION */}
      <section ref={availabilityRef} className='py-5 md:py-10 bg-black'>
        <div className='px-6 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { value: '24/7', label: 'Availability' },
              { value: '100%', label: 'GDPR & HIPAA compliant' },
              { value: '99.9%', label: 'Uptime' },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 delay-${index * 100} ${availabilityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h2 className='font-normal bg-custom-gradient py-0.5 bg-clip-text text-transparent text-4xl md:text-[50px] mb-4'>{item.value}</h2>
                <p className="text-sm md:text-medium text-white font-normal px-6 md:leading-[32px]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE DEPLOYMENT SECTION */}
      <section ref={deploymentRef} className='py-10 md:py-20 bg-white'>
        <div className='px-6 max-w-7xl mx-auto'>
          <div className='mx-auto mb-6'>
            <h2 className={`text-4xl md:text-[55px] font-normal mb-3 px-6 md:leading-[65px] text-center transition-all duration-1000 ${deploymentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Enterprise <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>Deployment</span> Made Simple
            </h2>
            <p className={`text-md font-normal px-6 md:leading-[24px] text-center mb-6 transition-all duration-1000 delay-200 ${deploymentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Get up and running quickly with a guided setup designed for minimal disruption.<br /> Scale effortlessly with ongoing optimization and integrations tailored to your needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 '>
            <div className='bg-black rounded-[16px] py-8 md:py-10 px-7 mb-4'>
              {[
                { step: 'Step 01', title: 'Setup', duration: '(Week 1)' },
                { step: 'Step 02', title: 'Launch', duration: '(Weeks 2–3)' },
                { step: 'Step 03', title: 'Scale', duration: '(Ongoing)' },
              ].map((item, index) => (
               <div
  key={index}
  className={`
    p-3 rounded-[16px] 
    ${index === 0 ? 'bg-custom-gradient' : 'bg-[#181818]'} 
    mb-2 
    transition-all duration-500 ease-in-out cursor-pointer
    hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30
    ${deploymentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
  `}
>
  <p className="text-sm font-normal text-left mb-2 text-white">{item.step}</p>
  <p className="text-[20px] lg:text-[28px] font-normal text-white flex gap-1">
    {item.title} <span className='font-telegraflight'>{item.duration}</span>
  </p>
</div>

              ))}
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center'>
              <img
                src='./deploy-bg.jpg'
                className={`rounded-[20px] md:w-[631px] transition-all duration-1000 ${deploymentInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                alt="Deployment background"
              />
              <p className={`text-[20px] font-normal md:leading-[32px] text-center mb-3 mt-5 transition-all duration-1000 delay-200 ${deploymentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Assess existing workflows, identify bottlenecks, and configure the <br />AI platform to align with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS SECTION */}
      <section
        ref={industryRef}
        style={{ backgroundImage: `url(${bgImage2})` }}
        className="relative text-white h-[900px] bg-cover bg-center flex items-end"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full flex md:flex-row flex-col">
          <div className={`md:text-center text-left lg:text-left mb-12 max-w-3xl transition-all duration-1000 ${industryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Industry Solutions Tailored for Enterprise Needs
            </h2>
            <p className="mt-4 text-sm sm:text-md">
              Our AI adapts to your industry’s unique workflows, from patient care to fleet management, with enterprise precision and compliance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Healthcare & Clinics', desc: 'Reduce no-shows, optimize scheduling, maintain HIPAA compliance.' },
              { title: 'Logistics & Transportation', desc: 'Book drivers, track shipments, and update customers in real time.' },
              { title: 'Professional Services', desc: 'Automate scheduling, confirmations, and client updates at scale.' },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 shadow-md hover:shadow-xl transition backdrop-blur-sm hover:scale-105 transition-all duration-1000 delay-${index * 100} ${industryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h3 className="text-xl font-normal">{item.title}</h3>
                <p className="mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <AIVoiceAgentSlider />

      {/* INTRODUCTION SECTION */}
      <section ref={introRef} className='py-10 md:py-20 bg-[#F9F9F9]'>
        <div className='px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-center'>
          <div className='w-full lg:w-[50%]'>
            <h2 className={`text-3xl sm:text-4xl md:text-[40px] font-normal mb-2 leading-snug md:leading-[65px] text-left font-telegraf w-full break-words transition-all duration-1000 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Why <span className="font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent mx-2">Enterprises</span> Choose Us
            </h2>
            <p className={`text-sm text-left font-normal md:leading-[25px] mb-4 transition-all duration-1000 delay-200 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Trusted by leading organizations for our proven scalability, reliability, and innovation. We deliver measurable business outcomes with faster adoption and continuous optimization.
            </p>
            <div>
              {[
                { title: 'Human-like Conversations', desc: 'Multilingual, contextual, and indistinguishable from live agents', src: './chat.png' },
                { title: 'Seamless Integrations', desc: 'Works with Salesforce, HubSpot, calendars, and major telephony platforms', src: './chat.png' },
                { title: 'Smart Analytics', desc: 'Real-time dashboards for call quality, customer satisfaction, and ROI', src: './chat.png' },
                { title: 'Proven ROI', desc: 'Documented savings, faster response times, and measurable CX improvements', src: './chat.png' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex p-4 gap-3 items-center bg-[#FFFFFF] rounded-[20px] mb-3 transition-all duration-500 delay-${index * 100}
      ${introInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} 
      hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300`}
                >
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    <img className="w-[60px]" src={item.src} alt={item.title} />
                  </div>
                  <div>
                    <p className="text-[24px] text-left font-normal md:leading-[24px] mb-2">{item.title}</p>
                    <p className="text-sm text-left font-normal md:leading-[24px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className={`lg:w-[50%] w-full rounded-[20px] h-fit transition-all duration-1000 ${introInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img src='./gentelmen.png' alt="Enterprise choice" className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section ref={testimonialRef} className='py-10 md:py-20 bg-[#FFFFFF]'>
        <section className="bg-black text-white max-w-7xl mx-auto xl:rounded-[30px] py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${testimonialInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-normal mb-6">Our Clients Say</h2>
              <p className="text-white leading-relaxed">
               We take pride in delivering excellent service and building lasting relationships. Here’s what some of our clients have shared about their experience with us.
    
                    </p>
            </div>
            <div className={`relative bg-transparent transition-all duration-1000 delay-200 ${testimonialInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col items-start text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-black hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white text-left mb-4">
                   "The team was professional, responsive, and delivered beyond expectations. I couldn’t be happier with the results and would highly recommend them to anyone."
    
                  </p>
                <h4 className="font-normal text-2xl">John Doe</h4>
              </div>
              <Quote className="absolute -top-4 right-0 text-white opacity-80 w-10 h-10 animate-pulse" strokeWidth={2.5} />
            </div>
          </div>
        </section>
      </section>

      {/* CLOUDS SECTION */}
      <section ref={ctaRef} className="relative w-full min-h-[450px] flex items-center justify-center text-center bg-blue-500 overflow-hidden">
        <img
          src="/clouds.png"
          alt="Clouds"
          className={`absolute bottom-0 left-0 w-full h-auto pointer-events-none transition-all duration-1000 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        <img
          src="/plane.png"
          alt="Plane"
          className={`absolute top-10 md:left-0 w-40 md:w-64 animate-float scale-x-[-1] transition-all duration-1000 ${ctaInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className={`text-4xl md:text-[50px] text-white font-normal mb-6 px-6 md:leading-[65px] transition-all duration-1000 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ready to Transform <span className="font-bold">Enterprise</span> Communication?
          </h1>
          <p className={`text-sm md:text-xl text-white font-normal px-6 md:leading-[32px] text-center mb-6 transition-all duration-1000 delay-200 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience a risk-free pilot, launch AI voice automation in your business with zero upfront risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="submit"
              className={`inline-flex gap-3 md:mb-8 items-center justify-center px-10 py-3.5 bg-gradient-to-r from-[#2775EA] to-[#77DCBC] text-white font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-pulse ${ctaInView ? 'opacity-100' : 'opacity-0'}`}
            >
              Book a Demo <ArrowUpRight size={24} />
            </button>
            <button
              type="submit"
              className={`inline-flex gap-3 md:mb-8 items-center justify-center px-10 py-3.5 bg-white text-blue-600 font-normal rounded-full focus:ring-4 focus:ring-blue-500/25 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-pulse ${ctaInView ? 'opacity-100' : 'opacity-0'}`}
            >
              Launch Free Pilot <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;