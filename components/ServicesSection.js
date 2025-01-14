import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import AnimatedGradientText from "@/components/AnimatedGradientText";

const ServiceCard = ({ number, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] border-gray-800 mt-7 flex-col px-4 md:px-6 py-5 rounded-lg border-2"
    >
      <h1 className="text-3xl md:text-4xl">{number}</h1>
      <h1 className="text-2xl md:text-3xl mt-2">{title}</h1>
      <p className="text-gray-600 mt-3">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-black px-4 md:px-8 lg:px-12 font-medium text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <AnimatedGradientText 
            text="Providing is our duty, services are our job" 
            className="font-medium text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto lg:mx-0 pt-8 lg:pt-24"
          />
          <p className="text-lg md:text-xl text-gray-500 mt-6">
            Why is it that we are <strong>special</strong>, why should <strong>you</strong> choose us?
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-between mt-8">
          <ServiceCard
            number="1."
            title="Fast connections."
            description="We make connecting from one place to another as fast as a blynk, because it is our responsiblity to create a seamless experience for all our users."
            delay={0.2}
          />
          <ServiceCard
            number="2."
            title="Simple, and responsive UI."
            description="Our UI, at blynkerr, is simple elegant and responsive without compromising on the overall functionality of our usecase. This allows our users to easily express themselves in a much more clean manner."
            delay={0.4}
          />
          <ServiceCard
            number="3."
            title="New features all across."
            description="We at blynkerr, don't just believe in developing, we believe in refining. All out features are tested thoroughly and are always approved by the board before version publication."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;