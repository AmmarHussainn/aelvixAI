import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoimage from '../assets/images/aelvixailogo.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    // { name: "About Us", path: "/about" },
    // { name: "Services", path: "/services" },
    // { name: "Resources", path: "/resources" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },

  ];

  return (
    <nav className="w-[98%]  bg-gradient-to-r from-gray-900 to-gray-800 text-white font-telegraf fixed top-5 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="text-2xl font-bold tracking-wide">
            <img src= {logoimage}  alt="logo" className="h-14  w-[120px]" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`relative text-sm transition ${
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-6 h-1 w-1 bg-blue-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <a
              href="/calendly-booking"
              className="ml-6 flex items-center  bg-white border border-blue-400 text-blue-400 px-8 py-3.5 gap-4 rounded-full hover:bg-blue-400 hover:text-white transition"
            >
              Launch Free Pilot <ArrowUpRight size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-6">
            {links.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`text-sm transition ${
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="/"
              className="flex items-center bg-[#ffffff] gap-1 border border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-400 hover:text-white transition font-telegraf"
            >
              Launch Free Pilot <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
