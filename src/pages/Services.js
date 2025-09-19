import React from 'react';

const Services = () => {
  return (
    <div>
      {/* Services Hero with Background Image */}
      <section
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?irrigation,dam')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative z-10 text-3xl font-bold text-white">Our Services</h2>
      </section>

      {/* Services List */}
      <section className="py-12 container mx-auto px-4">
        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>Irrigation Systems Development</li>
          <li>Water Management Solutions</li>
          <li>Infrastructure Construction</li>
          <li>Small and Large-Scale Dams</li>
          <li>Government Project Contracting</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;