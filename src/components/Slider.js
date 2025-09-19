import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import bgImage1 from "../assets/images/maya-g.jpg"
import bgImage2 from "../assets/images/gpg.jpg"
import bgImage3 from "../assets/images/jor.jpg"

const AIVoiceAgentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const agents = [
    {
      id: 1,
      name: "Alex",
      department: "Customer Support",
      image: bgImage1,
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      name: "Maya",
      department: "Healthcare Department",
      image: bgImage2,
      bgColor: "bg-red-500"
    },
    {
      id: 3,
      name: "Jordan",
      department: "Sales Team",
      image: bgImage3,
      bgColor: "bg-green-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % agents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + agents.length) % agents.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % agents.length);
  }, 5000);

  return () => clearInterval(interval);
}, [agents.length]);


  return (
    <section className='py-10 md:py-20 bg-white'>
      <div className="w-full max-w-7xl mx-auto px-6 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[55px] font-normal mb-6 px-6 md:leading-[70px]">  Meet Our <span className='font-black bg-custom-gradient py-0.5 bg-clip-text text-transparent'>AI Voice </span>Agents</h2>

          <p className="text-sm md:text-xl font-normal md:leading-[32px] text-center mb-6">
            Our AI Voice Agent handles calls with speed and accuracy, ensuring every customer gets instant <br />
            support. Designed to reduce workload, it frees your team to focus on what matters most.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center">
            {/* Left Tilted Card */}
            <div
              className="absolute left-8 lg:left-10 transform scale-75 opacity-70 transition-all duration-500 cursor-pointer hover:opacity-90 z-10"
              style={{
                transform: 'scale(0.75) rotateY(-25deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
              onClick={prevSlide}
            >
              <AgentCard
                agent={agents[(currentSlide - 1 + agents.length) % agents.length]}
                isActive={false}
              />
            </div>

            {/* Center Active Card */}
            <div className="transform scale-100 transition-all duration-500 z-20 relative">
              <AgentCard
                agent={agents[currentSlide]}
                isActive={true}
              />
            </div>

            {/* Right Tilted Card */}
            <div
              className="absolute right-8 lg:right-10 transform scale-75 opacity-70 transition-all duration-500 cursor-pointer hover:opacity-90 z-10"
              style={{
                transform: 'scale(0.75) rotateY(25deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
              onClick={nextSlide}
            >
              <AgentCard
                agent={agents[(currentSlide + 1) % agents.length]}
                isActive={false}
              />
            </div>
          </div>

          {/* Optional Navigation Arrows (smaller, less prominent) */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30 lg:hidden"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30 lg:hidden"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 space-x-3">
          {agents.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-blue-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AgentCard = ({ agent, isActive }) => {
  return (
    <div  style={{ backgroundImage: `url(${agent.image})` }} className={`relative rounded-3xl bg-image bg-center bg-cover  overflow-hidden transition-all duration-500 ${isActive ? 'w-80 h-96 md:w-[460px] md:h-[502px]' : 'w-72 h-80 md:w-[392px] md:h-[428px]'
      }`}>
      {/* Play Button */}
      {isActive && (
        <button className="absolute top-6 left-6 z-10 bg-blue-500 rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors duration-300">
          <Play className="w-5 h-5 text-white fill-white" />
        </button>
      )}

      {/* Agent Image */}
      <div className="relative h-full ml-auto w-fit flex flex-col justify-end p-6">
        {/* Agent Info */}
        <div className="bg-white rounded-xl p-4 shadow-lg relative z-10">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
          <p className="text-gray-600 text-sm">{agent.department}</p>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceAgentSlider;