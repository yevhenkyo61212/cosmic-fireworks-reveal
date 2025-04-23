
import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Timeline', 'Testimonials'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-20 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
            Senior Developer
          </h1>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-[#4158D0] hover:via-[#C850C0] hover:to-[#FFCC70] hover:bg-clip-text transition-all duration-300 ease-in-out
                         after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#4158D0] after:via-[#C850C0] after:to-[#FFCC70]
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
