import React from 'react';

const Projects = () => {
  return (
    <div>
      {/* Projects Hero with Background Image */}
      <section
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?construction,project')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative z-10 text-3xl font-bold text-white">Our Projects</h2>
      </section>

      {/* Projects Section */}
      <section className="py-12 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <img src="https://source.unsplash.com/random/400x300/?dam" alt="Project 1" className="w-full h-48 object-cover mb-4" />
          <h4 className="text-xl font-bold">Irrigation Project A</h4>
          <p className="text-lg">Description of the project.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <img src="https://source.unsplash.com/random/400x300/?infrastructure" alt="Project 2" className="w-full h-48 object-cover mb-4" />
          <h4 className="text-xl font-bold">Dam Construction B</h4>
          <p className="text-lg">Description of the project.</p>
        </div>
        {/* Add more projects as needed */}
      </section>
    </div>
  );
};

export default Projects;