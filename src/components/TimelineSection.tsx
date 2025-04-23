
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const timelineEvents = [
  {
    year: 2024,
    title: "Senior Blockchain Developer",
    description: "Leading development of multiple DeFi platforms and NFT marketplaces.",
  },
  {
    year: 2023,
    title: "AI Integration Specialist",
    description: "Developed and implemented AI solutions for trading and automation.",
  },
  {
    year: 2022,
    title: "WebGL Technical Lead",
    description: "Led team in creating advanced 3D visualization projects.",
  },
  {
    year: 2021,
    title: "Full Stack Developer",
    description: "Built scalable web applications with blockchain integration.",
  },
  {
    year: 2020,
    title: "Junior Developer",
    description: "Started career in web development and blockchain technology.",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative bg-white bg-opacity-90 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-[#4158D0] to-[#C850C0] flex items-center justify-center">
                    <CalendarDays className="w-4 h-4 text-white" />
                  </div>
                  <CardContent className="p-6 ml-6">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-transparent">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
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

export default TimelineSection;
