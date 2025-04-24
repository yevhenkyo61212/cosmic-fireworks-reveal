
import React from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TimelineSection from '@/components/TimelineSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  // Hero section slides for intro
  const introSlides = [
    "I craft cutting-edge blockchain solutions with innovative AI integration",
    "Specialized in creating immersive 3D experiences with WebGL and Three.js",
    "Passionate about merging technology and design for unforgettable digital journeys",
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Auto-rotate slides
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % introSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [introSlides.length]);

  return (
    <div className="min-h-screen text-white">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-xl md:text-2xl font-light text-purple-300 mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 aurora-text leading-tight">
              Hi, I am XXX,
              <br />
              Senior Blockchain
              <br />
              & AI & WebGL Developer
            </h1>
            
            <div className="relative h-24 overflow-hidden mb-8">
              {introSlides.map((slide, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.7 }}
                  className="text-xl md:text-2xl text-white/80 absolute left-0"
                >
                  {slide}
                </motion.p>
              ))}
            </div>
            
            <div className="flex gap-6 mt-8">
              <Button 
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
                          text-white py-6 px-8 text-lg hover:shadow-[0_0_25px_rgba(155,89,182,0.8)] 
                          hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-400 text-white py-6 px-8 text-lg 
                          hover:bg-purple-500/20 transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          
          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden
                            border-4 border-purple-400/50 shadow-[0_0_35px_rgba(155,89,182,0.6)]">
              {/* You'll need to replace this with your photo */}
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-purple-500/20 blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-2xl"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-pink-500/30 blur-xl"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p className="text-purple-300 mb-2">Scroll to explore</p>
          <ChevronDown className="text-purple-300 w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-purple-900/30 backdrop-blur-md rounded-2xl p-10 shadow-xl aurora-border aurora-glow"
          >
            <h2 className="text-5xl font-bold mb-10 aurora-text">
              About Me
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-4xl">
              I am a passionate developer with expertise in blockchain technology, artificial intelligence, and WebGL visualization. My approach combines cutting-edge technical skills with innovative design thinking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="p-8 bg-purple-800/30 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md aurora-border">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Technical Expertise</h3>
                <p className="text-lg text-white/70">Specialized in smart contracts, AI-driven solutions, and immersive 3D experiences with WebGL, creating scalable and performant applications.</p>
              </div>
              <div className="p-8 bg-purple-800/30 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md aurora-border">
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">Creative Innovation</h3>
                <p className="text-lg text-white/70">Blending technical mastery with creative vision to build unique and engaging digital experiences that push the boundaries of what's possible.</p>
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
