
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Star, Award } from "lucide-react";

const skills = [
  {
    category: "Blockchain Development",
    items: ["Web3.js", "Smart Contracts", "DeFi", "NFT"],
    icon: <Star className="w-6 h-6" />,
    gradient: "from-[#4158D0] via-[#C850C0] to-[#FFCC70]"
  },
  {
    category: "AI & Automation",
    items: ["Machine Learning", "Web Scraping", "Bot Development", "Data Analysis"],
    icon: <Award className="w-6 h-6" />,
    gradient: "from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]"
  },
  {
    category: "WebGL & Graphics",
    items: ["Three.js", "WebGL", "Shader Programming", "3D Visualization"],
    icon: <Briefcase className="w-6 h-6" />,
    gradient: "from-[#FAD961] to-[#F76B1C]"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-white bg-opacity-90 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${skill.gradient} mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4158D0] to-[#C850C0]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
