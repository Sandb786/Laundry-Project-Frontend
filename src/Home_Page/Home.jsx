import React from "react";
import { motion } from "framer-motion";
import Hadder from "./Hadder";
import Body1 from "./Body1";
import Footer from "./Footer";
import Subscribtion from "./Subscribtion";
import Fetures from "./Fetures";

export default function Home() {
  return (
    <div>
      
      <Hadder colorTo={"home"} />
      

      {/* Hero Section with Fade-In Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Body1 />
      </motion.div>

      {/* Features Section with Scroll Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: false }}
      >
        <Fetures />
      </motion.div>

      {/* Subscription Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: false }}
      >
        <Subscribtion />
      </motion.div>

      {/* Footer with Slide-Up Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: false }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
