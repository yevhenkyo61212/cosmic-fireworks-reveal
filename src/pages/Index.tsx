import React from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TimelineSection from '@/components/TimelineSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
            WebGL & Blockchain & AI Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Building the future with cutting-edge technology
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-primary rounded-lg transition-transform hover:scale-105 animate-gradient bg-[length:200%_200%]"
          >
            Explore My Work
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a senior developer with over 5 years of experience specializing in WebGL, Blockchain, and AI development. My expertise spans across Web3.js, smart contracts, web scraping, and Bot development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Blockchain Expertise</h3>
                <p className="text-gray-600">Specialized in Web3.js and smart contract development, creating secure and efficient blockchain solutions.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Development</h3>
                <p className="text-gray-600">Experience in implementing AI solutions and developing intelligent automation systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Sections */}
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
