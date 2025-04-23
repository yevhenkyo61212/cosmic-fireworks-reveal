
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-card to-background/80 backdrop-blur-sm border border-border"
            >
              <Mail className="w-8 h-8 mb-4 text-[#C850C0]" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">contact@example.com</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-card to-background/80 backdrop-blur-sm border border-border"
            >
              <Phone className="w-8 h-8 mb-4 text-[#4158D0]" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 234 567 890</p>
            </motion.div>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="Your email" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Your message" 
                    className="bg-background/50 min-h-[150px]" 
                  />
                </div>
                <Button className="w-full bg-gradient-primary">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
