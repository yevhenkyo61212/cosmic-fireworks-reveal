
import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Timeline', 'Testimonials'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#33C3F0] to-[#1EAEDB] bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-700 hover:text-[#33C3F0] transition-colors duration-300
                         relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#33C3F0]
                         after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
