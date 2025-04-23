import React from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TimelineSection from '@/components/TimelineSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bright">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 w-full max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#33C3F0] via-[#1EAEDB] to-[#F2FCE2] bg-clip-text text-transparent">
            Full-Stack Developer & Creative Technologist
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-10 max-w-4xl mx-auto">
            Crafting innovative digital experiences with cutting-edge technology and creative solutions for the modern web
          </p>
          <a
            href="#about"
            className="inline-block px-10 py-4 text-xl font-semibold text-white bg-gradient-primary rounded-lg transition-transform hover:scale-105 animate-gradient bg-[length:200%_200%] shadow-lg hover:shadow-xl"
          >
            Discover My Work
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-[#33C3F0] via-[#1EAEDB] to-[#F2FCE2] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl">
              I am a passionate full-stack developer with expertise in modern web technologies, creative problem-solving, and delivering exceptional user experiences. My approach combines technical excellence with innovative design thinking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="p-8 bg-gradient-to-br from-[#D3E4FD] to-[#E5DEFF] rounded-xl hover:scale-105 transition-transform duration-300 shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technical Expertise</h3>
                <p className="text-lg text-gray-700">Specialized in React, TypeScript, and modern web technologies, creating scalable and performant solutions.</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#E5DEFF] to-[#F2FCE2] rounded-xl hover:scale-105 transition-transform duration-300 shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Creative Innovation</h3>
                <p className="text-lg text-gray-700">Blending technical skills with creative thinking to build unique and engaging web experiences.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
