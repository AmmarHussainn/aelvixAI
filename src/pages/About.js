import React from 'react';

const About = () => {
  return (
    <div>
      {/* About Hero with Background Image */}
      <section
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?construction,site')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative z-10 text-3xl font-bold text-white">About Us</h2>
      </section>

      {/* Our Story Section */}
      <section className="py-12 container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
        <p className="text-lg mb-4">
          Our company was founded in 1990 by Mr. Basheer Ahmed Soomro, who laid the foundation with a vision to contribute in the field of construction and development. Through his dedication, hard work, and professional commitment, the company earned recognition for delivering quality projects, especially in the irrigation and infrastructure sector.
        </p>
        <p className="text-lg mb-4">
          In continuation of his legacy, the company is now being led by Mr. Furqan Ali Soomro, who has expanded the scope of services and strengthened the company's reputation. Under his leadership, the company has undertaken major projects in irrigation, lining, small dams, and large-scale structures, ensuring timely delivery with quality and professionalism.
        </p>
        <p className="text-lg">
          Today, we are proudly registered with the Pakistan Engineering Council (PEC) as a No Limit Construction Company, reflecting our capacity to execute projects of any scale with excellence.
        </p>
      </section>
    </div>
  );
};

export default About;